const irsdk = require('node-irsdk-2021')
const iracing = irsdk.init({telemetryUpdateInterval: 5000})

iracing.on('Connected', function (evt) {
    console.log(evt)
})

iracing.on('Disconnected', function (evt) {
    console.log(evt)
})

iracing.on('TelemetryDescription', function (data) {
    console.log(data)
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