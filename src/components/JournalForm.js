import React, { useState } from 'react';
import axios from 'axios';

const JournalForm = ({ updateEntries }) => {
    const [formData, setFormData] = useState({
        date: '',
        title: '',
        entry: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/entries', formData);
            const data = response.data;
            console.log(data); // Log the created entry

            setFormData({ date: '', title: '', entry: '' });

            if (updateEntries) {
                updateEntries();
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (
        <div className="form-container">
            <form className="journal-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content:</label>
                <textarea id="content" name="entry" rows="5" value={formData.entry} onChange={(e) => setFormData({ ...formData, entry: e.target.value })}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
            </div>
            <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default JournalForm;
