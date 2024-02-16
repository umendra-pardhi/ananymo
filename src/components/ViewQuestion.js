import { Link } from "react-router-dom";

function ViewQuestion(props) {
  return (
    <div className="container">
      {/* view question  */}
      <div class="card m-3">
        <div className="card-header">
          <div className="row">
            <div className="card-title">
              How can I automatically change the IP address on each request or
              when reconnecting in Selenium with Python?
            </div>
          </div>
          <div className="row " style={{ fontWeight: "350" }}>
            <div className="col col-lg-3">asked on 15/02/2024</div>
            <div className="col col-lg-3">
              <span className="badge text-bg-success">
                {props.ans_count} answers
              </span>
            </div>
            <div className="col col-lg-3">0 views</div>
          </div>
        </div>
        <div class="card-body">
          <div className="row">
            <div className="col-3  row col-lg-1" style={{ height: "200px" }}>
              <div className="col-12">
                <button className="btn btn-outline-primary rounded-circle p-2 lh-1">
                <i class="bi bi-caret-up-fill"></i>
                </button>
              </div>
              <div className="col-12">
                <h5 className="m-0 ms-2 mt-1 mb-1 mt-lg-2 mb-lg-2">4</h5>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary rounded-circle p-2 lh-1">
                <i class="bi bi-caret-down-fill"></i>
                </button>
              </div>
            </div>
            <div className="col-9 col-lg-10 ">
              <p style={{ fontWeight: "400" }} className="card-text">
                It is necessary to randomly select a proxy with authorization
                from proxies.txt for each request. It doesn't work as it
                should... import random import time from selenium import
                webdriver from ...
                AOkgoCgAAZGfgJwDKrHM0Bpf9aTfvQvE3SGoytwj80fGe0s9pJnWOKs4HcJx1HoAl
                gJpA9KeVY3uUWccAQlQAdCpa51rjTQCR
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
                src={props.img}
                alt=""
              />
              <span className="ms-1 text-primary">{props.username}</span>
              <span className="ms-1">asked {props.posted_on}</span>
            </div>
          </div>
        </div>
      </div>

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

<Answer />
      <Answer />
{/* answers-list end*/}
        
      </div>
    </div>
  );
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
                <h5 className="m-0 ms-2 mt-1 mb-1 mt-lg-2 mb-lg-2">4</h5>
              </div>
              <div className="col-12">
              <button className="btn btn-outline-primary rounded-circle p-2 lh-1">
                <i class="bi bi-caret-down-fill"></i>
                </button>
              </div>
            </div>
            <div className="col-9 col-lg-10 ">
              <p style={{ fontWeight: "400" }} className="card-text">
                It is necessary to randomly select a proxy with authorization
                from proxies.txt for each request. It doesn't work as it
                should... import random import time from selenium import
                webdriver from ...
                AOkgoCgAAZGfgJwDKrHM0Bpf9aTfvQvE3SGoytwj80fGe0s9pJnWOKs4HcJx1HoAl
                gJpA9KeVY3uUWccAQlQAdCpa51rjTQCR
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
                src={props.img}
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
export default ViewQuestion;
