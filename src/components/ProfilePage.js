import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { getDatabase, ref as dbRef, set as firebaseSet } from 'firebase/database';

export default function ProfilePage(props) {
    const currentUser = props.currentUser;
    const displayName = props.currentUser.userName;

    const [imageFile, setImageFile] = useState(undefined)
    let initialURL = props.currentUser.userImg;
    const [imageUrl, setImageUrl] = useState(initialURL)

    const handleChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0]
            setImageFile(imageFile);
            setImageUrl(URL.createObjectURL(imageFile));
        }
    }

    const handleImageUpload = async (event) => {
        const storage = getStorage();
        const imageRef = ref(storage, "userImages/" + currentUser.userId + ".png");
        await uploadBytes(imageRef, imageFile)
        const downloadUrlString = await getDownloadURL(imageRef);

        await updateProfile(currentUser, { photoURL: downloadUrlString });

        const db = getDatabase();
        const refString = "userData/" + currentUser.userId + "/imgUrl";
        const userImgRef = dbRef(db, "userData/" + currentUser.userId + "/imgUrl")
        firebaseSet(userImgRef, downloadUrlString);

    }

    return (
        <div className='container row'>

            <div className='col-md-4'>
                <div className=''>
                    <div className='d-flex flex-column align-items-center'>
                        <h2>{props.currentUser.userName && displayName + "'s"} Profile</h2>
                        <img src={imageUrl} alt={currentUser.userName + " avatar"} className="mb-2" width='200' />
                        <div className="mb-5">
                            <div><label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label></div>
                            <div><button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button></div>
                            <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className=''>
                    <div className='d-flex flex-column'>
                        <h2>Personal Information</h2>
                        <h3>Role: {!props.currentUser.userRole && "Not Set"}</h3>
                        <h3>Number of Posts: {!props.currentUser.numPosts && "0"}</h3>
                        <h3>Total Discussion Points: {!props.currentUser.totalPoints && "0"}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}