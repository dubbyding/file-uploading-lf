const { randomUUID } = require('crypto');

/**
 * It takes a file name, and returns a new file name with a random UUID and the same file extension
 * @param fileName - The name of the file that you want to upload.
 * @returns A function that takes a fileName as an argument and returns a string.
 */
const fileNameGenerator = (fileName) => {
	let fileExtension = fileName.split('.')[fileName.split('.').length - 1];
	if (fileExtension == 'webp') fileExtension = 'png';
	return randomUUID() + '.' + fileExtension;
};

module.exports = fileNameGenerator;
