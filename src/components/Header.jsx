import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header({ isLogin }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session/localStorage if needed
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  const handleSettings = () => {
    navigate("/settings");
    setShowDropdown(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            {/* <span className="logo-icon">📊</span> */}
            <h1>ProjectFlow.com</h1>
          </div>
        </div>

        {/* Navigation */}
        {!isLogin && (
          <nav className="nav-links">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
            <Link to="/help">Help</Link>
          </nav>
        )}

        {isLogin && (
          <div className="header-actions">
            <input
              type="text"
              placeholder="Search projects..."
              className="search-bar"
            />
            <button className="btn-create">+ New Project</button>

            <div className="user-profile-container">
              <div
                className="user-profile"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                  alt="User"
                />
              </div>

              {showDropdown && (
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={handleSettings}>
                    ⚙️ Settings
                  </button>
                  <button
                    className="dropdown-item logout"
                    onClick={handleLogout}
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
