import axios from 'axios';
const api = axios.create({
    method: 'POST',
    responseType: 'json',
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //   "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    // }
});
console.log('api', api);

const paytmApi = {
    getData: (url, data) =>
        api(url, {
            data: data,
        }),
};
export default paytmApi;
