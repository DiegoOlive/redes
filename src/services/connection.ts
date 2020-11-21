import axios from 'axios';

const Conection = axios.create({
    baseURL:'http://localhost:3333'
});

export default Conection;
