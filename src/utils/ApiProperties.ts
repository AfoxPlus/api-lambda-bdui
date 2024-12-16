import axios, { AxiosInstance } from "axios";

class ApiProperties {
    restaurantAxiosInstance: AxiosInstance
    productAxiosInstance: AxiosInstance

    constructor() {
        const { API_RESTAURANTS, API_PRODUCTS } = process.env

        this.restaurantAxiosInstance = axios.create({
            baseURL: API_RESTAURANTS,
        });

        this.productAxiosInstance = axios.create({
            baseURL: API_PRODUCTS,
        });

    }
}

export const GlobalProperties = new ApiProperties()