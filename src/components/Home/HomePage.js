import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
        return(
            <div className="jumbotron">
                <h1>Pluralsight Adminis</h1>
                <p>some ttext</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
};

export default HomePage;