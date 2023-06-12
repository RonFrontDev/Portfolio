import ContactInfo from "../../components/ContactInfo/ContactInfo";
import "./Contact.scss";
import React, { useState } from "react";

function Contact() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      <div id="contactSection" className="contact">
        {/* Contact Section */}
        <ContactInfo />
        {/* <Document file="CV.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
       Page {pageNumber} of {numPages}
      </p> */}
      </div>
    </>
  );
}

export default Contact;
