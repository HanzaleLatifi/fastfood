import axios from 'axios';
axios.defaults.baseURL="http://localhost:4000" ;

const http={
    post:axios.post ,
    get:axios.get ,
    delete:axios.delete ,
    put:axios.put
}
export default http;