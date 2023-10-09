import React from "react";
import Banner from "../../components/header/banner/Banner";
import Services from "./services/Services";
import Gallery from "./Gallery";
import FactSection from "./factSection/factSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Gallery />
      <FactSection />

    </div>
  );
};

export default Home;
