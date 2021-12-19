let fs = require("fs");

fs.open("test2.txt", "w", function (err, fd) {
    if (!err) {
        fs.write(fd, "this is written by async", function (err) {
            if (!err) {
                // close file
                fs.close(fd, function (err) {
                    if (!err) {
                        console.log("close successfully");
                    } else {
                        console.log("error when closing file");
                    }
                });
            } else {
                console.log(err);
            }
        })
    } else {
        console.log(err);
    }
});
