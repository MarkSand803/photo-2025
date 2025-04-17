// DeletePhoto.jsx
import "./css/Dialog.css"; // Keep if you have general dialog styles
import React, { useState } from "react";

const DeletePhoto = (props) => {
  const [result, setResult] = useState("");

  const deletePhoto = async () => {
    const response = await fetch(`https://msphotograph-2025.onrender.com/api/portfolio/${props._id}`, {
      method: "DELETE",
    });

    if (response.status === 200) {
      setResult("Photo deleted successfully");
      props.closeDeleteDialog();
      props.deletePhotoFromList(props._id); // Notify parent to remove from state
    } else {
      setResult("Sorry, we couldn't delete this photo right now");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDeleteDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the "{props.title}" photo?</h3>
            <section>
              <button onClick={props.closeDeleteDialog}>No</button>
              <button onClick={deletePhoto}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePhoto;