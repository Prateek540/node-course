const https = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=b7e8f328535925552ac4ed7c315a9ca7&query=40,-75&units=f";

https.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
  request.on("error", (error) => {
    console.log("Error " + error);
  });
  request.end();
});
