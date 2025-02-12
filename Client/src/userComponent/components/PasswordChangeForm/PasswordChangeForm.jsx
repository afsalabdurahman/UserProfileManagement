import React, { useState } from 'react';
import './PasswordChangeForm.css';

const PasswordChangeForm = () => {
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (passwords.newPassword !== passwords.confirmPassword) {
            setError('New passwords do not match!');
            return;
        }

        // Add your password change logic here
        console.log('Passwords:', passwords);
    };

    return (
        <div className="password-container">
            <h2 style={{textAlign:"center"}}>Change Password</h2>
            
            <form onSubmit={handleSubmit} className="password-form">
                <div className="form-group">
                    <label>Current Password:</label>
                    <input 
                        type="password"
                        name="currentPassword"
                        value={passwords.currentPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>New Password:</label>
                    <input 
                        type="password"
                        name="newPassword"
                        value={passwords.newPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Confirm New Password:</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                        value={passwords.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="submit-button">
                    Change Password
                </button>
            </form>
        </div>
    );
};

export default PasswordChangeForm;