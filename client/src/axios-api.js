import axios from 'axios';

let url;
let authToken = localStorage.getItem('myJwt');

if (process.env.NODE_ENV === 'production') {
    url = process.env.REACT_APP_API_BASE_URL;
} else {
    url = process.env.REACT_APP_API_BASE_LOCAL;
}

const instance = axios.create({
    baseURL: url
});

if (authToken) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
} else {
    instance.defaults.headers.common['Authorization'] = null;
}

export default instance;