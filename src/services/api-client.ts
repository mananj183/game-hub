import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '42ba7e06952b46fa92e36a81fe804ca1'
    }
})