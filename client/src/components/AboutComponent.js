import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function About() {
    return (
        <div className="container">
            <div className="row-content align-items-center">
                <div className="col-6">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About</BreadcrumbItem>
                </Breadcrumb>
                    <h2>About</h2>
                    <p> Storm Breaker is a a real time severe weather tracker
                        built with React, React-Redux, Express, MongoDB,
                        and the Weather.gov API.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;