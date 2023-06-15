import React from "react";
import '../App.css';
import IMG from '../assets/IMG.png';
import CardData from "../components/Card";

export const Home = () => {
  return (
    <main>
      <div>
        <div className="banner">
          <img src={IMG} alt="IMG" />
          <div className="banner-transparent"></div>
          <div className="banner-content">
            <p>Chez vous, partout et ailleurs</p>
          </div>
        </div>
        <CardData />
      </div>
    </main>
  );
};

