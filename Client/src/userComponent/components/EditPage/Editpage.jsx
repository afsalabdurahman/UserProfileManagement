import React, { useState } from 'react';
import './EditPage.css'; // Import the CSS file

const EditPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    githubLink: '',
    webLink: '',
    linkedinLink: '',
    twitterLink: '',
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
    console.log('Form Data:', formData);
    // You can add your logic to save or update the data here
  };

  return (
    <div className="edit-page">
      <h1>Edit Profile</h1>
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

        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>

        {/* GitHub Link */}
        <div className="form-group">
          <label htmlFor="githubLink">GitHub Link</label>
          <input
            type="url"
            id="githubLink"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            placeholder="Enter your GitHub profile link"
          />
        </div>

        {/* Website Link */}
        <div className="form-group">
          <label htmlFor="webLink">Website Link</label>
          <input
            type="url"
            id="webLink"
            name="webLink"
            value={formData.webLink}
            onChange={handleChange}
            placeholder="Enter your website link"
          />
        </div>

        {/* LinkedIn Link */}
        <div className="form-group">
          <label htmlFor="linkedinLink">LinkedIn Link</label>
          <input
            type="url"
            id="linkedinLink"
            name="linkedinLink"
            value={formData.linkedinLink}
            onChange={handleChange}
            placeholder="Enter your LinkedIn profile link"
          />
        </div>

        {/* Twitter Link */}
        <div className="form-group">
          <label htmlFor="twitterLink">Twitter Link</label>
          <input
            type="url"
            id="twitterLink"
            name="twitterLink"
            value={formData.twitterLink}
            onChange={handleChange}
            placeholder="Enter your Twitter profile link"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPage;