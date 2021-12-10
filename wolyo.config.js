const keep_alive = require('./keep_alive.js')
const DatabaseName = "thewolyoxd"

module.exports = {
    apps: [{
            name: `${DatabaseName}-invite`,
            script: "./Canzade-invite-main/can.js",
            watch: true
        },
