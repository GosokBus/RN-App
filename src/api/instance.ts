import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://35.216.46.102:8080/',
  timeout: 1000,
  headers: {'Content-Type': 'Application/json'},
});
