import { Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";

import { useEffect } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../../style/login.css";
export default function ({ hide }) {
  // useEffect(() => {}, []);

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        console.log(user);

        fetch("http://localhost:5000/users/createUser", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(user),
        })
          .then(async (res) => {
            let data = await res.json();
            console.log("Created User", data);
          })
          .catch((e) => {
            console.log(e);
          });

        localStorage.setItem("user", JSON.stringify(user));
        hide(false);

        window.scroll({ top: 0, behavior: "smooth" });

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <>
      <div
        className="container"
        style={{
          textAlign: "center",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
        <p className="sub-pop">Get Started</p>

        <div class="google-btn" onClick={googleLogin}>
          <div class="google-icon-wrapper">
            <img
              class="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
            <p class="btn-text text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
