"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  useEffect((e) => {}, []);

  function showPassfn(e) {
    e.preventDefault();
    console.log("first");
    setShowPass(!showPass);
  }

  function showPassConfn(e) {
    e.preventDefault();
    console.log("first");
    setShowConfirmPass(!showConfirmPass);
  }

  return (
    <div className="Loginpage">
      <div className="container">
        <div className="left-section">
          <img src="images/payken 1.png" alt="Payken Logo" />
          <div className="left-des">
            <h2>Don't swap just Payken</h2>
            <h4>Welcome to Payken</h4>
          </div>
        </div>
        <div className="right-section">
          <h3>Create Account</h3>
          <div className="divoisionkabaap">
            <div className="divisonof">
              <label htmlFor="username"></label>
              <img src="images/User.png" alt="Username Icon" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <br />
            <div className="divisonof">
              <label htmlFor="Email"></label>
              <img src="images/Email.png" alt="Email Icon" />
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="Email"
                required
              />
            </div>

            <br />
            <div className="divisonof">
              <label htmlFor="Password"></label>
              <img src="images/Password.png" alt="Password Icon" />
              <input
                type={showPass ? "text" : "password"}
                id="Password"
                name="Password"
                placeholder="Password"
                required
              />
              <img
                className="eye-image"
                src="images/Eye.png"
                alt="Show Password"
                onClick={showPassfn}
              />
            </div>

            <br />
            <div className="divisonof">
              <label htmlFor="Confirm Password"></label>
              <img src="images/Password.png" alt="Confirm Password Icon" />
              <input
                type={showConfirmPass ? "text" : "password"}
                id="Confirm Password"
                name="Confirm Password"
                placeholder="Confirm Password"
                required
              />
              <img
                className="eye-image"
                src="images/Eye.png"
                alt="Show Password"
                onClick={showPassConfn}
              />
            </div>

            <br />
            <button type="button" className="log">
              Login
            </button>
            <br />
            <div className="Newtopaypal">
              <h6>Already Registered?</h6>
              <Link href="/user">Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
