/* eslint-disable react/prop-types */

import "./index.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SpecialOffers from "./components/SpecialOffers";
import BrowseByCategories from "./components/BrowseByCategories";

function App() {
  return (
    <div className="bg-lavander">
      <Navbar />
      <Hero />
      <SpecialOffers />
      <BrowseByCategories/>
    </div>
  );
}

export default App;
