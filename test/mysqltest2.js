const util = require('util'),
    Promise = require('bluebird');

const Pool = require('../pool');

const sql1 = "update User set lastlogin=now() where uid='user1'";

const pool = new Pool();

Promise.using(pool.connect(), conn => {
    conn.queryAsync(sql1)
        .then(console.log)
        .catch(err => {
            util.log('err>>', err);
        });

    pool.end();
});