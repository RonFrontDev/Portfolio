import React, { useState } from "react";
import "./Modal.scss";

function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const pictures = [
    {
      url: "images/office.jpg",
      link: "https://www.example.com",
    },
    {
      url: "images/office1.jpg",
      link: "https://www.example.com",
    },
    {
      url: "images/office2.jpg",
      link: "https://www.example.com",
    },
    {
      url: "images/office3.jpg",
      link: "https://www.example.com",
    },
  ];

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentPictureIndex(0);
  };

  const handlePrevPicture = () => {
    setCurrentPictureIndex(
      (currentPictureIndex - 1 + pictures.length) % pictures.length
    );
  };

  const handleNextPicture = () => {
    setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length);
  };

  const handlePictureClick = (index) => {
    window.open(pictures[index].link, "_blank");
  };

  return (
    <div>
      <a href="#" onClick={handleModalOpen}>
        Open Modal
      </a>
      {showModal ? (
        <div className="modal-background">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close" onClick={handleModalClose}>
              X
            </div>
            <div className="image-container">
              <img
                className="modal-image"
                src={pictures[currentPictureIndex].url}
                alt={`Picture ${currentPictureIndex + 1}`}
                onClick={() => handlePictureClick(currentPictureIndex)}
              />
              <div className="button-container">
                <button className="prev-button" onClick={handlePrevPicture}>
                  &#8249;
                </button>
                <button className="next-button" onClick={handleNextPicture}>
                  &#8250;
                </button>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;

// const pictures = [
//   "images/office.jpg",
//   "images/office1.jpg",
//   "images/office2.jpg",
//   "images/office3.jpg",
//   "images/office4.jpg",
// ];
