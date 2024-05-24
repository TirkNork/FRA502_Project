import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import axios from 'axios';
import './Check.css';

const Check = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [studentID, setStudentID] = useState('');
    const [message, setMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};

    const handleClose = () => {
        navigate('/login');
    };

    const handleVerifyAndContinue = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/check-info', { email, name, surname, studentID });
            setMessage(response.data.message);
            setShowNotification(true);

            if (response.data.valid) {
                setTimeout(() => {
                    setShowNotification(false);
                    navigate('/Changepass', { state: { email } });
                }, 1000);
            } else {
                setTimeout(() => {
                    setShowNotification(false);
                }, 1000);
            }
        } catch (error) {
            const errorMessage = error.response && error.response.data ? error.response.data.message : 'An error occurred';
            setMessage(errorMessage);
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 1000);
        }
    };

    return (
        <div className='Contain3'>
            <form onSubmit={handleVerifyAndContinue}>
                {showNotification && (
                    <div className="popup">
                        {message}
                    </div>
                )}
                <div className="white-box"></div>
                <span className="close-icon" onClick={handleClose}>&times;</span>
                <h1>Verify your account</h1>
                <div className="Please">
                    <p>Please enter your information below. </p>
                </div>

                <div className="Name">
                    <p>Please enter your Name </p>
                </div>

                <div className="SurName">
                    <p>Please enter your Surname </p>
                </div>

                <div className="ID">
                    <p>Please enter your StudentID </p>
                </div>

                <div className="input-boxname3">
                    <input 
                        type="text"
                        placeholder='Enter your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} // อัปเดต state ของ Name
                    />
                </div>

                <div className="input-boxsurname3">
                    <input 
                        type="text"
                        placeholder='Enter your Surname'
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)} // อัปเดต state ของ Surname
                    />
                </div>

                <div className="input-boxID3">
                    <input 
                        type="text"
                        placeholder='Enter your StudentID'
                        value={studentID}
                        onChange={(e) => setStudentID(e.target.value)} // อัปเดต state ของ StudentID
                    />
                </div>

                <div className="Requeast">
                    <Button type="submit"label="Request password reset" />
                </div>

            </form>
        </div>
    );
};

export default Check;
