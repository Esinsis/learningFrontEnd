let fs = require("fs");

let fd = fs.openSync("test.txt","w");
fs.writeFileSync(fd, "this is written by sync");
fs.closeSync(fd);
