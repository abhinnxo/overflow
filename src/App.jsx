/* eslint-disable react/prop-types */

import "./index.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SecondNavbar from "./components/SecondNavbar";
import SpecialOffers from "./components/SpecialOffers";
import BrowseByCategories from "./components/BrowseByCategories";
import FnRCarousel from "./components/FnRCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-lavander">
      <Navbar />
      <SecondNavbar />
      <FnRCarousel />
      <Hero />
      <SpecialOffers />
      <BrowseByCategories />
      <Footer />
    </div>
  );
}

export default App;
