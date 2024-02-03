import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.png'
import logo2 from '../assets/img/hacker.svg'
import '../assets/styles/Header.css'


function Header(){
  return(

    <nav class="navbar bg-body-tertiary navbar-expand-lg ">
  <div class="container-fluid justify-content-start">

  <button class="navbar-toggler  text-primary-emphasis" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <h3 className="logo ms-3 ms-lg-5 ms-md-5">
<span style={{color:"#4285f4"}}>A</span>
<span style={{color:"#ea4335"}}>N</span>
<span style={{color:"#fbbc05"}}>O</span>
<span style={{color:"#ea4335"}}>N</span>
<span style={{color:"	#34a853"}}>Y</span>
<span style={{color:"#673ab7"}}>M</span>
<span style={{color:"#fbbc05"}}>O</span>
</h3>

    
    <div class="offcanvas offcanvas-start w-75" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
        <button type="button" class="btn-close text-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
      <li className="nav-item">
                <Link className="nav-link text-success ms-lg-2 " aria-current="page" to="/"><i class="bi bi-house-fill "></i></Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link ms-lg-2 text-success " aria-current="page" to="/about">About</Link>
              </li>                     
              
            </ul>

           <Link to={'/ask-question'} className='btn  btn-outline-dark me-lg-2 mb-1 mb-lg-0 d-block mt-5 mt-lg-0'>Ask Question</Link>
            <form className="d-flex input-group w-auto  me-lg-5 mb-3 mb-lg-0" role="search">
                <input type="text" class="form-control" placeholder="search question" aria-label="search" />
                <button class="btn btn-outline-primary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
            </form>
        
        <Link to={'/login'} className='btn  btn-outline-success me-lg-2 mb-1 mb-lg-0 d-block mt-5 mt-lg-0'>Log in</Link>
        <Link to={'/signup'} className='btn  btn-success me-lg-2  d-block'>Sign up</Link>
      </div>
    </div>
  </div>
</nav>
  )
}




export default Header;