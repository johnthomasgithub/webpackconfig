import React, { useState } from "react";
import {
  DashboardIcon,
  SchedulesIcon,
  SettingsIcon,
  TransactionsIcon,
  UsersIcon,
} from "../componnets/utils/Icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "../componnets/SideBar";
import Dash from "./Dash";
import Trans from "./Trans";

import Schedules from "./Schedules";
import Users from "./Users";
import Settings from "./Settings";
const Home = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const routes = [
    {
      path: "/home/dashboard",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      path: "/home/transactions",
      name: "Transactions",
      icon: <TransactionsIcon />,
    },
    {
      path: "/home/schedules",
      name: "Schedules",
      icon: <SchedulesIcon />,
    },
    {
      path: "/home/users",
      name: "Users",
      icon: <UsersIcon />,
    },
    {
      path: "/home/settings",
      name: "Settings",
      icon: <SettingsIcon />,
    },
  ];
  return (
    <SideBar
      className="sidebar"
      routes={routes}
      setSelectedTab={setSelectedTab}
      selectedTab={selectedTab}
    >
      <Routes>
        <Route
          path="/dashboard/*"
          element={<Dash selectedTab={selectedTab} />}
        />
        <Route
          path="/transactions/*"
          element={<Trans selectedTab={selectedTab} />}
        />
        <Route
          path="/schedules/*"
          element={<Schedules selectedTab={selectedTab} />}
        />
        <Route path="/users/*" element={<Users selectedTab={selectedTab} />} />
        <Route
          path="/settings/*"
          element={<Settings selectedTab={selectedTab} />}
        />
      </Routes>
    </SideBar>
  );
};

export default Home;
