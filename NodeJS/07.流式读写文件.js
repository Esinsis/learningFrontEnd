let fs = require("fs");

let rs = fs.createReadStream("test4.txt");
let ws = fs.createWriteStream("test5.txt");

rs.on("data", function (data){
    ws.write(data);
});

rs.once("open", function () {
    console.log("rs is open");
});

rs.once("close", function () {
    console.log("rs is closed");
    ws.end();
});

ws.once("open", function () {
    console.log("ws is open");
});

ws.once("close", function () {
    console.log("ws is closed");
})
