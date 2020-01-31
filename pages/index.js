import React, { useState } from "react";
import Head from "next/head";
import Map from "../components/map";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div>
      <Head>
        <title>Primary Children's Hospital Patient Stories</title>
        <meta
          property="og:title"
          content="Primary Children's Hospital Stories"
        />
      </Head>

      <Map
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
};

export default Home;
