const axios = require('axios')
var mqtt = require('mqtt')

var options = {
  port: 1883,
  host: 'test.mosquitto.org',
  encoding: 'utf8',
};
var client = mqtt.connect('mqtt://test.mosquitto.org', options);
 
client.on('connect', function () {
  client.subscribe('DataOLife1', function (err) {
    if (!err) {
      console.log("Succefully subscribed to topic")
    }
  })
})

client.on('message', function (topic, message) {
  
  //var myjson=JSON.parse(message);
  console.log(JSON.parse(message));
  /*
  axios
  .post('http://localhost:3030/parameter/', {"Identifiant_Station":123,
  "Voltage_Lithium":1,
  "Voltage_Extern":1,
  "Temperature":1,
  "Humidity":1,
  "Wind_Speed":1,
  "Wind_Dir":1,
  "Pluvio":1,
  "CO2":1,
  "SO2":1,
  "Pyran":1,
  "PPM1":1,
  "PPM2_5":1,
  "PPM4":1,
  "PP10":2
  })
  .then(res => {
    console.log("posted on anas")
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.log("Error")
    console.error(error)
  })
  // post to anas */
  //console.log(myjson.State);
  console.log("\n");
})


/*var options = {
  port: 1883,
  host: '212.98.137.194',
  username: 'user',
  password: 'bonjour',
  encoding: 'utf8',
  reconnectPeriod: 1000,
};
var client = mqtt.connect('mqtt://212.98.137.194', options);
 
client.on('connect', function () {
  client.subscribe('#', function (err) {
    if (!err) {
      console.log("Hello World!")
    }
  })
})

client.on('message', function (topic, message) {
  console.log(message.toString())
  console.log("\n")
})
*/