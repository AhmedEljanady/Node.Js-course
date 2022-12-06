const request = require("postman-request");
const url =
  "http://api.weatherstack.com/current?access_key=11da699b90cc7d1a34ec24714ab99c62&query=30.0355,31.223&units=m";

request({ url: url, json: true }, (error, response) => {
  const current = response.body.current;
  console.log(
    `${current.weather_descriptions[0]}. It's currently ${current.temperature} degrees out. and it's feels like ${current.feelslike} degrees out.`
  );
});
