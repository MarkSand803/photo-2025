import "./css/photos.css"; 

import "./css/Dialog.css"; 

import React, { useState, useEffect } from "react"; 

import axios from "axios"; 

import Photo from "./photo"; 

import AddPhoto from "./Addphoto"; 

 

const Photos = () => { 

  const [photos, setPhotos] = useState([]); 

  const [showAddDialog, setShowAddDialog] = useState(false); 

  const [refreshPhotos, setRefreshPhotos] = useState(false); // New state to trigger refresh 

 

  useEffect(() => { 

    const fetchPhotos = async () => { 

      try { 

        const response = await axios.get("https://msphotograph-2025.onrender.com/api/portfolio"); 

        setPhotos(response.data); 

      } catch (error) { 

        console.error("Error fetching photos:", error); 

      } 

    }; 

 

    fetchPhotos(); 

    setRefreshPhotos(false); // Reset refresh trigger after fetching 

  }, [refreshPhotos]); // Re-run effect when refreshPhotos changes 

 

  const openAddDialog = () => { 

    setShowAddDialog(true); 

  }; 

 

  const closeAddDialog = () => { 

    setShowAddDialog(false); 

  }; 

 

  const updatePhotos = () => { 

    // Instead of directly updating state, trigger a re-fetch 

    setRefreshPhotos(true); 

  }; 

 

  return ( 

    <> 

      <button id="add-photo-button" onClick={openAddDialog}>Add Photo</button> 

 

      {showAddDialog && ( 

        <AddPhoto 

          closeAddDialog={closeAddDialog} 

          updatePhotos={updatePhotos} // Now this triggers a re-fetch 

        /> 

      )} 

 

      <div id="photos-container" className="columns"> 

        {photos.map((photo) => ( 

          <Photo 

            key={photo._id} 

            _id={photo._id} 

            title={photo.title} 

            location={photo.location} 

            name={photo.name} 

            img_name={photo.img_name} 

            date={photo.date} 

            details={photo.details} 

          /> 

        ))} 

      </div> 

    </> 

  ); 

}; 

 

export default Photos; 