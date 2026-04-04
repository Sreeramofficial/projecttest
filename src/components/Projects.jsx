import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Header from "./Header";

export default function Projects() {
  const navigate = useNavigate();

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
        <Header isLogin={true} />
        {/* <h1>📁 Projects</h1> */}
        <div className="content">
          <div className="projects">
            <h3>All Projects</h3>
            <table>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Website Redesign</td>
                  <td>
                    <span className="status progress">In Progress</span>
                  </td>
                  <td>65%</td>
                  <td>May 15, 2022</td>
                </tr>
                <tr>
                  <td>Marketing Campaign</td>
                  <td>
                    <span className="status hold">On Hold</span>
                  </td>
                  <td>40%</td>
                  <td>June 10, 2022</td>
                </tr>
                <tr>
                  <td>Product Launch</td>
                  <td>
                    <span className="status planning">Planning</span>
                  </td>
                  <td>20%</td>
                  <td>July 5, 2022</td>
                </tr>
                <tr>
                  <td>App Development</td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                  <td>100%</td>
                  <td>April 20, 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
