const fs = require('fs/promises');
const path = require('path');

const { dbUploadPath } = require('./const');

/**
 * It reads a JSON file, parses it, adds a new key/value pair to it, and then writes it back to the
 * file
 * @param fileName - The name of the file that was uploaded.
 * @returns The return value is a promise.
 */
const dbUpdate = async (fileName) => {
	let data, nextIndex;

	try {
		let file = await fs.readFile(dbUploadPath, { encoding: 'utf8' });

		data = JSON.parse(file);
		nextIndex = parseInt(Object.keys(data)[Object.keys(data).length - 1]) + 1;

		data[nextIndex] = fileName;
	} catch (e) {
		data = { 0: fileName };
	}
	data = JSON.stringify(data);
	return fs.writeFile(dbUploadPath, data);
};

module.exports = dbUpdate;
