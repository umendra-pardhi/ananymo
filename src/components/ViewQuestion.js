import { useState,useEffect,useRef } from "react";
import { useLocation,Link } from "react-router-dom";
import { getDatabase,ref,get,child,update,onValue,set,push,orderByChild,equalTo } from "firebase/database";
import { getAuth,onAuthStateChanged } from "firebase/auth";

function ViewQuestion(props) {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const qidp = queryParams.get("qid");
  const [qid,setQid]=useState(qidp);
  const [qData,setQData]=useState([])
  const [quid,setQuid]=useState()
  const [pp,setPP]=useState()  
  const [voteCount, setVoteCount] = useState(0);
  const [hasVotedUp, setHasVotedUp] = useState(false);
const [hasVotedDown, setHasVotedDown] = useState(false);
const [ansData,setAnsData]=useState([])

const [isLoading, setIsLoading] = useState(false);
const [successMessage, setSuccessMessage] = useState('');
const [ansBody, setAnsBody] = useState("");
const [isLoggedin, setisLoggedin] = useState(false);
const [uid, setUID] = useState();
const [hasAnswered, setHasAnswered] = useState(false);

const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUID(user.uid);
        setPP(user.photoURL)
        setisLoggedin(true);
      } else {
        setisLoggedin(false);
      }
    });
  }, [isLoggedin]);

{/* question data */}

  useEffect(() => {
    const database = getDatabase();
    const dbRef = ref(database, "questions");

    const unsubscribe = onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = [];
          snapshot.forEach((child) => {
            if (child.val().q_id === qid) {
              setQuid(child.val().uid)

              data.push({
                key: child.key,
              uid: child.val().uid,
              duid:(child.val().uid).slice(0,6),
              q_id: child.val().q_id,
              title: child.val().title,
              desc: (child.val().desc),
              ans_count: child.val().ans_count,
              vote_count: child.val().vote_count,
              date: (child.val().date).match(/^\w+\s\w+\s\d+/)[0],
              tags: "",
              views: child.val().views,   

              });
            }
          });
setQData(data);
         
        } 
      })
      

      return () => unsubscribe();
  }, [qid]);

//  {/*Users Data*/ }
//   useEffect(() => {
//     const database = getDatabase();
//     const dbRef = ref(database, "users");

//     onValue(dbRef, (snapshot) =>  {
//         if (snapshot.exists()) {
//           const data = [];
//           snapshot.forEach((child) => {
//             if (child.val().uid === quid) {
//               setPP(child.val().pp)

//             }
//           });

//         } 
//       })
      
//   }, [qid]);


  {/*Answers Data*/ }
  useEffect(() => {
    const database = getDatabase();
    const dbRef = ref(database, "answers");

    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = [];
          snapshot.forEach((child) => {
            if (child.val().q_id === qid) {
              data.push({
                uid:child.val().uid,
                pp:child.val().pp,
                ansBody:child.val().ansBody,
                vote_count:child.val().vote_count,
                date: (child.val().date).match(/^\w+\s\w+\s\d+/)[0],
                
              });

            }
          });
          setAnsData(data)    
    
        } 
      })
      .catch((error) => {
        console.error(error);

      });
  }, [qid]);




  const database = getDatabase();
  const questionRef = useRef(ref(database, `questions/${qid}`)); // Use ref

  useEffect(() => {
    const fetchVoteCount = async () => {
      try {
        const snapshot = await get(questionRef.current);
        if (snapshot.exists()) {
          setVoteCount(snapshot.val().vote_count);
        }
      } catch (error) {
        console.error("Error fetching vote count:", error);
      }
    };

    fetchVoteCount();
  }, [qid]);

  const handleVoteUp = async () => {
    if (!hasVotedUp) {
      try {
        await update(questionRef.current, { vote_count: voteCount + 1 });
        setVoteCount(voteCount + 1);
        setHasVotedUp(true);
        setHasVotedDown(false);
      } catch (error) {
        console.error("Error voting up:", error);
      }
    }
  };

  const handleVoteDown = async () => {
    if (!hasVotedDown) {
      try {
        await update(questionRef.current, { vote_count: voteCount - 1 });
        setVoteCount(voteCount - 1);
        setHasVotedDown(true);
        setHasVotedUp(false);
      } catch (error) {
        console.error("Error voting down:", error);
      }
    }
  };

  {/*
  useEffect(() => {
    // Check if the user has already answered this question
    const database = getDatabase();
    const dbRef = ref(database, "answers");
    const query = get(child(dbRef, qid), orderByChild("uid"), equalTo(uid));

    onValue(query, (snapshot) => {
      if (snapshot.exists()) {
        setHasAnswered(true);
      }
    });

  }, [qid, uid]);
*/}

  function submitAns() {

    if (ansBody === "") {
      alert("Answer must be non-empty");
      return;
    }
    
    if (!isLoggedin) {
      alert("Login first");
      return;
    }


    setIsLoading(true);
    setSuccessMessage('');
    const db = getDatabase();
    const date = new Date().toString();
  
    const aRef = ref(db, 'answers');
    const newARef = push(aRef); // Generate a unique child key
    const newAId = newARef.key;
  
    set(newARef, {
      uid: uid,
      q_id: qid ,
      ans_id: newAId,
      ansBody: ansBody,
      vote_count: 0,
      date: date,
      tags: "",
      pp: pp,
    
    }).then(() => {
      setSuccessMessage('Answer successfully posted!');
      setIsLoading(false);
    }).catch((error) => {
      console.error(error);
      setIsLoading(false);
    });
  }

  return (
    <div className="container">
      {/* view question  */}
      {qData.map((child)=>(
      <div class="card m-3">
        <div className="card-header">
          <div className="row">
            <div className="card-title">
              {child.title}
            </div>
          </div>
          <div className="row " style={{ fontWeight: "350" }}>
            <div className="col col-lg-3">asked on {child.date}</div>
            <div className="col col-lg-3">
              <span className="badge text-bg-success">
                {child.ans_count} answers
              </span>
            </div>
            <div className="col col-lg-3">0 views</div>
          </div>
        </div>
        <div class="card-body">
          <div className="row">
            <div className="col-3  row col-lg-1" style={{ height: "200px" }}>
              <div className="col-12">
                <button id="voteup" className="btn btn-outline-primary rounded-circle p-2 lh-1" onClick={handleVoteUp}>
                <i class="bi bi-caret-up-fill"></i>
                </button>
              </div>
              <div className="col-12">
                <h5 className="m-0 ms-2 mt-1 mb-1 mt-lg-2 mb-lg-2">{child.vote_count}</h5>
              </div>
              <div className="col-12">
                <button id="votedown" className="btn btn-outline-primary rounded-circle p-2 lh-1" onClick={handleVoteDown}>
                <i class="bi bi-caret-down-fill"></i>
                </button>
              </div>
            </div>
            <div className="col-9 col-lg-10 ">
              <p style={{ fontWeight: "400" }} className="card-text">
               {child.desc}
              </p>
            </div>
          </div>

          {/* <div className="tags">
<Link className="badge text-bg-primary m-1" style={{fontWeight:"200"}}>
    python
</Link>
</div> */}
        </div>
        <div class="card-footer " style={{ fontWeight: "300" }}>
          <div className="row float-end">
            <div className="col">
              <img
                className="card rounded-circle d-inline"
                width={"30px"}
                src={pp}
                alt=""
              />
              <span className="ms-1 text-primary">{child.duid}</span>
              <span className="ms-1">asked {child.date}</span>
            </div>
          </div>
        </div>
      </div>

      ))
      }
   {/* view question end */}



      {/* answers  */}
      <div className="container-fluid mt-5">
      {/* ans_top_header */}
        <div className="row justify-content-between">
          <div className="col col-lg-4">
            <h5>5 Answers</h5>
          </div>
          <div className="col col-lg-4 " style={{ fontWeight: "400" }}>
            sorted by:
            <select
              class="form-select form-select-sm"
              aria-label="Small select example">
              <option value="scoredesc" selected="selected">
                Highest score (default)
              </option>
              <option value="trending">
                Trending (recent votes count more)
              </option>
              <option value="modifieddesc">Date modified (newest first)</option>
              <option value="createdasc">Date created (oldest first)</option>
            </select>
          </div>
        </div>
        {/* ans_top_header end */}


{/* answers-list */}

{ansData.map((child) => (

  <Answer ansBody={child.ansBody} vote_count={child.vote_count} username={(child.uid).slice(0,6)} posted_on={child.date} pp={child.pp} />
))

} 
{/* answers-list end*/}



<PostAnswer 
            isLoading={isLoading}
            successMessage={successMessage}
            ansBody={ansBody}
      onChange={(event) => {
      setAnsBody(event.target.value);
    }}
onClick={submitAns}             />
        
      </div>
    </div>
  )

}

function Answer(props){

    return(
        <div class="card m-3">
        
        <div class="card-body">
          <div className="row">
            <div className="col-3  row col-lg-1" style={{ height: "200px" }}>
              <div className="col-12">
              <button className="btn btn-outline-primary rounded-circle p-2 lh-1">
                <i class="bi bi-caret-up-fill"></i>
                </button>
              </div>
              <div className="col-12">
                <h5 className="m-0 ms-2 mt-1 mb-1 mt-lg-2 mb-lg-2">{props.vote_count}</h5>
              </div>
              <div className="col-12">
              <button className="btn btn-outline-primary rounded-circle p-2 lh-1">
                <i class="bi bi-caret-down-fill"></i>
                </button>
              </div>
            </div>
            <div className="col-9 col-lg-10 ">
              <p style={{ fontWeight: "400" }} className="card-text">
                {props.ansBody}
              </p>
            </div>
          </div>

          {/* <div className="tags">
<Link className="badge text-bg-primary m-1" style={{fontWeight:"200"}}>
    python
</Link>
</div> */}
        </div>
        <div class="card-footer " style={{ fontWeight: "300" }}>
          <div className="row float-end">
            <div className="col">
              <img
                className="card rounded-circle d-inline"
                width={"30px"}
                src={props.pp}
                alt=""
              />
              <span className="ms-1 text-primary">{props.username}</span>
              <span className="ms-1">asked {props.posted_on}</span>
            </div>
          </div>
        </div>
      </div>
    )
}


function PostAnswer(props){
 {/*
const [isLoading, setIsLoading] = useState(false);
const [successMessage, setSuccessMessage] = useState('');
const [ansBody, setAnsBody] = useState("");


const [uid, setUID] = useState();
  const [isLoggedin, setisLoggedin] = useState(false);


  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUID(user.uid);
        setisLoggedin(true);
      } else {
        setisLoggedin(false);
      }
    });
  }, [isLoggedin]);


  function submitAns() {


    if (ansBody === "") {
      alert("Answer must be non-empty");
      return;
    }
    
    if (!isLoggedin) {
      alert("Login first");
      return;
    }
  
    setIsLoading(true);
    setSuccessMessage('');
    const db = getDatabase();
    const date = new Date().toString();
  
    const aRef = ref(db, 'answers');
    const newARef = push(aRef); // Generate a unique child key
    const newAId = newARef.key;
  
    set(newARef, {
      uid: uid,
      q_id: props.qid ,
      ans_id: newAId,
      ansBody: ansBody,
      vote_count: 0,
      date: date,
      tags: "",
      pp: props.pp ,
    
    }).then(() => {
      setSuccessMessage('Answer successfully posted!');
      setIsLoading(false);
    }).catch((error) => {
      console.error(error);
      setIsLoading(false);
    });
  }
  
*/}

  return(
    <div className="container p-3">
    <div className="row">
      <div className="col-12 ">
        <h3>Your Answer</h3>
        {/* <form action={this}> */}

       
        <div className="form-container mt-2 mb-2 card p-3">
          <label
            htmlFor="ansBody"
            className="ms-1 mb-2"
            style={{ fontSize: "12px", fontWeight: "400" }}>
            <h6 className="m-0">Answer Body</h6>
            Reminder: Answers generated by artificial intelligence tools are not allowed
          </label>
          <textarea
            class="form-control form-control-sm"
            id="ansBody"
            rows="6"
        
     value={props.ansBody}
     onChange={props.onChange}
     
            required></textarea>
        </div>


        <div class="alert alert-warning alert-dismissible fade show mt-3 mb-3"      style={{ fontSize: "12px", fontWeight: "400" }} role="alert">

  <div class="flex--item pt8">
        <p>Thanks for contributing an answer to Anonymo!</p>
        <ul>
        <li>Please be sure to <em>answer the question</em>. Provide details and share your research!</li>
        </ul>
        <p>But <em>avoid</em> …</p>
        <ul><li>Asking for help, clarification, or responding to other answers.</li>
        <li>Making statements based on opinion; back them up with references or personal experience.</li>
        </ul>
        <p>To learn more, see our <Link to="/help/how-to-answer">tips on writing great answers</Link>.</p>
    </div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

        
        <button
          type="submit"
          className="btn btn-dark mt-3 "
          {...props}
          // data-bs-toggle="modal"
          // data-bs-target="#spinner" 
          disabled={props.isLoading}>
          {props.isLoading ? 'Posting Answer...' : 'POST YOUR ANSWER'}
        </button>
        {props.successMessage && <div className="alert alert-success mt-3" role="alert">
        
            {props.successMessage}</div>}
        {/* </form> */}

      </div>


      
    </div>
  </div>

  )
}
export default ViewQuestion;
