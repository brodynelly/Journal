
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // to communicate between the backend node.js and front end react.js
import "../styles.css"

const JournalEntries = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/entries') // localhost on port 5000 to reach the backend database
            .then(response => response.data)
            .then(data => setEntries(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="grid-container">
            {entries.map(entry => (
                <div className="past-entries-container" key={entry._id}>
                    <div className="entry"> 
                        <h2>{entry.title}</h2>

                        <h3>Date:</h3>
                        <p>{new Date(entry.date).toLocaleDateString()}</p>

                        <h3>Entry:</h3>
                        <p>{entry.entry}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JournalEntries;