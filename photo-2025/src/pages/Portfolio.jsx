import './css/Portfolio.css';
import Photo from '../components/photo';
import Footer from '../components/footer'; // Import Footer
import '../components/Main'; // Import the main styles
import axios from "axios";
import { useState, useEffect } from 'react'; // Import useState and useEffect

    //https://msphotograph-2025.onrender.com/api/portfolio
    //https://msphotograph-2025.onrender.com/api/portfolio

    function App() {
        const [photos, setPhotos] = useState([]);

        useEffect(() => {
            const fetchPhotos = async () => {
              try {
                const response = await axios.get(
                  "https://msphotograph-2025.onrender.com/api/portfolio"
                );
                setPhotos(response.data); // Update the 'photos' state
              } catch (error) {
                console.error("Error fetching data:", error);
              }
            };
        
            fetchPhotos();
          }, []); // Empty dependency array ensures this runs only once
        
          return (
            <>
              <section className="columns">
                {photos.map((photo) => ( // Map over the 'photos' state
                  <Photo
                    key={photo._id} // Use a unique key from the data
                    id={photo._id}
                    title={photo.title}
                    location={photo.location}
                    name={photo.name}
                    img_name={photo.img_name}
                    date={photo.date}
                    details={photo.details} // Corrected typo: deatials to details
                  />
                ))}
        </section>
        <Footer /> {/* Add Footer at the bottom */}

    </>
  );
}

export default App;