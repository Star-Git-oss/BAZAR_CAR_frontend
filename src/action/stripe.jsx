import { BASE_URI } from "../utils/api";
import axios from "axios";

export const createCustomer = (data) => (dispatch) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URI}/stripe/create-customer`, data)
      .then((res) => {
        // console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        reject("exist");
      });
  });

  export const createSubscription = (data) => (dispatch) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URI}/stripe/create-subscription`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        reject("exist");
      });
  });

  export const checkSubscription = (data) => (dispatch) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URI}/stripe/check-subscription`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        reject("exist");
      });
  });