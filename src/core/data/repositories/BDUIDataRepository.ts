import { Card, Component, Content, Grid, Icon } from "@core/domain/entities/Component";
import { BDUIRepository } from "@core/domain/repositories/BDUIRepository";
import { RestaurantNetworkDataSource } from "@core/data/sources/RestaurantNetworkDataSource";
import { ProductNetworkDataSource } from "../sources/ProductNetworkDataSource";
import { Product } from "../sources/models/ProductResponse";

export class BDUIDataRepository implements BDUIRepository {

    constructor(private restaurantDataSource: RestaurantNetworkDataSource,
        private productDataSource: ProductNetworkDataSource
    ) { }

    getEstablishmentDetail = async (code: string): Promise<Component[]> => {

        const [establishment, products] = await Promise.all([
            this.restaurantDataSource.findRestaurant(code),
            this.productDataSource.getProducts(code)
        ]);
        const components: Component[] = []
        const headerCardContent: Content = {
            establishmentUrlBanner: establishment.urlImageBanner,
            establishmentUrlLogo: establishment.urlImageLogo,
            establishmentName: establishment.name,
            establishmentPrimaryType: establishment.primaryType,
            establishmentRating: establishment.rating,
            establishmentUserRatingCount: establishment.userRatingCount,
            establishmentIsVerified: establishment.isVerified
        }
        const contentMenu: Content = { title: "Menu" }
        const menuIcon = new Icon({
            type: "ICON",
            iconToken: "icon_dish_outline",
            hintToken: "gray700",
            size: "size24"
        });

        const sectionMenu = new Component({
            type: "SECTION",
            spacingHorizontal: 'spacing16',
            spacingVertical: 'spacing08',
            backgroundToken: 'gray100',
            colorToken: 'gray700',
            typographyToken: 'header05Bold',
            content: contentMenu,
            children: [menuIcon]
        });

        const headerCard = new Component({
            type: "TOP_ESTABLISHMENT_DETAIL",
            spacingHorizontal: 'spacing00',
            spacingVertical: 'spacing00',
            backgroundToken: 'light01',
            colorToken: 'secondaryColor',
            typographyToken: 'header02Bold',
            content: headerCardContent
        });

        const productsCards = products?.map((item) => new Card({
            type: "CARD_PRODUCT",
            elevation: "spacing02",
            border: "spacing08",
            stroke: "spacing02",
            content: this.getProductContent(item)
        }))

        const gridMenu = new Grid({
            type: "ROW_CARD_MENU",
            spacingHorizontal: "spacing16",
            spacingVertical: "spacing16",
            spacingBetweenComponents: "spacing12",
            gridType: "ROW",
            gridSize: 1,
            backgroundToken: "light01",
            items: productsCards
        })

        components.push(headerCard)
        components.push(sectionMenu)
        components.push(gridMenu)

        return components
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