import axios from "axios";
import { useState } from "react";
import { url } from "../../Route/Address";
import loadingState from "../Loading";

const productSave = (image, inputText, setInputText,setImage,initialValue) => {
  const { baseUrl, route, imageUpload, createProduct } = url;


  const uploadImages = async () => {
    if (image.length == 0) {
      return alert("please select a images")
    }

    let formData = new FormData();
    var myBlob = new Blob();

    image.forEach((element, index) => {
      const myFile = new File([element], element.name, {
        type: myBlob.type,
      });

      formData.append("image", myFile);
    });

    await axios.post(baseUrl + route + imageUpload, formData,{ withCredentials: true }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
       
        // uploadProductDetails(res.data);
        // setImages([])
        createNewProduct(res.data)
        alert("image upload complete")

      })
      .catch((err) => {
        console.log(err)
        alert("some problem occur while image uploading please try again");
        //setImages([])
      });
  };


  const createNewProduct = async (imagesData) => {
    const {
      highLightTextArray,
      youtubeLinkArray,
      brandName,
      categoryName,
      price,
      name,
      description } = inputText

    await axios.post(baseUrl + route + createProduct, {
      name, brandName, price, highlightText: highLightTextArray, description, youtubeLinks: youtubeLinkArray, category: categoryName,
      image: imagesData
    },{ withCredentials: true }).then(res => {
      alert(res.data.message)
       console.log(res.data)
       setInputText(initialValue)
       setImage([])
       
    }).catch(err => {
      alert(err.message)
      console.error(err)
    })


  }



  return [uploadImages];
};

export default productSave;
