import api from "./api";
const generalApi = {
  getData: (url, data) =>
    api(url, {
      data: {
        ...data
      }
    })
};
export default generalApi;
