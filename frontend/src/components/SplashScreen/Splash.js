import React from 'react';
import './splash.css'; // Import the CSS for styling
import splashlogo from "../../assets/images/splashlogo.png"
const SplashScreen = () => {
    return (
        <div className="splash-screen">
            <div className="splash-content">
                <img src={splashlogo} />
            </div>
        </div>
    );
};

export default SplashScreen;
