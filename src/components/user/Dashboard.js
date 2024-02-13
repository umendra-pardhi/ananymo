import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Dashboard() {
  const [isLoggedin,setisLoggedin]=useState(null);
  const auth = getAuth();
  const [name,setName]=useState("name...");
  const [profpic,setPic]=useState("");

  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      setisLoggedin(user);
      setName(user.displayName)
      setPic(user.photoURL)

    } else {
      setisLoggedin(null);
    }
  });

  const SignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        console.log("Signed out ");
        navigate('/login')
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };


  return (
    <div className="container p-4 p-lg-5">
      <div className="row justify-content-center gap-2 ">
        <div className="col-12 col-lg-5 card p-1 p-lg-2">
          <div className="d-flex justify-content-end">
            <button className="btn btn-sm btn-primary ">Edit</button>
          </div>

          <div className="d-flex justify-content-center flex-column align-items-center">
            <img
              className="rounded-circle mb-2"
              width={"100px"}
              src={profpic}
              alt=""
            />
            <h4>{name}</h4>
            <div class="input-group input-group-sm flex-nowrap w-50">
              <span class="input-group-text" id="addon-wrapping">
                @
              </span>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <button className="btn btn-sm btn-primary">
                <i class="bi bi-pencil-fill"></i>
              </button>
            </div>
          </div>
          <div className="container-fluid mt-4">
            <div className="row justify-content-center gap-1 gap-lg-2">
              <div className="col-4 col-lg-3  card align-items-center bg-primary text-light">
                <h2 className="m-0">00 <sup><i class="bi bi-info-circle" style={{fontSize:"14px"}}  ></i></sup> </h2> 
                <p style={{ fontWeight: "350" }} className="">
                  Answers
                </p>
              </div>
              <div className="col-3 col-lg-3 card align-items-center bg-success text-light">
                <h2 className="m-0">00</h2>
                <p style={{ fontWeight: "350" }} className="">
                  Questions
                </p>
              </div>
              <div className="col-4 col-lg-3 card align-items-center bg-warning text-light">
                <h2 className="m-0">00</h2>
                <p style={{ fontWeight: "350" }} className="">
                  Votes cast
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
          <button className="btn btn-sm btn-danger mt-5 w-25" onClick={SignOut}>
              Logout
            </button>

            </div>
        </div>
        <div className="col-12 col-lg-3 card text-center">
<h4 className="mt-5">Points You Earned</h4>

<p>0</p>

<lottie-player src="https://lottie.host/83058c04-2752-4e2c-a2b8-a3f78d215498/QK3klvQLzQ.json" background="##FFFFFF" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
