import { ComponentName, ComponentType } from "@core/domain/entities/Types"
import { Component, Content } from "@core/domain/entities/Component"

interface ButtonConfig {
    name: ComponentName,
    type: ComponentType,
    style: string,
    borderStroke?: { with: string, color: string },
    shape?: string,
    contentPadding?: { vertical: string, horizontal: string },
    state?: string,
    action?: string,
    spacingHorizontal?: string,
    spacingVertical?: string,
    typographyToken?: string,
    backgroundToken?: string,
    colorToken?: string,
    content?: Content
}
export class Button extends Component {
    style: string
    borderStroke?: { with: string, color: string }
    shape?: string
    contentPadding?: { vertical: string, horizontal: string }
    state?: string
    action?: string

    constructor(config: ButtonConfig) {
        super({
            name: config.name,
            type: config.type,
            spacingHorizontal: config.spacingHorizontal,
            spacingVertical: config.spacingVertical,
            backgroundToken: config.backgroundToken,
            colorToken: config.colorToken,
            typographyToken: config.typographyToken,
            content: config.content
        })
        this.style = config.style
        this.borderStroke = config.borderStroke
        this.shape = config.shape
        this.contentPadding = config.contentPadding
        this.state = config.state
        this.action = config.action

    }
}