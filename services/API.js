import axios from "axios";
export default (url = "http://seller.fvsudteb.uz/mbapp") => {
  return axios.create({
    baseURL: url,
  });
};