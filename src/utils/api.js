import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1/products"




export const fetchDataFromApi = async (url) => {
    try {
        const data = await axios.get(BASE_URL + url);
        console.log(BASE_URL + url);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};