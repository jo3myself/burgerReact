import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger-5cc67.firebaseio.com/'
});

export default instance;