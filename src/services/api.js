import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://api.spacexdata.com/v4/'
})