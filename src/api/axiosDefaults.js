import axios from "axios";

axios.defaults.baseURL = 'https://project-5-ci-db59797f355e.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();