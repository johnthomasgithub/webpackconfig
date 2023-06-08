import React from "react";
import Header from "../componnets/Header/Header";
import { Likes, Rev, Trans, Users } from "../componnets/utils/Icons";
import Cards from "../componnets/Cards";
import Chart from "../componnets/Chart";
const Dash = ({ selectedTab }: any) => {
  const cards = [
    {
      title: "Total Revenues",
      value: "$2,129,430",
      image: <Rev />,
      bg: "#DDEFE0",
    },
    {
      title: "Total Transactions",
      value: "1,520",
      image: <Trans />,
      bg: "#F4ECDD",
    },
    {
      title: "Total Likes",
      value: "9,120",
      image: <Likes />,
      bg: "#EFDADA",
    },
    {
      title: "Total Users",
      value: "892",
      image: <Users />,
      bg: "#DEE0EF",
    },
  ];
  return (
    <div className="dash-parent">
      <Header selectedTab={selectedTab} />
      <div className="dash-cards">
        {" "}
        {cards.map((card, index) => {
          return (
            <Cards
              key={index}
              Title={card.title}
              Value={card.value}
              Image={card.image}
              Bg={card.bg}
            />
          );
        })}
      </div>
      <Chart title={"Activities"} type={"line"} />
      <div className="twoCharts">
        <Chart title={"Top Products"} type={"pie"} />
        <Chart title={"Today's Schedule"} type={""} />
      </div>{" "}
    </div>
  );
};

export default Dash;
