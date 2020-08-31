import axios from "axios";
const api = axios("ddd");
console.log("api", api);

const paytmApi = {
  getData: (url, data) =>
    api(url, {
      data: data,
    }),
};
export default paytmApi;
