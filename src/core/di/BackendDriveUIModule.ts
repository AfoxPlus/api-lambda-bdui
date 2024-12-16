import { BDUIDataRepository } from "@core/data/repositories/BDUIDataRepository";
import { ProductNetworkDataSource } from "@core/data/sources/ProductNetworkDataSource";
import { RestaurantNetworkDataSource } from "@core/data/sources/RestaurantNetworkDataSource";

class BackendDriveUIModule {
    bduiRepostiory: BDUIDataRepository
    constructor() {
        const restaurantDataSource: RestaurantNetworkDataSource = new RestaurantNetworkDataSource()
        const productDataSource: ProductNetworkDataSource = new ProductNetworkDataSource()
        this.bduiRepostiory = new BDUIDataRepository(restaurantDataSource, productDataSource)
    }
}

export const BackendDriveUIDi = new BackendDriveUIModule()