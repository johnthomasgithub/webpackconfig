import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lens, Notification, UsersIconW } from "../utils/Icons";

const Header = ({ selectedTab }: any) => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc]: any = useState("");
  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("profile")) {
        setImageSrc(localStorage.getItem("profile"));
      }
    }, 800);

    return () => {
    //   localStorage.removeItem("profile");
    //   setImageSrc("");
    };
  }, [selectedTab]);

  return (
    <div className="header-parent">
      <div className="heading">{selectedTab}</div>
      <div className="search-profile">
        <div className="search">
          <input className="search-input" placeholder="Search..." />
          <span className="lens">
            <Lens />
          </span>
        </div>
        <div className="noti">
          <Notification />
        </div>
        <div
          className="profile"
          title="Click to sign out"
          onClick={() => navigate("/")}
        >
          {imageSrc.length > 1 ? <img src={imageSrc} /> : <UsersIconW />}
        </div>
      </div>
    </div>
  );
};

export default Header;
