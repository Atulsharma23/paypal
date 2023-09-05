"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function signin() {
  const [showPass, setShowPass] = useState(false);
  function showPassfn(e) {
    e.preventDefault();
    console.log("show password");
    setShowPass(!showPass);
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
          <div className="advance-div">
            <h3>Sign In</h3>

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
             <div className="Forgot-link">
             <Link href="">Forgot Password?</Link>
             </div>
             <button type="button" className="log">
              Log in
            </button>
             <div className="Newtopaypal">
              <h6>Need Help?</h6> <Link href="/login">Create account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
