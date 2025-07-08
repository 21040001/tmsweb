import React from "react";
import AnimatedPath from "../components/Animmation";
import More from "../components/More";
import WhoUs from "../components/WhoUs";
import Contact from "../components/ContactUs";
import Referances from "../components/References";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
const Main = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="main">
      <Header isFixed={isFixed} />
      <AnimatedPath />
      <WhoUs />
      <More />
      <Contact />
      <Referances id="reference" />
      <Footer />
    </div>
  );
}

export default Main;