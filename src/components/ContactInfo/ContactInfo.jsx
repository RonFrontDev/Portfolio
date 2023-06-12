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
          <h2 className="title">Email</h2>
          <p className="text">ronfrontdev@gmail.com</p>
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19420.945666121264!2d13.397606449999996!3d52.522248149999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851dfead80d8f%3A0x26212047581535f2!2sMitte%2C%20Berlin!5e0!3m2!1sda!2sde!4v1685967827185!5m2!1sda!2sde"
          width="600"
          height="400"
          style={{ border: "10px solid black" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
              I am Currently located in Germany, Berlin
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
