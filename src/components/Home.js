import {Link} from 'react-router-dom'
import QueBlock from './QueBlock';

function Home(){
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


        <QueBlock votes={6} ans_count={3} view_count={8} q_title={"How can I automatically change the IP address on each request or when reconnecting in Selenium with Python?" } q_desc={"It is necessary to randomly select a proxy with authorization from proxies.txt for each request. It doesn't work as it should... import random import time from selenium import webdriver from ..."} img={"https://lh3.googleusercontent.com/a/ACg8ocKuduhyDnHPrBhrzuCn6rXpCBECYFWmnxVIK0GQLwwQdiY=s96-c"} username="anonymous" posted_on="15/02/2024" />

<div className="container mt-5">
<p style={{fontWeight:"350"}}>Looking for more? Browse the <Link to={"/questions"}>complete list of questions</Link>, or <Link to={"/questions"}>popular tags.</Link> Help us answer <Link to={"/questions"}>unanswered questions</Link>.</p>
</div>
</div>


{/* promo banner */}
<div className="container-fluid bg-warning-subtle p-5" >
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