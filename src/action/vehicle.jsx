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

export const vehicleOpen = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  console.log("action ---> FeaturedCarCarousel Axios");
  axios.post(`${BASE_URI}/vehicle/open`, data)
    .then(res => {
      console.log(res.data);
      resolve(res.data);
    })
    .catch(err => {
      reject("exist");
    });
})

export const vehicleGroupOpen = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/vehicle/groupOpen`, data)
    .then(res => {
      console.log("vehicle/groupOpen --->>> res.data", res.data);
      resolve(res.data);
    })
    .catch(err => {
      reject("exist");
    });
})