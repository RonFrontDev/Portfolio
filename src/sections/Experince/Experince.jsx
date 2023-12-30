import ContactInfo from "../../components/ContactInfo/ContactInfo";
import "./Experince.scss";
import React, { useState } from "react";

function Experince() {
  return (
    <>
      <div id="experince" className="experince">
        <div className="experince__header">
          <h1 className="experince__headline">Work Experience</h1>
          <img
            className="experince__image"
            src="/images/computerE.jpg"
            alt=""
          />
        </div>
        <div className="experince__container">
          <div className="experince__work experince__work--1">
            <img
              className="experince__work--image"
              src="images/BB.jpg"
              alt=""
            />
            <h5 className="experince__work--title ">Software Developer</h5>
            <ul className="experince__work--text">
              <li>Clean up of overall web designs</li>
              <li>Implementing new functions</li>
              <li>Implementing webinar libraries</li>
              <li> Implementing a booking systems for members</li>
            </ul>
          </div>
          <div className="experince__work experince__work--1">
            <img
              className="experince__work--image sizes"
              src="images/sportO.png"
              alt=""
            />
            <h5 className="experince__work--title ">Web Developer</h5>
            <ul className="experince__work--text">
              <li>Clean up of overall web designs</li>
              <li>Implementing new functions</li>
              <li>Implementing webinar libraries</li>
              <li> Implementing a booking systems for members</li>
            </ul>
          </div>
          <div className="experince__work experince__work--1">
            <img
              className="experince__work--image"
              src="images/SD.jpg"
              alt=""
            />
            <h5 className="experince__work--title ">Wordpress Developer</h5>
            <ul className="experince__work--text">
              <li>Clean up of overall web designs</li>
              <li>Implementing new functions</li>
              <li>Implementing webinar libraries</li>
              <li> Implementing a booking systems for members</li>
            </ul>
          </div>
          <div className="experince__work experince__work--1">
            <img
              className="experince__work--image"
              src="images/2pm.jpg"
              alt=""
            />
            <h5 className="experince__work--title ">Art Director</h5>
            <ul className="experince__work--text">
              <li>Clean up of overall web designs</li>
              <li>Implementing new functions</li>
              <li>Implementing webinar libraries</li>
              <li> Implementing a booking systems for members</li>
            </ul>
          </div>
          <div className="experince__work experince__work--1">
            <img
              className="experince__work--image"
              src="images/KV.png"
              alt=""
            />
            <h5 className="experince__work--title ">
              Content Creator / web delevloper
            </h5>
            <ul className="experince__work--text">
              <li>Clean up of overall web designs</li>
              <li>Implementing new functions</li>
              <li>Implementing webinar libraries</li>
              <li> Implementing a booking systems for members</li>
            </ul>
          </div>
          <div className="experince__work experince__work--1">
            <img
              className="experince__work--image"
              src="images/KV.png"
              alt=""
            />
            <h5 className="experince__work--title ">
              Content Creator / web delevloper
            </h5>
            <ul className="experince__work--text">
              <li>Clean up of overall web designs</li>
              <li>Implementing new functions</li>
              <li>Implementing webinar libraries</li>
              <li> Implementing a booking systems for members</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experince;
