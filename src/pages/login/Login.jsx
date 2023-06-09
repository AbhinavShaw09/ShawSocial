import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Shaw Social</h3>
                <span className="loginDesc">Connect with friends and people around you on Shaw Social.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="email" className="loginInput" />
                    <input placeholder="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Button</button>
                </div>
            </div>
        </div>
    </div>
  )
}
