
function AskQuestion(){
    return(
        <div className="container p-3">
            <div className="row">
                <div className="col-12 col-lg-8 card p-3">
<h3>Ask your Question?</h3>
<form action="">

<div className="form-container mt-2 mb-2 card p-3">
<label htmlFor="title" className="ms-1 mb-2" style={{fontSize:"12px", fontWeight:"400"}}>
<h6 className="m-0">Title</h6>
Be specific and imagine you’re asking a question to another person.</label>
<input className="form-control form-control-sm " type="text" name="title" id="title" placeholder={"e.g. Is there an R function for finding the index of an element in a vector?"} />

</div>

<div className="form-container mt-2 mb-2 card p-3">
<label htmlFor="desc" className="ms-1 mb-2" style={{fontSize:"12px", fontWeight:"400"}}>
<h6 className="m-0">Body</h6>
The body of your question contains your problem details and results. Minimum 220 characters.</label>
<textarea
                class="form-control form-control-sm"
                id="desc"
                rows="6"
                placeholder="Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself." required></textarea>


</div>

{
    //subject/category
    
}
                <button className="btn btn-dark w-100 mt-3 ">ASK YOUR QUESTION</button>
                </form>
                </div>
                <div className="col-12 col-lg-4 card">
                <lottie-player src="https://lottie.host/233628cb-07bb-46ab-ba40-fcd2dd3d46b5/mwPQdYs1cK.json" background="#ffff" speed="1" style={{ height: "100%"}} loop autoplay direction="1" mode="normal"></lottie-player>

                </div>
            </div>
        </div>
    )
}

export default AskQuestion;
