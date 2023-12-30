import ContactInfo from "../../components/ContactInfo/ContactInfo";
import "./Contact.scss";
import React, { useState } from "react";

function Contact() {
  return (
    <>
      <div id="contact" className="contact">
        <ContactInfo />
      </div>
    </>
  );
}

export default Contact;
