import ContactInfo from "../../components/ContactInfo/ContactInfo";
import "./Experience.scss";
import React, { useState } from "react";

function Experience() {
  return (
    <>
      <div id="experience" className="experience">
        <div className="experience__header">
          <h1 className="experience__headline">Work Experience</h1>
          <img className="experience__image" src="/images/imac.jpg" alt="" />
        </div>
        <div className="experience__container">
          <div className="experience__work experience__work--1">
            <img
              className="experience__work--image"
              src="images/BB.jpg"
              alt=""
            />
            <h5 className="experience__work--title ">Software Developer</h5>
            <ul className="experience__work--text">
              <li>Improving system</li>
              <li>Bug fixing</li>
              <li>creating user friendly interface </li>
              <li>Managing support chat</li>
            </ul>
          </div>
          <div className="experience__work experience__work--1">
            <img
              className="experience__work--image "
              src="images/sportOp.png"
              alt=""
            />
            <h5 className="experience__work--title ">Web Developer</h5>
            <ul className="experience__work--text">
              <li>Clean up of overall web designs</li>
              <li>Implementing new functions</li>
            </ul>
          </div>
          <div className="experience__work experience__work--1">
            <img
              className="experience__work--image"
              src="images/SD.jpg"
              alt=""
            />
            <h5 className="experience__work--title ">Wordpress Developer</h5>
            <ul className="experience__work--text">
              <li>Build new wordpress website</li>
              <li>Implementing new functions</li>
              <li>Communicate with clients</li>
              <li>Migrate website from local to server</li>
            </ul>
          </div>
          <div className="experience__work experience__work--1">
            <img
              className="experience__work--image"
              src="images/2pm.jpg"
              alt=""
            />
            <h5 className="experience__work--title ">Art Director</h5>
            <ul className="experience__work--text">
              <li>Update Website</li>
              <li>Photo Editing</li>
              <li>Video Editing</li>
              <li>optimizing Workflow</li>
            </ul>
          </div>
          <div className="experience__work experience__work--1">
            <img
              className="experience__work--image "
              src="images/KV.png"
              alt=""
            />
            <h5 className="experience__work--title ">
              Content Creator / web delevloper
            </h5>
            <ul className="experience__work--text">
              <li>Create video for social media</li>
              <li>Photo Editing</li>
              <li>Website maintains and update</li>
            </ul>
          </div>
          <div className="experience__work experience__work--1">
            <img
              className="experience__work--image sizes invert"
              src="images/difo.png"
              alt=""
            />
            <h5 className="experience__work--title ">web delevloper</h5>
            <ul className="experience__work--text">
              <li>Clean up of overall web designs</li>
              <li>Create a member login</li>
              <li>Create webinar libraries</li>
              <li>booking systems for members</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
