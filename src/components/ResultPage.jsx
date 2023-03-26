import React from "react";
import Scale from "./img/Scale.png"
import { Link } from 'react-router-dom';

const ResultPage = () => {
  return (
    <div className="result-box">
        <div className="result-content-box">
            <div className="result-content">
                <div className="result-top-text">
                    <h1>Your Result: 6</h1>
                </div>
                <div className="scale-img-box">
                    <img className="scale-img" src={Scale} alt=""></img>                    
                </div>
                <h2>It can be improved!</h2>
                <div className="res-but-container">
                    <Link to={"/recom"}><button type="button">Recommendation</button></Link> 
                </div>              
            </div>
        </div>
    </div>
  );
};

export default ResultPage;


