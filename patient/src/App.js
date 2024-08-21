import React, { useEffect, useState } from 'react';
import Profile from './Profile';

function App() {
    const [patientData, setPatientData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/patient/60c72b2f4f1c4b3df8f1e35c') // Use your MongoDB document ID here
            .then(res => res.json())
            .then(data => setPatientData(data))
            .catch(err => console.log(err));
    }, []);

    if (!patientData) return <div>Loading...</div>;

    return (
        <div className="App">
            <Profile {...patientData} />
        </div>
    );
}

export default App;