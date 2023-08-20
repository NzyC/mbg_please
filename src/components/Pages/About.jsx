import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import About4 from "./../Elements/About4";
import Specialization4 from "./../Elements/Specialization4";
import Team3 from "./../Elements/Team3";
import AboutSummary from "./../Elements/AboutSummary";

var bnrimg = require("./../../images/banner/1.jpg");

class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content">
          <div className="section-head">
            <div className="mt-separator-outer separator-center">
              <div className="mt-separator">
                <h2 className="text-white text-uppercase sep-line-one ">
                  <span className="font-weight-300 text-primary">About Us</span>
                </h2>
              </div>
            </div>
          </div>
          <About4 />
          {/* <Specialization4 />
                    <Team3 />
                    <AboutSummary /> */}
        </div>

        <Footer />
      </>
    );
  }
}

export default About;
