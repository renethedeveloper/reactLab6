import React from "react";
import DisplayHouses from "../component/displayHouses";

const Home = ({ houses }) => {
  return (
    <DisplayHouses houses={houses}/>
  );
};

export default Home;
