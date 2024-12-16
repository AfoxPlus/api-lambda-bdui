import { GlobalProperties } from "@utils/ApiProperties";
import { Restaurant, RestaurantResponse } from "./models/RestaurantResponse";
import { AxiosResponse } from "axios";

export class RestaurantNetworkDataSource {

    findRestaurant = async (code: string): Promise<Restaurant> => {
        const client = GlobalProperties.restaurantAxiosInstance
        try {
            const response: AxiosResponse = await client.get('/restaurant/' + code)
            const restaurantResponse = response.data as RestaurantResponse
            return restaurantResponse.payload
        } catch (err) {
            console.log(err)
            return null
        }
    }
}