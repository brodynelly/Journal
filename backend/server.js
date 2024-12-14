const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors()); 


// MongoDB Atlas connection URI
const uri = "mongodb+srv://admin:admin@atlascluster.ijqoupr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";

// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

// format for the mongo saved schema
const entrySchema = new mongoose.Schema({
    date: { type: Date, required: true },
    title: { type: String, required: true },
    entry: { type: String, required: true }
});
const Entry = mongoose.model('Entry', entrySchema);

// api endpoints to fetch the journal entries
app.get('/api/entries', async (req, res) => {
    try {
        const entries = await Entry.find();
        res.json(entries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// the api endpoints in order to create new entries
app.post('/api/entries', async (req, res) => {
    const { date, title, entry } = req.body;

    try {
        const newEntry = new Entry({ date, title, entry });
        const savedEntry = await newEntry.save();
        res.status(201).json(savedEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// start the server on local computer through 5000 port 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});