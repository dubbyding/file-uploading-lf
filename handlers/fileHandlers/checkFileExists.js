const { promises: fs } = require('fs');
const path = require('path');

const { fileUploadPath } = require('./const');

/**
 * It checks if a file exists in a given directory
 * @param fileName - The name of the file to check for.
 * @returns A promise that resolves to a boolean.
 */
const fileExists = async (fileName) => {
	let file = path.join(fileUploadPath, fileName);
	try {
		await fs.access(file);
		return true;
	} catch {
		return false;
	}
};

module.exports = fileExists;
