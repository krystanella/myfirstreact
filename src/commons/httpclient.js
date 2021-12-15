import axios from "axios";

export default axios.create({
    baseURL : 'https://fullstack-backend1.herokuapp.com/api/v1',
    headers:{
        'Content-Type':'application/json'
    }
})