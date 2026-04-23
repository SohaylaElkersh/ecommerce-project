import axios from "axios";

export const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});



// Purpose:
// Creates and configures a reusable Axios instance for all HTTP requests
// in the application.