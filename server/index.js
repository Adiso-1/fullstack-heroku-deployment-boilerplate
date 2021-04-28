const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const publicDirectory = path.join(__dirname, '../client/build');

const app = express();

//! app.use(cors()) MUST be BEFORE using routers
app.use(express.json());
app.use(express.static(publicDirectory));
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

mongoose.connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
