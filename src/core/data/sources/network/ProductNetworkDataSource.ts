import { GlobalProperties } from "@utils/ApiProperties"
import { AxiosResponse } from "axios"
import { Product, ProductResponse } from "@core/data/sources/network/models/ProductResponse"

export class ProductNetworkDataSource {

    getProducts = async (code: string): Promise<Product[]> => {
        const client = GlobalProperties.productAxiosInstance
        try {
            const response: AxiosResponse = await client.get('/product/sale_offer/' + code)
            const productResponse = response.data as ProductResponse
            return productResponse.payload
        } catch (err) {
            return null
        }
    }
}