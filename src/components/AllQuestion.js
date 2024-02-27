import QueBlock from './QueBlock';
import { Link } from 'react-router-dom';
import { getDatabase,ref, get, } from 'firebase/database';
import { useState,useEffect } from 'react';

function AllQuestion(){

    
const [questions,setQue]=useState([]);
const [userData,setUserdata]=useState([]);
const [combinedData,setCombinedData]=useState([])

useEffect(() => {
    const database = getDatabase();
    const dbRef = ref(database, "users");

    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = [];
          snapshot.forEach((child) => {
            data.push({
              key: child.key,
              uid: child.val().uid,
              pp: child.val().pp,
            });
          });
          setUserdata(data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

useEffect(() => {
    const database = getDatabase();
    const dbRef = ref(database, "questions");


    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = [];
          snapshot.forEach((child) => {
            data.push({
              key: child.key,
              uid: child.val().uid,
              q_id: child.val().q_id,
              title: child.val().title,
              desc: child.val().desc,
              ans_count: child.val().ans_count,
              vote_count: child.val().vote_count,
              date: (child.val().date).match(/^\w+\s\w+\s\d+/)[0],
              tags: "",
              views: child.val().views,     
            });
          });
          setQue(data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  useEffect(() => {
    setCombinedData(
      questions.map((questions) => ({
        ...questions,
        pp: userData.find((user) => user.uid === questions.uid)?.pp, // Find matching user and add pp
      }))
    );
  }, [questions, userData]); 

    return(
        <div className="container pt-5 pb-5" >
<div className="row">
    <div className="col-6">
    <h4>All questions</h4>
    </div>
    <div className="col-6">
        <Link to={"/ask-question"} className='btn btn-sm btn-primary float-end'>Ask Question</Link>
    </div>
</div>


{combinedData.map((child) => (

<QueBlock votes={child.vote_count} ans_count={child.ans_count} view_count={child.views} q_title={child.title} q_desc={child.desc} img={child.pp} username={child.uid} posted_on={child.date} />

))}

</div>
    )
}

export default AllQuestion;