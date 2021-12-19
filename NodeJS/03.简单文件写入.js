let fs = require("fs");

fs.writeFile("test3.txt", "this is written by writeFileSync", function (err) {
    if (!err){
        console.log("write succeeded");
    }
});
