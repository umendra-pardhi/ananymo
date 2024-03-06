

function AnswerList(props) {
    return (
      <div class="card m-3">
        <div class="card-body">
          <div className="row">
            <div className="col-3  row col-lg-1" style={{ height: "200px" }}>
              <div className="col-12">
                <button
                  className="btn btn-outline-primary rounded-circle p-2 lh-1"  
                 >
                  <i class="bi bi-caret-up-fill"></i>
                </button>
              </div>
              <div className="col-12">
                <h5 className="m-0 ms-2 mt-1 mb-1 mt-lg-2 mb-lg-2">
                  {props.vote_count}
                </h5>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-outline-primary rounded-circle p-2 lh-1"
                  >
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
    );
  }


  

function AnswerListLoading() {
  return (
   //Loading Data
<div class="card m-3 placeholder-glow">
          <div class="card-body">
            <div className="row">
              <div className="col-3  row flex-column  justify-content-evenly " style={{ height: "200px" }}>
                <div className="col-4 p-3 placeholder">
                 
                </div>
                <div className="col-2 p-2 placeholder">
                  
                </div>
                <div className="col-4 p-3 placeholder">
                  
                </div>
              </div>
              <div className="col-9 col-lg-10 ">
               <div className="col-12 placeholder"></div> <br/>
               <div className="col-8 placeholder"></div><br/>
               <div className="col-6 placeholder"></div><br/>
               <div className="col-4 placeholder"></div><br/>
               <div className="col-3 placeholder"></div>
              </div>
            </div>

          </div>
          <div class="card-footer " style={{ fontWeight: "300" }}>
            <div className="row justify-content-end gap-3">
              <div className="col-3 placeholder">
              </div>
              <div className="col-3 placeholder">
              </div>
            </div>
          </div>
        </div>
  );
}

  

  export  {AnswerList,AnswerListLoading};