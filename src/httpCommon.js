import axios from "axios";

export default axios.create({
    baseURL:"http://localhost/react-final/react-final/backend/",
    headers:{
        // "Content-type":"application/json"
    }
})