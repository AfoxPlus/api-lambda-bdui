import { GlobalProperties } from "@utils/ApiProperties";
import { AxiosResponse } from "axios";
import { Restaurant, RestaurantResponse } from "@core/data/sources/network/models/RestaurantResponse";


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