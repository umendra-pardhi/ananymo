import {Link} from 'react-router-dom'

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



            <div className="fluid-container bg-success-subtle ps-5 pe-5 p-2 pt-3  mt-5 text-lg-start text-center">
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