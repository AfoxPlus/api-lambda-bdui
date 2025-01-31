import { Component, Content } from "@core/domain/entities/Component";
import { BDUIRepository } from "@core/domain/repositories/BDUIRepository";
import { RestaurantNetworkDataSource } from "@core/data/sources/network/RestaurantNetworkDataSource";
import { ProductNetworkDataSource } from "@core/data/sources/network/ProductNetworkDataSource";
import { EstablishmentComponentLocalDataSource } from "@core/data/sources/local/EstablishmentComponentLocalDataSource";
import { Product } from "@core/data/sources/network/models/ProductResponse";
import { Screen } from "@core/domain/entities/Screen";

export class BDUIDataRepository implements BDUIRepository {

    constructor(private restaurantDataSource: RestaurantNetworkDataSource,
        private productDataSource: ProductNetworkDataSource,
        private establishmentComponent: EstablishmentComponentLocalDataSource
    ) { }

    getEstablishmentDetail = async (code: string): Promise<Screen> => {

        const [establishment, products] = await Promise.all([
            this.restaurantDataSource.findRestaurant(code),
            this.productDataSource.getProducts(code)
        ]);

        const components: Component[] = []

        const topBarContent: Content = {
            establishmentUrlBanner: establishment.urlImageBanner,
            establishmentUrlLogo: establishment.urlImageLogo,
            establishmentName: establishment.name,
            establishmentPrimaryType: establishment.primaryType,
            establishmentRating: establishment.rating,
            establishmentUserRatingCount: establishment.userRatingCount,
            establishmentIsVerified: establishment.isVerified
        }

        const topBar = this.establishmentComponent.getTopBar(topBarContent)
        const sectionMenu = this.establishmentComponent.getSection("icon_dish_outline", "Menu")
        const sectionEstablishment = this.establishmentComponent.getSection("icon_about_info_outline", "Acerca del establecimiento")
        const productsCards = products?.map((item) => this.establishmentComponent.getProductCard(this.getProductContent(item)))
        const gridMenu = this.establishmentComponent.getGridMenu(productsCards)
        const buttonSeeMenu = this.establishmentComponent.getButtonOutlineMedium("Ver el menú completo", "see_more_menu")
        const expandableText = this.establishmentComponent.getExpandableText(establishment.description)
        const textTitleLocation = this.establishmentComponent.getText("¿Como llegar?")
        const sectionPhotos = this.establishmentComponent.getSection("icon_camera_image_outline", "Fotos")

        components.push(sectionMenu)
        components.push(gridMenu)
        components.push(buttonSeeMenu)
        components.push(sectionEstablishment)
        components.push(expandableText)
        components.push(textTitleLocation)
        components.push(sectionPhotos)

        return new Screen({ topBar: topBar, content: components })

    }

    private getProductContent(product: Product): Content {
        const content: Content =
        {
            productImageUrl: product.imageUrl,
            productName: product.name,
            productDescription: product.description,
            productCurrency: product.currency,
            productPrice: product.price
        }
        return content
    }

}