import axios from "axios";

export default axios.create({
    baseURL:"http://localhost/test-final/react-final/backend/",
    headers:{
        // "Content-type":"application/json"
    }
})