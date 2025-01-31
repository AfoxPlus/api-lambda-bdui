import { BDUIDataRepository } from "@core/data/repositories/BDUIDataRepository";
import { EstablishmentComponentLocalDataSource } from "@core/data/sources/local/EstablishmentComponentLocalDataSource";
import { ProductNetworkDataSource } from "@core/data/sources/network/ProductNetworkDataSource";
import { RestaurantNetworkDataSource } from "@core/data/sources/network/RestaurantNetworkDataSource";


class BackendDriveUIModule {
    bduiRepostiory: BDUIDataRepository
    constructor() {
        const restaurantDataSource: RestaurantNetworkDataSource = new RestaurantNetworkDataSource()
        const productDataSource: ProductNetworkDataSource = new ProductNetworkDataSource()
        const establishmentComponentLocalDataSource: EstablishmentComponentLocalDataSource = new EstablishmentComponentLocalDataSource()
        this.bduiRepostiory = new BDUIDataRepository(restaurantDataSource, productDataSource, establishmentComponentLocalDataSource)
    }
}

export const BackendDriveUIDi = new BackendDriveUIModule()