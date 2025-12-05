import React from "react";
import { TempStyle } from "./temp-style";

const Temp = () => {
  return (
    <TempStyle>
      <h1>Impact at a Glance</h1>
      <div className="grid-box">
        <div className="card pink">
          
          <div className="text-section">
            <div className="title">Colleges</div>
            <h2>100+</h2>
          </div>
        </div>
        <div className="card blue">
          <div className="text-section">
            <div className="title">Students</div>
            <h2>10,000,00</h2>
          </div>

        </div>
        <div className="card green">
          <div className="text-section">
            <div className="title">Study Materials</div>
            <h2>1000+</h2>
          </div>

        </div>
        <div className="card yellow">
          <div className="text-section">
            <div className="title">Professional Trainers</div>
            <h2>150</h2>
          </div>
        </div>
      </div>

      
      
    </TempStyle>
  );
};

export default Temp;
