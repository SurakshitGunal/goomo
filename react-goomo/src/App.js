import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';

function App() {
  return (
    <div>
    <div className="header">
      <div className="goomo-icon"><img src="goomo.png"></img></div>
      <div className="logins">
        <div className="corprate-ligin"><a href="https://corporate.goomo.com/(S(ay3ptd3vnnrcegwl42dzolzj))/login/index" >Corprate Login</a></div>
        <div className="contact-us"><a href="https://www.goomo.com/contact-us">Contact Us</a></div>
      </div>  
      <div className="payback-rewards">
        <div className="rewards">
          <div>Upto<span className="orange">10X</span></div>
          <div>Reward By</div>
        </div>
        <div className="payback-img"><img src="payback.png"></img></div>
      </div>
      <div className="sign-up"><img src="mo.png" className="mo-img"></img><div className="logins contact-us">sign Up</div></div>
    </div>
    <hr></hr>
      <div className="bg">
        <div className="components">
          <div className="fht">
            <div className="select-list">Flights</div>
            <div className="select-list">Hotels</div>
            <div className="select-list">Packages</div>
            <div className="select-list">Visa</div>
            <div className="select-list">Gift Cards</div>
          </div> 
        </div>
        <div className="serch-bar-box">
        <Home />
        </div>
      </div>
    </div>
  );
}

export default App;