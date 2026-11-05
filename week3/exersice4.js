const os = require("os");
const util = require("util");

console.log("Temporary directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("Operating system: " + os.platform());
console.log("OS release: " + os.release());

console.log("Uptime: " + os.uptime() / 3600 + " hours");

console.log("User information: " + util.inspect(os.userInfo()));

console.log("Total memory: " + os.totalmem() / 1000000000 + " GB");
console.log("Free memory: " + os.freemem() / 1000000000 + " GB");

console.log("CPU: " + util.inspect(os.cpus()));
console.log("Network: " + util.inspect(os.networkInterfaces()));

console.log("Program ended");