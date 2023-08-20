import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import ProjectMasonary from './Pages/ProjectMasonary';
import ProjectClassic1 from './Pages/ProjectClassic1';
import ListGroup from './Pages/ListGroup';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <Routes>
                            <Route path="/"  element={<Home/>} />
                            <Route path='/about' element={<About/>} />
                            <Route path='/services' element={<Services/>} />
                            <Route path='/contactus' element={<ContactUs/>} />
                            <Route path='/partners' element={<ProjectClassic1/>} />
                            <Route path='/gallery' element={<ProjectMasonary/>} />
                            <Route path='/reviews' element={<ListGroup/>} />
                        </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;