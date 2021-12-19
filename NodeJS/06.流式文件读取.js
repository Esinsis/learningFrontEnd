let fs = require("fs");

let rs = fs.createReadStream("test4.txt");

rs.once("open", function (){
    console.log(" file is open~~ ");
});

rs.once("close", function (){
    console.log("rs is closed");
})

rs.on("data", function (data) {
    console.log(data.length);
})
