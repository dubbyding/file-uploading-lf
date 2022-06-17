const express = require('express');
const path = require('path');

const fileUpload = require('../../handlers/fileHandlers/fileUpload');
const fileGet = require('../../handlers/fileHandlers/returnFile');
const checkFileExists = require('../../handlers/fileHandlers/checkFileExists');

const router = express.Router();

router.get('/data', async (req, res) => {
	try {
		let fileData = await fileGet();
		res.status(200).send(fileData);
	} catch (e) {
		res.status(404).send('No Data Currently Exists');
	}
});

router.get('/file/:fileName', async (req, res) => {
	let fileName = req.params.fileName;
	let currentHost = req.headers.host;

	let fileExists = await checkFileExists(fileName);

	if (fileExists) {
		let address = path
			.join(currentHost, 'photos', fileName)
			.replaceAll('\\', '/');

		let toReturn = {
			path: address,
		};

		res.status(200).send(toReturn);
	} else {
		res.status(404).send({
			error: 'No File Found',
		});
	}
});

router.post('/upload', async (req, res) => {
	let files = req.files;
	for (let i in files) {
		let buffer = files[i].buffer;
		let fileName = files[i].originalname;
		await fileUpload(fileName, buffer);
	}
	res.status(200).send({
		status: 'Completed',
	});
});

module.exports = router;
