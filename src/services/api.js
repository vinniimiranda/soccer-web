import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://www.thesportsdb.com/api/v1/json/1/'
})