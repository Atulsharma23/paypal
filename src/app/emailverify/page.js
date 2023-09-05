import Link from "next/link";
export default function emailverify() {
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
          <div className="dadofdad">
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

              <button type="button" className="log">
                Submit
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
