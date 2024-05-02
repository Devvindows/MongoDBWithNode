const data = require('./Data/backfill.json');
const dal = require("./DAL/DBAccess.js");
const assert = require('assert');

async function init() {

    const result = await dal.insertRecords(data);
    const records = await dal.getAllRecords();

    //console.log(assert.equal(data.length, result.insertedCount));
    //console.log(result);

    console.log(records);

}

init();