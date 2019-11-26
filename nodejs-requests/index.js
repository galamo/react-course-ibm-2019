const axios = require("axios");

async function request() {
  const result = await axios.get("https://restcountries.eu/rest/v2/all");

  console.log("this resolved");
}

async function request2() {
  const result = await axios.get("https://restcountries.eu/rest/v2/all");
  console.log("this resolved 2");
}

request();
request2();
console.log("end of scripts");
