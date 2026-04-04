import { Link } from "react-router-dom";
import "./Auth.css";

export default function SignIn() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign In</h2>
        <Link to="/" className="home-link">
          ← Go to Home
        </Link>

        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button className="auth-btn">Login</button>
        </form>

        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
