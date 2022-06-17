const { promises: fs } = require('fs');
const path = require('path');

const fileNameGenerator = require('./randomFileNameGenerate');
const dbUpdate = require('./updateFile');
const { fileUploadPath } = require('./const');

/**
 * It takes a file name and a file buffer, generates a new file name, updates the database with the new
 * file name, and then writes the file to the file system.
 *
 * The function is asynchronous, so it returns a promise.
 *
 * The function is called like this:
 *
 * fileUpload(fileName, fileBuffer)
 *   .then(() => {
 *     // do something
 *   })
 *   .catch(err => {
 *     // do something
 *   });
 * @param fileName - The name of the file that the user uploaded.
 * @param fileBuffer - Uint8Array
 * @returns A promise.
 */
const fileUpload = async (fileName, fileBuffer) => {
	let newFileName = fileNameGenerator(fileName);

	let filePath = path.join(fileUploadPath, newFileName);

	await dbUpdate(newFileName);

	return fs.writeFile(filePath, Buffer.from(new Uint8Array(fileBuffer)));
};

module.exports = fileUpload;
