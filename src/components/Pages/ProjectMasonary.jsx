import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import OurProject from '../Elements/OurProject';

var bnrimg = require('./../../images/banner/1.jpg');

const filters = [
    { label: "Construction", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Consulting", filter: ".cat-5" },
    
];

const projects = [
    {
        thumb: require('./../../images/projects/portrait/pic4.jpg'),
        image: require('./../../images/projects/portrait/pic4.jpg'),
        title: 'Life style building',
        description: 'Engineering your dreams with us.',
        filter: 'cat-1'
    },
    {
        thumb: require('./../../images/projects/pic-1.jpg'),
        image: require('./../../images/projects/pic-1.jpg'),
        title: 'Central City Building',
        description: 'Engineering your dreams with us.',
        filter: 'cat-2'
    },
    {
        thumb: require('./../../images/projects/portrait/pic7.jpg'),
        image: require('./../../images/projects/portrait/pic7.jpg'),
        title: 'Nathan Brooke House',
        description: 'Engineering your dreams with us.',
        filter: 'cat-3'
    },
    {
        thumb: require('./../../images/projects/square/pic9.jpg'),
        image: require('./../../images/projects/square/pic9.jpg'),
        title: 'Metropolitan Museum',
        description: 'Engineering your dreams with us.',
        filter: 'cat-4'
    },
    {
        thumb: require('./../../images/projects/portrait/pic6.jpg'),
        image: require('./../../images/projects/portrait/pic6.jpg'),
        title: 'Art Family Residence',
        description: 'Engineering your dreams with us.',
        filter: 'cat-5'
    },
    {
        thumb: require('./../../images/projects/square/pic3.jpg'),
        image: require('./../../images/projects/square/pic3.jpg'),
        title: 'Office Partition Walls',
        description: 'Engineering your dreams with us.',
        filter: 'cat-4'
    },
    {
        thumb: require('./../../images/projects/portrait/pic5.jpg'),
        image: require('./../../images/projects/portrait/pic5.jpg'),
        title: 'Glass Office Screen',
        description: 'Engineering your dreams with us.',
        filter: 'cat-3'
    },
    {
        thumb: require('./../../images/projects/square/pic6.jpg'),
        image: require('./../../images/projects/square/pic6.jpg'),
        title: 'State Hermitage Museum',
        description: 'Engineering your dreams with us.',
        filter: 'cat-2'
    },
    {
        thumb: require('./../../images/projects/portrait/pic9.jpg'),
        image: require('./../../images/projects/portrait/pic9.jpg'),
        title: 'Central Florida University',
        description: 'Engineering your dreams with us.',
        filter: 'cat-1'
    },
    {
        thumb: require('./../../images/projects/square/pic5.jpg'),
        image: require('./../../images/projects/square/pic5.jpg'),
        title: 'Life style building',
        description: 'Engineering your dreams with us.',
        filter: 'cat-2'
    },
    {
        thumb: require('./../../images/projects/square/pic8.jpg'),
        image: require('./../../images/projects/square/pic8.jpg'),
        title: 'Nathan Brooke House',
        description: 'Engineering your dreams with us.',
        filter: 'cat-3'
    }
]

class ProjectMasonary extends React.Component {
    
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };
    
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                <OurProject />
                </div>

                <Footer />
            </>
        );
    };
};

export default ProjectMasonary;