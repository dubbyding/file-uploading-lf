const express = require('express');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const upload = multer();

const fileSide = require('./middleware/fileUpload/file');

dotenv.config();
const app = express();

app.use(upload.array('photo'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* A middleware that is used to upload the file. */
app.use('/fileHandle', fileSide);

/* This is a middleware that is used to serve the static files. */
app.use('/photos', express.static(path.join(__dirname, 'uploads')));

/* This is a function that is used to start the server. */
app.listen(process.env.PORT || 3000, (err) => {
	if (err) {
		console.log('Error Running the server');
	} else {
		console.log('Port started at 3000 port');
	}
});
