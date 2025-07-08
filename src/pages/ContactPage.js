import React from "react";
import Header from "../components/Header"; // Header bileşenini içe aktar
import ContactUs from "../components/ContactUs"; // ContactUs bileşenini içe aktar
import Footer from "../components/Footer"; // Footer bileşenini içe aktar
const ContactPage = () => {
  return (
    <div>
      <Header isFixed={"fixed"}/>
      <ContactUs className=""/>
      <Footer />
    </div>
  );
}

export default ContactPage;