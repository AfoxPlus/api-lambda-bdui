import { Button } from "@core/domain/entities/ButtonComponent";
import { Card } from "@core/domain/entities/CardComponent";
import { Component, Content } from "@core/domain/entities/Component";
import { Grid } from "@core/domain/entities/GridComponent";
import { Icon } from "@core/domain/entities/IconComponent";
import { Text } from "@core/domain/entities/TextComponent";

export class EstablishmentComponentLocalDataSource {
    getIcon(iconToken: string): Icon {
        return new Icon({
            name: "ICON",
            type: "ICON",
            iconToken: iconToken,
            hintToken: "gray700",
            size: "size24"
        });
    }

    getSection(iconToken: string, title: string): Component {
        const section = new Component({
            name: "SECTION",
            type: "CARD",
            spacingHorizontal: 'spacing16',
            spacingVertical: 'spacing08',
            backgroundToken: 'gray100',
            colorToken: 'gray700',
            typographyToken: 'header05Bold',
            content: { title: title },
            children: [this.getIcon(iconToken)]
        });
        return section;
    }

    getTopBar(content: Content): Component {
        return new Component({
            name: "TOP_ESTABLISHMENT_DETAIL",
            type: "CARD",
            spacingHorizontal: 'spacing00',
            spacingVertical: 'spacing00',
            backgroundToken: 'light01',
            colorToken: 'secondaryColor',
            typographyToken: 'header02Bold',
            content: content
        });
    }

    getGridMenu(productsCard: Card[]): Component {
        return new Grid({
            name: "ROW_CARD_MENU",
            type: "GRID",
            spacingHorizontal: "spacing00",
            spacingVertical: "spacing12",
            spacingBetweenComponents: "spacing12",
            gridType: "ROW",
            gridSize: 1,
            backgroundToken: "light01",
            items: productsCard
        })
    }

    getGridPhotos(photoCard: Card[]): Component {
        return new Grid({
            name: "GRID_PHOTOS",
            type: "GRID",
            spacingHorizontal: "spacing00",
            spacingVertical: "spacing12",
            spacingBetweenComponents: "spacing02",
            gridType: "TABLE",
            gridSize: 3,
            backgroundToken: "light01",
            items: photoCard
        })
    }

    getPhotoCard(content: Content): Card {
        return new Card({
            name: "CARD_PHOTO",
            type: "CARD",
            elevation: "spacing00",
            border: "spacing00",
            stroke: "spacing00",
            content: content
        })
    }

    getProductCard(content: Content, deeplink: string): Card {
        return new Card({
            name: "CARD_PRODUCT",
            type: "CARD",
            elevation: "spacing02",
            border: "spacing08",
            stroke: "spacing02",
            deeplink: deeplink,
            content: content
        })
    }

    getButtonOutlineMedium(title: string, deeplink: string): Component {
        return new Button({
            name: "SEE_MORE_BUTTON",
            type: "BUTTON",
            style: "OutlineMedium",
            spacingHorizontal: "spacing16",
            spacingVertical: "spacing12",
            colorToken: "primaryColor",
            deeplink: deeplink,
            content: { title: title }
        })
    }

    getExpandableText(text: string): Component {
        return new Text({
            name: "EXPANDABLE_TEXT",
            type: "TEXT",
            colorExpandableText: "primaryColor",
            typographyTokenExpandableText: "paragraph01Bold",
            maxLines: 3,
            spacingHorizontal: "spacing16",
            spacingVertical: "spacing12",
            colorToken: "secondaryColor",
            content: { text: text }
        })
    }

    getText(text: string, colorToken: string = "secondaryColor", typographyToken: string = "header05Bold"): Component {
        return new Text({
            name: "TEXT",
            type: "TEXT",
            spacingHorizontal: "spacing16",
            spacingVertical: "spacing06",
            colorToken: colorToken,
            typographyToken: typographyToken,
            content: { text: text }
        })
    }

    getRowIconInfo(tokenIcon: string, text: string, uri: string): Grid {
        const iconCard = new Card({
            name: "CARD_ICON",
            type: "CARD",
            elevation: "spacing02",
            border: "spacing08",
            stroke: "spacing02",
            children: [this.getIcon(tokenIcon)]
        })

        const textCard = new Card({
            name: "CARD_TEXT",
            type: "CARD",
            elevation: "spacing00",
            border: "spacing00",
            stroke: "spacing00",
            content: { text: text, uri: uri }
        })

        return new Grid({
            name: "ROW_ICON_TEXT",
            type: "GRID",
            spacingHorizontal: "spacing16",
            spacingVertical: "spacing08",
            spacingBetweenComponents: "spacing02",
            gridType: "ROW",
            gridSize: 3,
            backgroundToken: "light01",
            items: [iconCard, textCard]
        })
    }

}