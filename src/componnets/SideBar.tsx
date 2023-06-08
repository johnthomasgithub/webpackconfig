import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

const SideBar = ({ routes, children, setSelectedTab, selectedTab }: any) => {
  return (
    <div className="sidebar">
      <section className="routes">
        <div className="brand">Board.</div>
        {routes.map((route: any, index: any) => {
          return (
            <NavLink
              to={route.path}
              key={index}
              className={`link-parent`}
              onClick={() => setSelectedTab(route.name)}
            >
              <div className="nav-link">
                <span className="icons">{route.icon}</span>
                <span
                  className={`name ${selectedTab === route.name ? "bold" : ""}`}
                >
                  {route.name}
                </span>
              </div>
            </NavLink>
          );
        })}
       <div className="help-section" >
       <div>Help</div>
        <div>Contact Us</div>
       </div>
      </section>
      <main className="main-container">{children}</main>
    </div>
  );
};

export default SideBar;
