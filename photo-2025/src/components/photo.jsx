import './css/Photo.css';
import React from "react";

function Photo( photo ) {
  return  (
    <section className="photo">
      <h3>{photo.title}</h3>
      <p>{photo.location}</p>
      <p>{photo.date}</p>
      {/* Use the same pattern as your professor's code */}
      <img src={`https://msphotograph-2025.onrender.com/images/${photo.img_name.replace('images/', '')}`} alt={photo.title} />
    </section>
  );
}

export default Photo;