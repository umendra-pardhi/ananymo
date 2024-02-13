function AskQuestion(){
    return(
        <div className="container p-3">
            <div className="row">
                <div className="col-12 col-lg-8 card p-3">
<h3>Ask your Question?</h3>

<input className="form-control mb-4" type="text" name="title" id="title" />
<textarea
                class="form-control bg-success-subtle"
                id="desc"
                rows="6"
                placeholder="write your question here (keep it simple and clear to get best answer)"></textarea>

{
    //subject/category
    
}
                <button className="btn btn-dark mt-3">ASK YOUR QUESTION</button>
                </div>
                <div className="col-12 col-lg-4 card">
                <lottie-player src="https://lottie.host/233628cb-07bb-46ab-ba40-fcd2dd3d46b5/mwPQdYs1cK.json" background="#ffff" speed="1" style={{ height: "100%"}} loop autoplay direction="1" mode="normal"></lottie-player>

                </div>
            </div>
        </div>
    )
}

export default AskQuestion;
