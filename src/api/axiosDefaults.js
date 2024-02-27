import axios from "axios";

axios.defaults.baseURL = 'https://react-5th-project-ci-35c83aca9818.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();