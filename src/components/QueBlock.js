import {Link} from 'react-router-dom';

function QueBlock(props){
    return(
     
<div class="card m-3">

        <div className="card-header">
            <div className="row">
                <div className="col col-lg-3">{props.votes} votes</div>
                <div className="col col-lg-3"><span className="badge text-bg-success">{props.ans_count} answers</span></div>
                <div className="col col-lg-3">{props.view_count} views</div>
            </div>
        </div>
  <div class="card-body">
    <Link to={""}  class="text-decoration-none " >{props.q_title}</Link>
    <p style={{fontWeight:"400"}} className='card-text'>{props.q_desc}</p>
    {/* <div className="tags">
        <Link className="badge text-bg-primary m-1" style={{fontWeight:"200"}}>
            python
        </Link>
    </div> */}
  </div>
  <div class="card-footer " style={{fontWeight:"300"}}>
  <div className="row float-end">
    <div className="col">
        <img className='card rounded-circle d-inline' width={"30px"} src={props.img} alt="" />
        <span className='ms-1 text-primary'>{props.username}</span>
        <span className='ms-1'>asked on {props.posted_on}</span>
    </div>

  </div>
    
  </div>
</div>
    )
}

export default QueBlock;