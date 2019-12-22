import axios from "axios";
const mainurl = "https://restcountries.eu/rest/v2";

const axiosInstane = axios.create({
  baseURL: `${mainurl}/`
});

axiosInstane.interceptors.request.use(config => {
  //   config.headers["custom"] = "custom header..";
  console.log("middleware...");
  return config;
});

export default axiosInstane;
