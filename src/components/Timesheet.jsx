import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Header from "./Header";

export default function Timesheet() {
  const navigate = useNavigate();
  const [timesheetData] = useState([
    { day: "Monday", hours: 8, project: "Website Redesign" },
    { day: "Tuesday", hours: 8, project: "Marketing Campaign" },
    { day: "Wednesday", hours: 6, project: "Product Launch" },
    { day: "Thursday", hours: 8, project: "Website Redesign" },
    { day: "Friday", hours: 7, project: "Analytics Review" },
  ]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const totalHours = timesheetData.reduce((sum, item) => sum + item.hours, 0);

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
        {/* <h1>📅 Timesheet</h1> */}

        <div className="cards">
          <div className="card">
            <h3>Total Hours This Week</h3>
            <p>
              <b>{totalHours}</b> hours
            </p>
          </div>
          <div className="card">
            <h3>Average</h3>
            <p>
              <b>{(totalHours / 5).toFixed(1)}</b> hours/day
            </p>
          </div>
        </div>

        <div className="content">
          <div className="projects">
            <h3>Weekly Timesheet</h3>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Project</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                {timesheetData.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.day}</td>
                    <td>{entry.project}</td>
                    <td>
                      <b>{entry.hours}h</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
