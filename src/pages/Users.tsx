import React from "react";
import Header from "../componnets/Header/Header";
import UnderConstruction from "../componnets/UnderConstruction";

const Users = ({ selectedTab }: any) => {
  return (
    <div>
      <Header selectedTab={selectedTab} />
      <UnderConstruction />

    </div>
  );
};

export default Users;
