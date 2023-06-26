import React, { useEffect, useState } from "react";
import BrowseByCategory from "../components/home/BrowseByCategory";
import HotCollections from "../components/home/HotCollections";
import Landing from "../components/home/Landing";
import LandingIntro from "../components/home/LandingIntro";
import NewItems from "../components/home/NewItems";
import TopSellers from "../components/home/TopSellers";
import axios from "axios";

const Home = () => {
  const [hotCollections, setHotCollections] = useState([])
  const [hotCollectionsLoading, setHotCollectionsLoading] = useState(null)
  const fetchHotCollections = async () => {
    setHotCollectionsLoading(true)
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
    );
    setHotCollections(data)
    setHotCollectionsLoading(false)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchHotCollections();
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <Landing />
        <LandingIntro />
        <HotCollections hotCollections={hotCollections} hotCollectionsLoading={hotCollectionsLoading}/>
        <NewItems />
        <TopSellers />
        <BrowseByCategory />
      </div>
    </div>
  );
};

export default Home;
