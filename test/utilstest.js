const util = require('util');
const utils = require('../utils');

let map = utils.makeMap('name', 'kim');
util.log("MAP >>>> ", map.get('name'));
let str = "NodeJS";

let enc = utils.encrypt(str);
util.log('enc = ', enc);
let dec = utils.decrypt(enc);
util.log('dec = ', dec);
let shaEnc = utils.encryptSha2(enc);
util.log('shaEnc = ', shaEnc);
return;

let url = "https://naver.com";

utils.ogsinfo(url, (err, ret) => {
    util.log(err, ret);
})