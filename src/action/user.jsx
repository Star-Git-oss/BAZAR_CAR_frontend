import { BASE_URI } from "../utils/api";
import axios from "axios";

export const signup = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/user/signup`, data)
    .then(res => {
      // console.log(res.data);
      resolve("success");
    })
    .catch(err => {
      console.log(err.message);
      reject("exist");
    });
})

export const signin = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  console.log("data", data);
  axios.post(`${BASE_URI}/user/signin`, data, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  })
    .then(res => {
      console.log("success", res.data);
      resolve(res.data);
    })
    .catch(err => {
      console.log(err);
      reject("no");
    });
})

export const googleSignin = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  console.log("action --->>> access_token", data);
  axios.post(`${BASE_URI}/user/googleSignin`, {access_token: data})
    .then(res => {
      console.log("success", res.data);
      resolve(res.data);  
    })
    .catch(err => {
      // console.log(err);
      reject("no");
    });
})