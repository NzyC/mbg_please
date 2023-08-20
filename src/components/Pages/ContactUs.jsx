import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import GoogleMapReact from "google-map-react";

var bnrimg = require("./../../images/banner/4.jpg");

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUs extends React.Component {
  render() {
    const defaultProps = {
      center: {
        lat: 34.07328,
        lng: -118.25141,
      },
      zoom: 12,
    };
    return (
      <>
        <Header />
        <div className="page-content">

          {/* SECTION CONTENTG START */}
          <div className="section-full p-tb80 inner-page-padding">
            {/* LOCATION BLOCK*/}
            <div className="container">
              {/* GOOGLE MAP & CONTACT FORM */}
              <div className="section-content">
                {/* CONTACT FORM*/}
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info m-b30">
                      {/* TITLE START */}
                      <div className="section-head">
                        <div className="mt-separator-outer separator-left">
                          <div className="mt-separator">
                            <h2 className="text-uppercase sep-line-one ">
                              <span className="font-weight-300 text-primary">
                                Contact
                              </span>{" "}
                              Info
                            </h2>
                          </div>
                        </div>
                      </div>
                      {/* TITLE END */}
                      <div className="bg-dark p-a20 text-white">
                        <div className="mt-icon-box-wraper left p-b40">
                          <div className="icon-xs">
                            <i className="fa fa-phone" />
                          </div>
                          <div className="icon-content">
                            <h5 className="m-t0 font-weight-500">
                              Phone number
                            </h5>
                            <p>(+61) 423 331 001</p>
                          </div>
                        </div>
                        <div className="mt-icon-box-wraper left p-b40">
                          <div className="icon-xs">
                            <i className="fa fa-envelope" />
                          </div>
                          <div className="icon-content">
                            <h5 className="m-t0 font-weight-500">
                              Email address
                            </h5>
                            <p>monumentalbuilding@outlook.com.au</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-8 col-sm-6">
                    <iframe
                      src="https://tradehq.com.au/monumentalbuildinggroup/enquire"
                      style={{
                        width: "100%",
                        height: "1050px",
                        border: "none",
                        margin: "0",
                        padding: "0",
                        overflow: "hidden",
                        zIndex: "999999",
                      }}
                      title="Monumental Building Group Enquire"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION CONTENT END */}
        </div>

        <Footer />
      </>
    );
  }
}

export default ContactUs;
