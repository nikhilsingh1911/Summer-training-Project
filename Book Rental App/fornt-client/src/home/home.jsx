import React from "react";
import Banner from "../components/Banner";
import BestSeller from "./bestsellerBook";
import FavBooks from "./favBooks";
const Home = () => {
  return (
    <div>
      <Banner />
      <BestSeller />
      <FavBooks />
    </div>
  );
};

export default Home;
