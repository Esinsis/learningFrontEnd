let fs = require("fs");

let rs = fs.createReadStream("test4.txt");
let ws = fs.createWriteStream("test6.txt");

rs.pipe(ws);
