var ParseDashboard = require('parse-dashboard');
const CONFIG = require('./configs/config.json');

module.exports = new ParseDashboard({
    apps: [{
        serverURL: process.env.SERVER_URL || CONFIG.serverURL,
        appId: process.env.APP_ID || CONFIG.appId,
        masterKey: process.env.MASTER_KEY || CONFIG.masterKey,
        appName: CONFIG.appName
    }],
    users: [
        {user: "bhtz", pass: "1311"},
        {user: "tomadj", pass: "1311"}
    ]
}, true);   