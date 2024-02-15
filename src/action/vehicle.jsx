import { BASE_URI } from "../utils/api";
import axios from "axios";

export const vehicleUpload = (formData) =>  (dispatch) => new Promise((resolve, reject) => {
  console.log("action ---> data", formData);
  axios.post(`${BASE_URI}/vehicle/upload`, formData)
    .then(res => {
      console.log(res.data);
      resolve("success");
    })
    .catch(err => {
      reject("exist");
    });
})