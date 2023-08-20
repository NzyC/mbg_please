import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';
import Testimonials from '../Elements/Testimonials';

var bnrimg = require('./../../images/banner/2.jpg');

class ListGroup extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Testimonials />
                </div>

                <Footer />
            </>
        );
    };
};

export default ListGroup;