function Spinner(){
return(
    <div className="w-100 h-100  position-fixed fixed-top d-flex justify-content-center align-content-center align-items-center" style={{zIndex:"1000"}}>
<div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
    </div>
)
}

export default Spinner