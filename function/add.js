const mongoose = require('mongoose');
const prompt = require('prompt-sync')();
const config = require("../mongodb.db.config");
const db = mongoose.connection;
mongoose.connect(config.clusterid);
const schema = new mongoose.Schema({
    key: {type: String,required: false},
    userid: {type: String,required: false},
    hwid: {type: String,required: false},
});
var dbi = mongoose.model(config.name,schema);
const ask1 = prompt('KEY> ');
const ask2 = prompt('DISCORD-ID> ');
async function add() {
    if (ask1 == "") return console.log(`Invalid Syntax`);
    if (ask2 == "") return console.log(`Invalid Syntax`);
    if (ask1 == '') return console.log(`Invalid Syntax`);
    if (ask2 == '') return console.log(`Invalid Syntax`);
    db.on('error', console.error.bind( console,'\x1b[31mError...\x1b[1m'));
    db.once('open', () => {
        console.log(`\x1b[31m...\x1b[1m`);
    });
    new dbi({
        key: ask1,
        userid: ask2,
        hwid: null,
    }).save();
    setTimeout(() => {
        console.log(`\x1b[31mADD-DATADASE-DONE!!!...\x1b[1m`);
    }, 2500);
    setTimeout(() => {
        process.exit(0);
    }, 5000);
}
add()