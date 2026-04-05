import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Dashboard.css";
import Header from "./Header";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get userId and email from Login component
  const { userId, email } = location.state || { userId: null, email: null };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">Workspace</h2>
        <ul>
          <li
            onClick={() => handleNavigation("/dashboard")}
            title="Home"
            className="sidebar-icon"
          >
            🏠
          </li>
          <li
            onClick={() => handleNavigation("/projects")}
            title="Projects"
            className="sidebar-icon"
          >
            📁
          </li>
          <li
            onClick={() => handleNavigation("/timesheet")}
            title="Timesheet"
            className="sidebar-icon"
          >
            📅
          </li>
          <li
            onClick={() => handleNavigation("/analytics")}
            title="Analytics"
            className="sidebar-icon"
          >
            📊
          </li>
          <li
            onClick={() => handleNavigation("/settings")}
            title="Settings"
            className="sidebar-icon"
          >
            ⚙️
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <Header isLogin={true} logedUser={userId} />
        
    

        {/* Cards */}
        <div className="cards">
          <div className="card orange">
            <h3>Tasks Due</h3>
            <p>
              <b>8</b> Overdue
            </p>
            <p>
              <b>12</b> Upcoming
            </p>
          </div>

          <div className="card blue">
            <h3>Team Availability</h3>
            <p>
              <b>5</b> Online
            </p>
            <p>
              <b>3</b> On Leave
            </p>
          </div>

          <div className="card green">
            <h3>Progress</h3>
            <p>
              <b>72%</b> On Track
            </p>
          </div>

          <div className="card purple">
            <h3>Time Tracking</h3>
            <p>
              <b>18h</b> Logged
            </p>
            <p>
              <b>4h</b> This Week
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="content">
          {/* Projects */}
          <div className="projects">
            <h3>Current Projects</h3>
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Status</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Website Redesign</td>
                  <td>
                    <span className="status progress">In Progress</span>
                  </td>
                  <td>May 15, 2022</td>
                </tr>
                <tr>
                  <td>Marketing Campaign</td>
                  <td>
                    <span className="status hold">On Hold</span>
                  </td>
                  <td>June 10, 2022</td>
                </tr>
                <tr>
                  <td>Product Launch</td>
                  <td>
                    <span className="status planning">Planning</span>
                  </td>
                  <td>July 5, 2022</td>
                </tr>
                <tr>
                  <td>App Development</td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                  <td>April 20, 2022</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Team Activity */}
          <div className="activity">
            <h3>Team Activity</h3>
            <ul>
              <li>Sarah L. - Working on Landing Page</li>
              <li>John D. - Updated Marketing Plan</li>
              <li>Emily R. - Design Review</li>
              <li>Michael T. - Offline</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom">
          <div className="tasks">
            <h3>My Tasks</h3>
            <ul>
              <li>Finish Draft Presentation</li>
              <li>Follow up with Client</li>
              <li>Review Design Mockups</li>
              <li>Schedule Team Meeting</li>
            </ul>
          </div>

          <div className="milestones">
            <h3>Upcoming Milestones</h3>
            <ul>
              <li>Beta Release - May 20</li>
              <li>Campaign Launch - June 5</li>
              <li>Q3 Planning - June 25</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}