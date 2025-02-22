import React, { useState, useRef, useEffect } from 'react';
import './Otp.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router";
import axios from 'axios';

const Otp = () => {
    let navigate=useNavigate()
    // State to store the OTP digits
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [message, setMessage] = useState('');
    const [timer, setTimer] = useState(30);
    const inputRefs = useRef([]);

    // Initialize refs for each input
    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 6);
    }, []);

    // Timer countdown effect
    useEffect(() => {
        const countdown = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(countdown);
    }, [timer]);

    const handleChange = (index, value) => {
        // Only allow numbers
        if (!/^\d*$/.test(value)) return;

        // Update OTP array
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        
        if (!/^\d+$/.test(pastedData)) {
            setMessage('Please paste numbers only');
            return;
        }

        const digits = pastedData.split('').slice(0, 6);
        const newOtp = [...otp];
        
        digits.forEach((digit, index) => {
            newOtp[index] = digit;
            if (inputRefs.current[index]) {
                inputRefs.current[index].value = digit;
            }
        });

        setOtp(newOtp);
        if (inputRefs.current[digits.length - 1]) {
            inputRefs.current[digits.length - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpValue = otp.join('');
        if (otpValue.length === 6) {
            setMessage('Verifying OTP...');
            axios.post('http://localhost:3000/checkotp',{otpValue}).then((res)=>{
                if(res.data.url){
                    alert("ok")
                    navigate(res.data.url)
                }else{
                    setMessage(res.data.error)
                }
            })
           
            
            
            console.log('OTP Submitted:', otpValue);
        } else {
            setMessage('Please enter all digits');
        }
    };

    const handleResend = () => {
        setTimer(30);
        setMessage('OTP resent successfully!');
        // Add your resend OTP logic here
    };

    return (
        <div className="otp-container">
            <div className="otp-card">
                <h2>Enter Verification Code</h2>
                <p className="otp-description">
                    We have sent a verification code to your mobile number
                </p>

                <form onSubmit={handleSubmit} className="otp-form">
                    <div className="otp-input-group">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                                ref={(ref) => inputRefs.current[index] = ref}
                                className="otp-input"
                                required
                            />
                        ))}
                    </div>

                    {message && <div className="message">{message}</div>}

                    <button type="submit" className="verify-button">
                        Verify OTP
                    </button>

                    <div className="resend-section">
                        {timer > 0 ? (
                            <p>Resend OTP in {timer}s</p>
                        ) : (
                            <button 
                                type="button" 
                                onClick={handleResend}
                                className="resend-button"
                            >
                                Resend OTP
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Otp