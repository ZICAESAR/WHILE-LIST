const prompt = require('prompt-sync')();
const amount = prompt('Amount>');
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
const log_file = fs.createWriteStream(`./log/random-${time}.log`, {flags : 'w'});
const log_stdout = process.stdout;
function ararara(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function random() {
    let GGEZ = `${ararara(32)}:${ararara(32)}:${ararara(32)}:${ararara(4)}:${ararara(4)}:${ararara(2)}:${ararara(2)}`
    setTimeout(() => {
        console.log(`Superteenkai-TOOL-${GGEZ}`);
        console.log = function(d) { //
            log_file.write(util.format(d) + '\n');
            log_stdout.write(util.format(d) + '\n');
        };
    }, 1000);
}
for (var i = 1; i <= amount; i++) {
    random();
}