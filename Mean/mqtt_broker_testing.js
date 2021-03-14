const axios = require('axios')
var mqtt = require('mqtt')

var options = {
  port: 1883,
  host: 'test.mosquitto.org',
  encoding: 'utf8',
};
var client = mqtt.connect('mqtt://test.mosquitto.org', options);
 
client.on('connect', function () {
  client.subscribe('DataOlife', function (err) {
    if (!err) {
      console.log("Succefully subscribed to topic")
    }
  })
})

client.on('message', function (topic, message) {
  
  var myjson=JSON.parse(message);
  axios
  .post('http://192.168.0.104:3000/dishes', myjson)
  .then(res => {
    console.log("posted on anas")
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.log("Error")
    console.error(error)
  })
  // post to anas 
  console.log(myjson.State);
  console.log("\n")
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