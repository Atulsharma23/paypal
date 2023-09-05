export default function () {
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
          <h3>Forgot Password</h3>
          <div className="divoisionkabaap">
            <div className="divisonof">
              <div className="divisonof">
                <label htmlFor="Password"></label>
                <img src="images/Password.png" alt="Password Icon" />
                <input
                  //   type={showPass ? "text" : "password"}
                  id="Password"
                  name="Password"
                  placeholder="Password"
                  required
                />
                <img
                  className="eye-image"
                  src="images/Eye.png"
                  alt="Show Password"
                  //   onClick={showPassfn}
                />
              </div>

              <br />
              <div className="divisonof">
                <label htmlFor="Confirm Password"></label>
                <img src="images/Password.png" alt="Confirm Password Icon" />
                <input
                  //   type={showConfirmPass ? "text" : "password"}
                  id="Confirm Password"
                  name="Confirm Password"
                  placeholder="Confirm Password"
                  required
                 />
                 <img
                  className="eye-image"
                  src="images/Eye.png"
                  alt="Show Password"
                  //   onClick={showPassConfn}
                />
              </div>

              <br />
              <button type="button" className="log">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
