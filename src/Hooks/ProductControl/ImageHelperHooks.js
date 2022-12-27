import { useState } from "react";
import imageCompression from 'browser-image-compression';

const imageHelperHook=()=>{

    
  const [image, setImage] = useState([]);
  const[loading,setLoading]=useState(false)
  
  const imageCompress=async(event) => {
    setLoading(true)
    const options = {
        maxSizeMB: 1,
        //  maxWidthOrHeight: 1920,
        useWebWorker: true
    }
    try {

        for (let i = 0; i < event.target.files.length; i++) {
            const imageFile = event.target.files[i];
            // setImages(oldArray => [...oldArray, URL.createObjectURL(imageFile)])

            const compressedFile = await imageCompression(imageFile, options);
            setImage(oldarray => [...oldarray, compressedFile])
        }

        setLoading(false)


    } catch (error) {
        //  console.log(error);
        setLoading(false)

    }
  };

    return[loading,image,setImage,imageCompress]
}

export default imageHelperHook;