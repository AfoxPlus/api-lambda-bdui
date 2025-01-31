import { ComponentName, ComponentType } from "@core/domain/entities/Types"
import { Component, Content } from "@core/domain/entities/Component"

interface CardConfig {
    name: ComponentName,
    type: ComponentType,
    elevation?: string,
    border?: string,
    stroke?: string,
    spacingHorizontal?: string,
    spacingVertical?: string,
    typographyToken?: string,
    backgroundToken?: string,
    colorToken?: string,
    children?: Component[],
    content?: Content
}

export class Card extends Component {
    elevation: string
    border: string
    stroke: string
    constructor(config: CardConfig) {
        super({
            name: config.name,
            type: config.type,
            spacingHorizontal: config.spacingHorizontal,
            spacingVertical: config.spacingVertical,
            backgroundToken: config.backgroundToken,
            colorToken: config.colorToken,
            typographyToken: config.typographyToken,
            children: config.children,
            content: config.content
        })
        this.elevation = config.elevation
        this.border = config.border
        this.stroke = config.stroke
    }
}