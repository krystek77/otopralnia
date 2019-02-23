import axios from 'axios';

const a = axios.create({
    baseURL:"https://pralma.firebaseio.com/"
})

export default a