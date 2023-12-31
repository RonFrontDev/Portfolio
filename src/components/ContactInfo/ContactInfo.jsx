import React, { useState } from "react";
import "./ContactInfo.scss";

function ContactInfo() {
  const [popupContent, setPopupContent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (content) => {
    setPopupContent(content);
    setShowPopup((prevShowPopup) => !prevShowPopup);
  };

  const renderPopupContent = () => {
    if (popupContent === "email") {
      return (
        <div>
          <h2 className="contactinfo__email--title">
            Any quetions, just shoot me an email
          </h2>
          <p className="contactinfo__email--text">ronfrontdev@gmail.com</p>
        </div>
      );
    } else if (popupContent === "cv") {
      return (
        <div>
          <h2 className="title">Curriculum Vitae</h2>
          <p className="text">Check out my CV</p>
          <embed target="_blank" src="CV.pdf" width="800px" height="1000px" />
        </div>
      );
    } else if (popupContent === "location") {
      return (
        <div className="contactinfo__location--container">
          <img
            className="contactinfo__location--image"
            src="images/copenhagen.jpg"
            alt=""
          />
          <h3 className="contactinfo__location--text">
            But i also work remote
          </h3>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="contactinfo">
        <h3 className="contactinfo__headline">Get in touch</h3>
        <div className="contactinfo__container">
          <div className="contactinfo__box">
            <a
              className="contactinfo__link"
              target="_blank"
              href="https://www.linkedin.com/in/ronny-christensen-08a92957/"
              rel="noopener noreferrer"
            >
              <img
                className="contactinfo__icon"
                src="svg/linkedin.svg"
                alt="LinkedIn"
              />
              <p className="contactinfo__text">Connect with me here</p>
            </a>
          </div>
          <div
            className="contactinfo__box"
            onClick={() => togglePopup("email")}
          >
            <img className="contactinfo__icon" src="svg/mail.svg" alt="email" />
            <p className="contactinfo__text">Send me an Email</p>
          </div>
          <div
            className="contactinfo__box"
            onClick={() => togglePopup("location")}
          >
            <img
              className="contactinfo__icon"
              src="svg/location.svg"
              alt="location"
            />
            <p className="contactinfo__text">
              I am located in Denmark, Copenhagen
            </p>
          </div>
          <div className="contactinfo__box" onClick={() => togglePopup("cv")}>
            <img className="contactinfo__icon" src="svg/cv.svg" alt="CV" />
            <p className="contactinfo__text">Check out my CV</p>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="contactinfo__popup" onClick={() => setShowPopup(false)}>
          {renderPopupContent()}
        </div>
      )}
    </>
  );
}

export default ContactInfo;
