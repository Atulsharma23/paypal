import Link from "next/link";
export default function login() {
  return (
    <div className="Loginpage">
      <div className="container">
        <div className="left-section">
          <img src="images/payken 1.png"></img>
          <div className="left-des">
            <h2>Don't swap just Payken</h2>
            <h4>Welcome to Payken</h4>
          </div>
        </div>
        <div className="right-section">
          <h3>Create Account</h3>
          <div className="divoisionkabaap">
            <div className="divisonof">
              <label for="username"></label>

              <img src="images/User.png" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                required
              />
            </div>
            <br />
            <div className="divisonof">
              <label for="Email"></label>
              <img src="images/Email.png" />
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
              <label for="Password"></label>
              <img src="images/Password.png" />
              <input
                type="Password"
                id="Password"
                name="Password"
                placeholder="Password"
                required
              />
              <img className="eye-image" src="images/Eye.png" />
            </div>

            <br />
            <div className="divisonof">
              <label for="username"></label>
              <img src="images/Password.png" />
              <input
                type="Password"
                id="Confirm Password"
                name="Confirm Password"
                placeholder="Confirm Password"
                required
              />
              <img className="eye-image" src="images/Eye.png" />
            </div>

            <br />
            <button type="button" className="log">
              Login
            </button>
            <br/>
            <div className="Newtopaypal">
            <h6>Already Register?</h6><Link  href="/login">
                LogIn
              </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
