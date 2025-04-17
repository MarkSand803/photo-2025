// Editphoto.jsx
import "./css/Dialog.css"; // Keep if you have general dialog styles
import React, { useState } from "react";

const EditPhoto = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState(props.img_name ? `https://msphotograph-2025.onrender.com/${props.img_name}` : ""); // Show existing image if available

  const uploadImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPrevSrc(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch(`https://msphotograph-2025.onrender.com/api/portfolio/${props._id}`, {
      method: "PUT",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Photo updated successfully");
      event.target.reset();
      props.closeEditDialog();
      props.editPhoto(await response.json()); // Pass updated photo data back
    } else if (response.status === 400) {
      const errorData = await response.text();
      setResult(`Error updating photo: ${errorData}`);
    } else {
      setResult("Error updating photo");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeEditDialog}
          >
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
            <h3>Edit Photo</h3>
            <p>
              <label htmlFor="title">Photo Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={props.title}
                required
                minLength="3"
              />
            </p>
            <p>
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                defaultValue={props.location}
                required
              />
            </p>
            <p>
              <label htmlFor="name">Photographer Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={props.name}
                required
              />
            </p>
            <p>
              <label htmlFor="date">Date Taken:</label>
              <input
                type="date"
                id="date"
                name="date"
                defaultValue={props.date}
              />
            </p>
            <section className="columns">
              <div>
                <p id="img-prev-section">
                  {prevSrc ? (
                    <img id="img-prev" src={prevSrc} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                  ) : (
                    "No image selected/available"
                  )}
                </p>
              </div>
              <p id="img-upload">
                <label htmlFor="img_name">Upload New Image:</label>
                <input type="file" id="img_name" name="img_name" accept="image/*" onChange={uploadImage} />
                <small>Leave empty to keep the current image.</small>
              </p>
            </section>
            <p>
              <label htmlFor="details">Details (comma-separated):</label>
              <textarea
                id="details"
                name="details"
                defaultValue={props.details ? props.details.join(', ') : ""}
              ></textarea>
            </p>
            <p>
              <button type="submit">Update Photo</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPhoto;