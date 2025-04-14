import "./css/Addphoto.css"; // Create this CSS 

import "./css/Dialog.css"; // Keep if you use general dialog styles 

import React, {useState} from "react"; 

 

const Addphoto = (props) => { 

  const [result, setResult] = useState(""); 

  const [prevSrc, setPrevSrc] = useState(""); 

 

  const uploadImage = (event) => { 

    setPrevSrc(URL.createObjectURL(event.target.files[0])); 

  }; 

 

  const addToServer = async(event) => { 

    event.preventDefault(); //stops us from going to another page or refreshing 

    setResult("Sending..."); 

 

    const formData = new FormData(event.target); 

    console.log(...formData); 

 

    const response = await fetch("https://msphotograph-2025.onrender.com/api/portfolio", { 

      "method":"POST", 

      "body":formData 

    }); 

 

    if(response.status === 200){ 

      setResult("Photo added successfully"); 

      event.target.reset(); 

      props.closeAddDialog(); 

      const newPhoto = await response.json(); 

      props.updatePhotos(newPhoto); // Assuming updatePhotos expects a single new photo object 

    } else { 

      setResult("Error adding photo"); 

    } 

  }; 

 

  return ( 

    <div id="add-dialog" className="w3-modal"> {/* Keep or adjust modal class */} 

      <div className="w3-modal-content"> {/* Keep or adjust modal content class */} 

        <div className="w3-container"> {/* Keep or adjust container class */} 

          <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span> 

          <form id="add-property-form" onSubmit={addToServer}> {/* Keep or adjust form ID */} 

            <h3>Add New Photo</h3> 

 

            <p> 

              <label htmlFor="title">Photo Title:</label> 

              <input type="text" id="title" name="title" required min="3"></input> 

            </p> 

 

            <p> 

              <label htmlFor="location">Location:</label> 

              <input type="text" id="location" name="location" required></input> 

            </p> 

 

            <p> 

              <label htmlFor="name">Photographer Name:</label> 

              <input type="text" id="name" name="name" required></input> 

            </p> 

 

            <p> 

              <label htmlFor="date">Date Taken:</label> 

              <input type="date" id="date" name="date"></input> 

            </p> 

 

            <section className="columns"> {/* Keep or adjust columns class */} 

              <div> 

                <p id="img-prev-section"> 

                  {prevSrc!==""? 

                  (<img id="img-prev" src={prevSrc} alt="Preview"></img>): 

                  ("") 

                  } 

                </p> 

              </div> 

              <p id="img-upload"> 

                <label htmlFor="img_name">Upload Image:</label> {/* Changed htmlFor and name */} 

                <input type="file" id="img_name" name="img_name" accept="image/*" onChange={uploadImage} required /> {/* Changed id and name, added required */} 

              </p> 

            </section> 

 

            <p> 

              <label htmlFor="details">Details (comma-separated):</label> 

              <textarea id="details" name="details"></textarea> 

            </p> 

 

            <p> 

              <button type="submit">Add Photo</button> {/* Changed button text */} 

            </p> 

            <p>{result}</p> 

          </form> 

        </div> 

      </div> 

    </div> 

  ); 

}; 

 

export default Addphoto; 