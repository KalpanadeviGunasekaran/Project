import React from 'react';
import './Profile.css';

const Profile = ({ name, gender, age, patientID, phone, email, affectedSide, condition, speciality, medicalHistory, goalReached }) => {
    return (
        <div className="profile-container">
            <div className="header">
                <button className="back-btn">&larr;</button>
                <h1>View Patient</h1>
            </div>

            <div className="profile-info">
                <div className="profile-details">
                    <div className="profile-header">
                        <img src="profile-pic.png" alt="Profile" className="profile-pic" />
                        <div className="profile-basic-info">
                            <h2>{name}, {gender}/{age}</h2>
                            <p>Patient ID: {patientID}</p>
                        </div>
                    </div>

                    <div className="goal-container">
                        <ProgressBar goalReached={goalReached} />
                    </div>

                    <div className="contact-info">
                        <p><strong>Phone no.</strong>: {phone}</p>
                        <p><strong>Mail ID</strong>: {email}</p>
                        <p><strong>Affected side</strong>: {affectedSide}</p>
                        <p><strong>Condition</strong>: {condition}</p>
                        <p><strong>Speciality</strong>: {speciality}</p>
                    </div>

                    <MedicalHistory medicalHistory={medicalHistory} />
                </div>
            </div>
        </div>
    );
};

const ProgressBar = ({ goalReached }) => {
    const rotation = (goalReached / 100) * 180;
    return (
        <div className="progress-bar">
            <div className="semi-circle" style={{ transform: `rotate(${rotation}deg)` }}></div>
            <div className="goal-text">
                <h3>{goalReached}%</h3>
                <p>Goal reached</p>
            </div>
        </div>
    );
};

const MedicalHistory = ({ medicalHistory }) => {
    return (
        <div className="medical-history">
            <h3>Medical history</h3>
            <p>{medicalHistory}</p>
        </div>
    );
};

export default Profile;
