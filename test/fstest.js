const fs = require('fs');
const util = require('util');

fs.readFile(__dirname + '/test.json', 'utf-8', (err, data) => {
        if (err) return console.error(err);

        util.log("data>>", data);
});

util.log("------------------------");

const msgFile = __dirname + '/message.txt';
fs.writeFileSync(msgFile, 'Hello Node.js!!!!!', (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
})

let data2 = fs.readFileSync(msgFile, 'utf-8');
util.log("data2>>", data2);

console.log("===================================");