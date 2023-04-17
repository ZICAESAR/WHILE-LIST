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
const ask1 = prompt('DISCORD-ID> ');
const ask2 = prompt('HWID> ');
async function add() {
    if (ask1 == "") return console.log(`Invalid Syntax`);
    if (ask2 == "") return console.log(`Invalid Syntax`);
    if (ask1 == '') return console.log(`Invalid Syntax`);
    if (ask2 == '') return console.log(`Invalid Syntax`);
    db.on('error', console.error.bind( console,'\x1b[31mConnection Error...\x1b[1m'));
    db.once('open', () => {
        console.log(`\x1b[31mConnection Okay...\x1b[1m`);
    });
    const DATADASE = await dbi.findOne({ userid: ask1 });
    if(!DATADASE) return console.log(`NOT FOUND ${ask1}!!!`)
    DATADASE.hwid = ask2
    DATADASE.save();
    setTimeout(() => {
        console.log(`\x1b[31mADD-HWID-DATADASE-DONE!!!...\x1b[1m`);
    }, 2500);
    setTimeout(() => {
        process.exit(0);
    }, 5000);
}
add()