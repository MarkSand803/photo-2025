import './css/Portfolio.css';
import Photo from '../components/photo';
import Footer from '../components/footer';
import '../components/Main';
import axios from "axios";
import { useState, useEffect } from 'react';
import AddPhoto from '../components/Addphoto';
import EditPhoto from '../components/Editphoto'; // Corrected import to PascalCase

function Portfolio() {
    const [photos, setPhotos] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [editingPhotoId, setEditingPhotoId] = useState(null); // To track which photo is being edited
    const [showEditDialog, setShowEditDialog] = useState(false);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(
                    "https://msphotograph-2025.onrender.com/api/portfolio/"
                );
                setPhotos(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchPhotos();
    }, []);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    const updatePhotos = (newPhoto) => {
        setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
    };

    const deletePhoto = (photoId) => {
        console.log("Trying to delete " + photoId);
        setPhotos(prevPhotos => prevPhotos.filter(photo => photo._id !== photoId));
        // You'll likely want to make an API call here to delete from the server as well
    };

    const openEditDialog = (id) => {
        setEditingPhotoId(id);
        setShowEditDialog(true);
    };

    const closeEditDialog = () => {
        setEditingPhotoId(null);
        setShowEditDialog(false);
    };

    const editPhotoInList = (updatedPhoto) => {
        console.log("Trying to edit " + updatedPhoto._id);
        setPhotos(prevPhotos =>
            prevPhotos.map(photo =>
                photo._id === updatedPhoto._id ? { ...photo, ...updatedPhoto } : photo
            )
        );
        closeEditDialog(); // Close the edit dialog after updating
    };

    const photoToEdit = photos.find(photo => photo._id === editingPhotoId);

    return (
        <>
            <button id="add-photo-button" onClick={openAddDialog}>Add Photo</button>

            {showAddDialog && (
                <AddPhoto
                    closeAddDialog={closeAddDialog}
                    updatePhotos={updatePhotos}
                />
            )}

            {showEditDialog && photoToEdit && (
                <EditPhoto
                    {...photoToEdit}
                    closeEditDialog={closeEditDialog}
                    editPhoto={editPhotoInList}
                />
            )}

            <section className="columns">
                {photos.map((photo) => (
                    <Photo
                        key={photo._id}
                        {...photo}
                        deletePhoto={deletePhoto}
                        openEditDialog={openEditDialog} // Pass the openEditDialog function
                    />
                ))}
            </section>
            <Footer />
        </>
    );
}

export default Portfolio;