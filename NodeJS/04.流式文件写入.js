let fs = require("fs");

let ws = fs.createWriteStream("test4.txt");

ws.once("open", function () {
    console.log("stream is open");
})

ws.write("锄禾日当午\n");
ws.write("汗滴禾下土\n");
ws.write("谁知盘中餐\n");
ws.write("粒粒皆辛苦\n");

ws.close();
