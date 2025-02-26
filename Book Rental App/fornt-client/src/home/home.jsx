import React from "react";
import Banner from "../components/Banner";
import BestSeller from "./bestsellerBook";
import FavBooks from "./favBooks";
import PromoBanner from "./promoBanner";
import Otherbook from "./Otherbook";
import Reviewpage from "./Reviewpage";
const Home = () => {
  return (
    <div>
      <Banner />
      <BestSeller />
      <FavBooks />
      <PromoBanner />
      <Otherbook />
      <Reviewpage />
    </div>
  );
};

export default Home;
