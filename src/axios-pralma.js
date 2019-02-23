import axios from 'axios';

const instance = axios.create({
    baseURL:"https://pralma.firebaseio.com/"
})

export default instance