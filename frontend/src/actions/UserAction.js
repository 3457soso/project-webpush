import axios from 'axios';
import config from './../config.js';

export const GET_PROFILE = "GET_PROFILE";

const ROOT_URL = `${config.SERVER_HOST}:${config.SERVER_PORT}/api`;

export function getProfile(index) {
  let token = '';
  if (sessionStorage.getItem("token")) {
    token = JSON.parse(sessionStorage.getItem("token")).accessToken;
  }

  const request = axios.get(`${ROOT_URL}/user/${index}`,
    { headers: {"token": token}});

  return {
    type: GET_PROFILE,
    payload: request
  }
}