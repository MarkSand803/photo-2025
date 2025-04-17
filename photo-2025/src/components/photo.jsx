// Photo.jsx
import './css/Photo.css';
import React, { useState } from "react";
import EditPhoto from "./Editphoto"; // Import the EditPhoto component
import DeletePhoto from "./Deletephoto"; // Import the DeletePhoto component

function Photo(props) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showPhoto, setShowPhoto] = useState(true);

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const hidePhoto = () => {
    setShowPhoto(false);
  };

  return (
    <>
      {showPhoto ? (
        <section className="photo">
          {showDeleteDialog ? (
            <DeletePhoto
              _id={props._id}
              title={props.title}
              closeDeleteDialog={closeDeleteDialog}
              deletePhotoFromList={props.deletePhoto}
            />
          ) : null}

          {/* Edit Dialog is now managed in Portfolio.jsx */}
          {/* <EditPhoto
            _id={props._id}
            title={props.title}
            location={props.location}
            name={props.name}
            date={props.date}
            img_name={props.img_name}
            details={props.details}
            closeEditDialog={() => {}} // These will be handled in Portfolio
            editPhoto={() => {}}
          /> */}

          <header className="photo-header">
            <h3>{props.title}</h3>
            <section id="change-buttons">
              <a href="#" onClick={() => props.openEditDialog(props._id)}> {/* Call the prop */}
                &#9998;
              </a>
              <a href="#" onClick={openDeleteDialog}>
                &#x2715;
              </a>
            </section>
          </header>
          <p>{props.location}</p>
          <p>{props.date}</p>
          <img src={`https://msphotograph-2025.onrender.com/images/${props.img_name.replace('images/', '')}`} alt={props.title} />
        </section>
      ) : null}
    </>
  );
}

export default Photo;