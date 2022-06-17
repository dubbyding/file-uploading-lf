const { promises: fs } = require('fs');
const path = require('path');

const { dbUploadPath } = require('./const');

/**
 * It returns a promise that resolves to the contents of the file at the path specified by the constant
 * dbUploadPath.
 * @returns A promise.
 */
const getDbData = () => {
	return fs.readFile(dbUploadPath, { encoding: 'utf-8' });
};

module.exports = getDbData;
