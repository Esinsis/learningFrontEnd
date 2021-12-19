let fs = require("fs");

fs.readFile("test4.txt", function (err, data) {
    if (!err){
        console.log(data.toString());
    }
})
