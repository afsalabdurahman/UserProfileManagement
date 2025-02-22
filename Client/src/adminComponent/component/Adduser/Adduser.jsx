import React, { useState, useRef, useEffect } from 'react';
import '../EditUser/UserForm.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';
const Adduser = () => {
  let navigate=useNavigate()
  const [Euser, setEuser] = useState(); // To store the found user
  const userId = useSelector((state) => state.search.userId); // Get the userId from Redux store
  const allUsers = useSelector((state) => state.alluser);
  const [imagePreview, setImagePreview] = useState(null);
  const [userID, setUserID] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    image: null,
    userid:null

  });
useEffect(()=>{
  const foundUser = allUsers.flat().find((user) => user._id === userId);


  setImagePreview(foundUser?foundUser.image:null)
  setUserID(foundUser?foundUser._id:null)
  
setEuser(foundUser)

// setImagePreview(Euser?Euser.image:null)
},[userId, allUsers])
 
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEuser("");
   
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      
    }));
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      setFormData(prevState => ({
        ...prevState,
        image: file,
        userId:userID

     
      }));
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     const formDataToSend = new FormData();
  formDataToSend.append('firstName', formData.firstName);
  formDataToSend.append('lastName', formData.lastName);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('mobile', formData.mobile);
  formDataToSend.append('image', formData.image); 
  formDataToSend.append('userId', userId)
  console.log(formData,"formdata")
  console.log(formDataToSend,"senddd")
   
      axios.post('http://localhost:3000/admin/adduser',formDataToSend,{
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token.userToken}`,  // Ensure the content type is multipart
        },
      } ).then((resp)=>{
        navigate("/admin")
      }).catch((err)=>{
        console.log(err,"errrr")
      })
    console.log('Form submitted:', formData);
  };

  const removeImage = (e) => {
    e.stopPropagation(); // Prevent triggering handleImageClick
    setFormData(prevState => ({
      ...prevState,
      image: null
    }));
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  function change(e){
    console.log(Euser)
    setEuser("");
 

  }
  return (
    <div className="form-container">
      <input placeholder='sample'  value={Euser?Euser.FirstName:null} onChange={(e)=>change(e.target.value)} ></input>
      <form onSubmit={handleSubmit}>
        <div className="image-upload-container">
          <div 
            className={`image-preview ${!imagePreview ? 'clickable' : ''}`} 
            onClick={handleImageClick}
          >
            {imagePreview ? (
              <div className="preview-wrapper">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="preview-image"
                />
                <div className="image-overlay">
                  <span>Click to change image</span>
                </div>
                <button 
                  type="button" 
                  className="remove-image-btn"
                  onClick={removeImage}
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="upload-placeholder">
                <svg 
                  className="upload-icon" 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span>Click to upload image</span>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            className="image-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            
            value={Euser?Euser.FirstName:null} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={Euser?Euser.LastName:null} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={Euser?Euser.mobile:null} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={Euser?Euser.email:null} 
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Adduser;