
import './css/Photo.css';
import React from "react";

function Photo(photo) {
    const imageSrc = `https://msphotograph-2025.onrender.com/api/portfolio/${photo.img_name}`;
    //https://msphotograph-2025.onrender.com/api/portfolio 
    return  (
    <section className="photo">
        <h3>{photo.title}</h3>
        <p>{photo.location}</p>
        <p>{photo.date}</p>
        <img src={process.env.PUBLIC_URL + "/" + photo.img_name} />
    </section>
    );
}

export default Photo;