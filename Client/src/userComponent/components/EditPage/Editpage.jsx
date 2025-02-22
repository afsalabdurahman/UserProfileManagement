import React, { useState } from 'react';
import './EditPage.css'; // Import the CSS file

import axios from 'axios';
import { useContext } from 'react';
import { UrlContext } from '../../../ContextApi/Url';
import { BrowserRouter, Routes, Route, Link,useNavigate } from "react-router";
import { useSelector } from 'react-redux';


const EditPage = () => {
let [error,setError]=useState()
  let token = useSelector((state) => {
    console.log(state)
     const user = state.users.find((e) => e.token1);
     const users = state.users.find((e =>e.user1))
   
     return{ userToken: user.token1,userEmail:users.user1.email} // Return token1 or null if not found
  });
  console.log(token,"from client")
 
  let navigate= useNavigate()
  let [user,setUser]=useState()
let {setData}=useContext(UrlContext)
  // State to manage form inputs
  
  const [formData, setFormData] = useState({
   
    image: null,
  });

 
  // State to manage image preview
  const [imagePreview, setImagePreview] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set image preview URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
    setFormData({
      ...formData,
      image: file,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(token.userEmail,)
   
    if(!formData.image){
      console.log("not image")
      setError("Please upload Image")
      return false
    }
    console.log(formData.image,"imgvtir")
    const formDatas = new FormData();
    formDatas.append('image', formData.image);
    formDatas.append('email',token.userEmail)

  
    axios.post('http://localhost:3000/uploadimage', formDatas, {
      headers: {
        'Content-Type': 'multipart/form-data',
         'Authorization': `Bearer ${token.userToken}`,   // Important to set the correct content type
      },
    }).then((res)=>{
      setData(res.data)
      navigate("/")
    }).catch((error)=>{
      setError(" Invalid User")

    })
    
  };

  return (
    <div className="edit-page">
      <h1>Edit Profile</h1>
      <h3 style={{textAlign:"center",color:"red"}}> {error}</h3>
      <form onSubmit={handleSubmit}>
        {/* Image Upload and Preview */}
        <div className="form-group">
          <label htmlFor="image">Profile Image</label>
          <label htmlFor="image" className="custom-file-upload">
            Choose Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Profile Preview" />
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPage;