const irsdk = require('node-irsdk-2023')
const iracing = irsdk.init({
    telemetryUpdateInterval: 20000,
    sessionInfoUpdateInterval: 10000
})

iracing.on('Connected', function () {
    console.log('iRacing telemetry connected')
})

iracing.on('Disconnected', function () {
    console.log('iRacing telemetry disconnected')
})

iracing.on('TelemetryDescription', function (evt) {
    console.log(evt)
})

iracing.on('Telemetry', function (evt) {
    console.log(evt)
})

iracing.on('SessionInfo', function (evt) {
    console.log(evt)
})

iracing.on('update', function (evt) {
    console.log(evt)
})