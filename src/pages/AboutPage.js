import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
const AboutPage = () => {
    return (
        <div className="">
            <Header isFixed={"fixed"}/>
            <About/>
            <Footer/>
        </div>
    );
}

export default AboutPage;