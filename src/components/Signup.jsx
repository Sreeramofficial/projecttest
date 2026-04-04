import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function SignUp() {
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate("/login");
  };
  
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <Link to="/" className="home-link">
          Go to Home
        </Link>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button className="auth-btn" onClick={goToSignIn}>Sign Up</button>
        </form>

        <p>
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
}

