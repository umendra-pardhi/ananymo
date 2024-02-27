import {Link} from 'react-router-dom'
import QueBlock from './QueBlock';
import '../assets/styles/Home.css'
import { useState,useEffect } from 'react';
import { getDatabase,ref, get, } from 'firebase/database';

function Home(){

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
              duid:(child.val().uid).slice(0,6),
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
        <div>
        
        <div className="fluid-container bg-success-subtle p-2 p-lg-5 p-md-4 ">

        <div className="row align-content-center">
            <div className="col-12 col-lg-6 ">
            <br/>
          <h1 className="lh-2" style={{color:"#", fontWeight:"900", fontSize:'50px'}}>Unlock Coding Brilliance <span >Anonymously</span></h1> 
            <h5 >- Where Innovation Knows No Identity!<br/><br/>
            Find the best answer to your technical question,<br/>
            help others answer theirs
            </h5>
            <form className="d-flex input-group w-auto mt-2  me-lg-5 mb-3 mb-lg-0 p-2 rounded-4 shadow  bg-light" role="search">
                <input type="text" class="form-control border-0" style={{height:'70px', fontSize:'22px'}} placeholder="what is your question?" aria-label="search" />
                <button class="btn btn-outline-dark rounded-4  " style={{width:"70px",height:'70px'}} type="button" id="button-addon2"><i class="bi bi-search"></i></button>
            </form>
                
            </div>
            <div className="col-12 col-lg-6">
            
            <lottie-player src="https://lottie.host/7c930fe6-ce48-4a2c-a3fb-1ac7627b4223/fTDkX5dM9X.json"  speed="1" style={{width: "100%",  }} loop  autoplay direction="1" mode="normal"></lottie-player>
            </div>
        </div>

        </div>

{/* questions*/}

<div className="container pt-5 pb-5" >
<div className="row">
    <div className="col-6">
    <h4>Top questions</h4>
    </div>
    <div className="col-6">
        <Link to={"/ask-question"} className='btn btn-sm btn-primary float-end'>Ask Question</Link>
    </div>
</div>


{combinedData.slice(0, 10).map((child) => (

        <QueBlock votes={child.vote_count} ans_count={child.ans_count} view_count={child.views} q_title={child.title} q_desc={child.desc} img={child.pp} username={child.duid} posted_on={child.date} q_id={child.q_id} />

))}
<div className="container mt-5">
<p style={{fontWeight:"350"}}>Looking for more? Browse the <Link to={"/questions"}>complete list of questions</Link>, or Help us answer <Link to={"/questions"}>unanswered questions</Link>.</p>
</div>
</div>


{/* promo banner */}
<div className="container-fluid  p-5 promo-bg" >
<div className="container" >
    <div className="row h-100 justify-content-center gap-2">
        <div className="col-12 col-lg-4 card p-3 bg--subtle  text-success">
        <h3 className='' style={{fontWeight:"900"}}>Ask Any Question that is in your Mind</h3>
            <p>-Solution is Here for You</p>

        </div>
        <div className="col-12 col-lg-4 card ">
        <lottie-player src="https://lottie.host/8c2fd1dd-1a40-4c74-855c-ea447e5901a2/Wrqcie0zg0.json" background="##FFFFFF" speed="1" style={{ height: "300px"}} loop autoplay direction="1" mode="normal"></lottie-player>
        </div>
    </div>
</div>
</div>






{/** bottom ask question bar */}
            <div className="fluid-container bg-success-subtle ps-5 pe-5 p-2 pt-3  text-lg-start text-center">
            <div className="row">
                <div className="col-12 col-lg-10">
                <h3>What do you need to know?</h3>
<p style={{fontSize:'13px'}}>Whether you're debugging a complex code issue or facing a challenge in your tech project, there's no programming puzzle too intricate for Anonymo.</p>
                </div>
                <div className="col-12 col-lg-2 text-center ">
<Link to={'/ask-question'} className='btn  btn-outline-success p-2 mt-3'>Ask Question</Link>
                
                </div>
            </div>

            </div>
        </div>


    )
}


export default Home;