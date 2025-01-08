/**
 * Write a Node.js program that uses the OS module to retrieve information about the current operating
system#
 */

const os = require('os');

console.log('Operating System Information:');
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Total Memory: ${os.totalmem() / (1024 * 1024 * 1024)} GB`);
console.log(`Free Memory: ${os.freemem() / (1024 * 1024 * 1024)} GB`);
console.log(`Uptime: ${os.uptime()} seconds`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`Home Directory: ${os.homedir()}`);
console.log(`Temporary Directory: ${os.tmpdir()}`);
