const path = require('path');

/* Joining the current directory with the parent directory. */
let currentFolderPath = path.join(__dirname, './../..');

/* Joining the current folder path with the uploads folder. */
let fileUploadPath = path.join(currentFolderPath, 'uploads');

/* Joining the current folder path with the db.json file. */
let dbUploadPath = path.join(currentFolderPath, 'db.json');

module.exports = { currentFolderPath, fileUploadPath, dbUploadPath };
