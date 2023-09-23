import axios from 'axios';

console.log(process.env.REACT_APP_BASE_URL);

const httRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

export const get = async (api, options = {} ) => {
    const response  = await httRequest.get(api, options);
    return response.data

}

export default httRequest