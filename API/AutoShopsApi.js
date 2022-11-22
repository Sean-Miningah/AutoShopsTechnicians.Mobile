import axios from "axios";

const API_URL = "http://192.168.100.4:8000/api/"

const client = axios.create({
  baseURL: API_URL,
});

export {client}