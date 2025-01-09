/**
 * Write a Node.js program that uses the Path module to manipulate file paths#
 */
const path = require('path');

const joinedPath = path.join('/users', 'sandeep', 'documents', 'file.txt');
console.log(`Joined Path: ${joinedPath}`);

const resolvedPath = path.resolve('users', 'sandeep', 'documents', 'file.txt');
console.log(`Resolved Path: ${resolvedPath}`);

const dirname = path.dirname('/users/sandeep/documents/file.txt');
console.log(`Directory Name: ${dirname}`);

const basename = path.basename('/users/sandeep/documents/file.txt');
console.log(`Base Name: ${basename}`);

const extname = path.extname('/users/sandeep/documents/file.txt');
console.log(`Extension Name: ${extname}`);
