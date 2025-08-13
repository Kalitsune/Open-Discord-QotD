// sqlite driver for the database
const sqlite = require('sqlite3');
const util = require("node:util")

const { errBadRequest } = require('../../errors');

let database = null;
let databaseRun = null;
let databaseAll = null;
let databaseGet = null;
module.exports = {
    async init() {
        //check if SQLITE_PATH is set
        if (process.env.SQLITE_PATH) {
            // load the database
            database = new sqlite.cached.Database(process.env.SQLITE_PATH);
        } else {
            // use in memory database
            console.warn('[WARNING] SQLITE_PATH not set, the database will be wiped on restart');
            database = new sqlite.cached.Database(':memory:');
        }

        // define the database functions do be async
        databaseRun = util.promisify(database.run.bind(database));
        databaseAll = util.promisify(database.all.bind(database));
        databaseGet = util.promisify(database.get.bind(database));

        // create the tables if they don't exist

        // create the replica channels table
        /*return databaseRun(`CREATE TABLE IF NOT EXISTS replica_channels (
            guild_id TEXT NOT NULL,
            source_channel_id TEXT NOT NULL,
            target_channel_id TEXT NOT NULL,
            target_language_code TEXT NOT NULL,
            PRIMARY KEY (guild_id, source_channel_id, target_channel_id, target_language_code)
        )`);*/
    },
}