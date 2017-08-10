var ParseServer = require('parse-server').ParseServer;
const CONFIG = require('./configs/config.json');

module.exports = new ParseServer({
    databaseURI: process.env.DATABASE_URI || process.env.MONGODB_URI || CONFIG.databaseUri,
    cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/index.js',
    appId: process.env.APP_ID || CONFIG.appId,
    masterKey: process.env.MASTER_KEY || CONFIG.masterKey,
    serverURL: process.env.SERVER_URL || CONFIG.serverURL,
    liveQuery: {
        classNames: [] // List of classes to support for query subscriptions ex: ["Post", "Comments"]
    }
});