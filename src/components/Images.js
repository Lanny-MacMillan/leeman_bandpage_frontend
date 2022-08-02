import '../App.css';
import {useState, useEffect} from 'react'
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL, list } from "firebase/storage"
import { v4 } from 'uuid'



const Images = (props) => {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, "images/")

    const uploadImage = () => {
        if (imageUpload == null) {
            alert('No Image Selected')
            return;
        }
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url])
            })
            alert('Image uploaded')
        })
    }


    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    return (
        <> 
        <div id='merchBackground' 
            style={{ 
                background: '#757575'
                }}>
            <div className="showContainer">
                <h1 id='imagesH1'>Some Images of Us Soon</h1>
            </div>
            <div className='bandImages'>
                {imageUrls.map((url) => {
                    return <img className='urlImg' src={url}
                />
            })}
            </div>  
        </div>
        </>
    )
}
export default Images