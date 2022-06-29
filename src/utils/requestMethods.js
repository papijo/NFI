import axios from "axios";

// const BASE_URL = "https://nfi-agency.herokuapp.com/api/";
const BASE_URL = "http://localhost:3001/api/";

let TOKEN = "";

if (localStorage.getItem("persist:root")) {
  TOKEN = JSON?.parse(JSON?.parse(localStorage.getItem("persist:root"))?.user)
    ?.currentUser?.accessToken;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
