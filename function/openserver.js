const mongoose = require('mongoose');
const express = require('express');
const config = require("../mongodb.db.config");
const db = mongoose.connection;
mongoose.connect(config.clusterid);
const schema = new mongoose.Schema({key: {type: String,required: false},userid: {type: String,required: false},hwid: {type: String,required: false},});
var dbi = mongoose.model(config.name,schema);
const fs = require('fs');
const util = require('util');
let date_time = new Date();
let date = ("0" + date_time.getDate()).slice(-2);
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
let year = date_time.getFullYear();
let hours = date_time.getHours();
let minutes = date_time.getMinutes();
let seconds = date_time.getSeconds();
let time = year + "-" + month + "-" + date + "-" + hours + "-" + minutes + "-" + seconds
const log_file = fs.createWriteStream(`./log/openserver-${time}.log`, {flags : 'w'});
const log_stdout = process.stdout;
console.log = function(d) { //
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};
var app = express();
app.listen(3000);
app.listen(8080);
app.listen(80);
db.on('error', console.error.bind(console,'\x1b[31mConnection Error.\x1b[1m'));
db.once('open', () => { console.log(`\x1b[31mDone.\x1b[1m`);backend = true;});
setTimeout(() => {
    console.log(`\n[ ACTION  POSITION  IP ]`); 
}, 2500);

app.get('/ckey/:key', function(req, res) {
    async function key() {
        const ckey = await dbi.findOne({ key: req.params.key });
        const data_invalid = `[ Action - /ckey - ${req.ip} ] - Invalid Key ${req.params.key}`;
        const data_correct = `[ Action - /ckey - ${req.ip} ] - Send Key ${req.params.key}`;
        if (!ckey) { 
            res.status(200).send(`Invalid Key`); 
            console.log(`\x1b[31m${data_invalid}\x1b[1m`); 
            return
        }
        res.status(200).send(`${req.params.key}`); 
        console.log(`\x1b[32m${data_correct}\x1b[1m`); 
        return
    }
    setTimeout(() => {
        key();
    }, 1000);
});
app.get('/cdis/:id', function(req, res) {
    async function id() {
        const discordid = await dbi.findOne({ userid: req.params.id });
        const data_invalid = `[ Action - /cdis - ${req.ip} ] - Invalid Discord ID ${req.params.id}`;
        const data_correct = `[ Action - /cdis - ${req.ip} ] - Send Discord ID ${req.params.id}`;
        if (!discordid) { 
            res.status(200).send(`Invalid Discord Id`); 
            console.log(`\x1b[31m${data_invalid}\x1b[1m`);
            return
        }
        res.status(200).send(`${req.params.id}`); 
        console.log(`\x1b[32m${data_correct}\x1b[1m`); return
    }
    setTimeout(() => {
        id();
    }, 1000);
});
async function LOLFUCKER1(res,ahwid,id,data1,data2,data3) {
    const db = await dbi.findOne({ userid: id, hwid: ahwid });
    if (!db) { 
        res.status(200).send(`Invalid HWID`); 
        console.log(`\x1b[31m${data1}\x1b[1m`);
        return
    }
    res.status(200).send(`${db.hwid}`); 
    console.log(`\x1b[32m${data2}\x1b[1m`); 
    return
}
async function LOLFUCKER(res,id,data1,data2) {
    const db = await dbi.findOne({ userid: id });
    const db_kak = db.hwid
    if (db_kak  == null) {
        res.status(200).send(`Unknown HWID`); 
        console.log(`\x1b[31m${data1}\x1b[1m`);
        return
    }
    if (db_kak  == "") {
        res.status(200).send(`Unknown HWID`); 
        console.log(`\x1b[31m${data1}\x1b[1m`);
        return
    }
    res.status(200).send(`${db.hwid}`); 
    console.log(`\x1b[32m${data2} ${db.hwid}\x1b[1m`); 
    return
}
app.get('/chwid1/', function(req, res) {
    const data_invalid = `[ Action - /chwid1 - ${req.ip} ] - Invalid Hardware ID ${req.query.hid}`;
    const data_correct = `[ Action - /chwid1 - ${req.ip} ] - Send Hardware ID ${req.query.hid}`;
    const data_unknown = `[ Action - /chwid1 - ${req.ip} ] - Unknown Hardware ID`;
    setTimeout(() => {
        LOLFUCKER1(res,req.query.hid,req.query.id,data_invalid,data_correct,data_unknown);
    }, 1000);
});
app.get('/chwid2/', function(req, res) {
    const data_correct = `[ Action - /chwid2 - ${req.ip} ] - Send Hardware ID`;
    const data_unknown = `[ Action - /chwid2 - ${req.ip} ] - Unknown Hardware ID`;
    setTimeout(() => {
        LOLFUCKER(res,req.query.id,data_unknown,data_correct);
    }, 1000);
});
async function LOL(res,hwid,id,data1,data2) {
    const db = await dbi.findOne({ userid: id });
    if (!db) { 
        res.status(200).send(`Invalid Id`); 
        console.log(`\x1b[31m${data1}\x1b[1m`);
        return
    }
    db.hwid = hwid
    db.save();
    res.status(200).send(`${db.hwid}`); 
    console.log(`\x1b[32m${data2}\x1b[1m`);
    return
}
app.get('/req/', function(req, res) { 
    let data_invalid = `[ Action - /reqhwid - ${req.ip} ] - Invalid ID ${req.query.id}`;
    let data_correct = `[ Action - /reqhwid - ${req.ip} ] - Get Hardware ID ${req.query.hid}`;
    setTimeout(() => {
        LOL(res,req.query.hid,req.query.id,data_invalid,data_correct);
    }, 1000);
});