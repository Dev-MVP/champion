import axios from "axios";
import { API_URL } from "./../config/constant";
export const getData = {
     axios(API_URL);
}
// axios(API_URL).then((res) => {
//   console.log(res);
// });
// const api = "";
//   baseURL: API_URL,
//   method: "GET",
//   responseType: "json",
// });
// // api.interceptors.request.use(function (config) {
// //   const json = {
// //     indata: {
// //       merchantcode: MERCHANT_CODE,
// //       mdevice: loc, //'PC^OS Version^64.0^127.0.0.1^25.109344,55.196632^1920^2550^ASWERFCDE1234321^',
// //     },
// //   };
// //   config.data = { indata: { ...json.indata, ...config.data } };
// //   // config.data = { ...config.data, ...json };
// //   return config;
// // });
// api.interceptors.response.use(function (response) {
//   return response;
// });
export default api;
