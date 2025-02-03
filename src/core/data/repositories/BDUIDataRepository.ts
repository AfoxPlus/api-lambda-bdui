import { Component, Content } from "@core/domain/entities/Component";
import { BDUIRepository } from "@core/domain/repositories/BDUIRepository";
import { RestaurantNetworkDataSource } from "@core/data/sources/network/RestaurantNetworkDataSource";
import { ProductNetworkDataSource } from "@core/data/sources/network/ProductNetworkDataSource";
import { EstablishmentComponentLocalDataSource } from "@core/data/sources/local/EstablishmentComponentLocalDataSource";
import { Product } from "@core/data/sources/network/models/ProductResponse";
import { Screen } from "@core/domain/entities/Screen";
import { Photo } from "../sources/network/models/RestaurantResponse";

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
        const photosCards = establishment.photos?.map((item) => this.establishmentComponent.getPhotoCard(this.getPhotoContent(item)))
        const gridPhotos = this.establishmentComponent.getGridPhotos(photosCards)
        const buttonSeePhotos = this.establishmentComponent.getButtonOutlineMedium("Ver todas las fotos", "see_more_photos")

        const message = "Hello! I am interested in your service.";
        const urlPhone = `https://wa.me/${establishment.phone}?text=${encodeURIComponent(message)}`;

        const getLocationInfo = this.establishmentComponent.getRowIconInfo("icon_location_outline", establishment.address, establishment.googleMapsUri)
        const getPhone = this.establishmentComponent.getRowIconInfo("icon_whatsapp_outline", establishment.phone, urlPhone)


        components.push(sectionMenu)
        components.push(gridMenu)
        components.push(buttonSeeMenu)
        components.push(sectionEstablishment)
        components.push(expandableText)
        components.push(textTitleLocation)
        components.push(getLocationInfo)
        components.push(getPhone)
        components.push(sectionPhotos)
        components.push(gridPhotos)
        components.push(buttonSeePhotos)

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

    private getPhotoContent(photo: Photo): Content {
        const content: Content =
        {
            name: photo.name,
            heightPx: photo.heightPx,
            widthPx: photo.widthPx
        }
        return content
    }

}