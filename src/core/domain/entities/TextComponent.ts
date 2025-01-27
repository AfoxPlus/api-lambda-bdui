import { ComponentName, ComponentType } from "@core/domain/entities/Types"
import { Component, Content } from "@core/domain/entities/Component"

interface TextConfig {
    colorExpandableText?: string
    typographyTokenExpandableText?: string
    maxLines?: number
    textAlign?: string,
    name: ComponentName,
    type: ComponentType,
    spacingHorizontal?: string,
    spacingVertical?: string,
    typographyToken?: string,
    backgroundToken?: string,
    colorToken?: string,
    content?: Content
}
export class Text extends Component {
    colorExpandableText: string
    typographyTokenExpandableText?: string
    maxLines?: number
    textAlign: string

    constructor(config: TextConfig) {
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
        this.colorExpandableText = config.colorExpandableText
        this.typographyTokenExpandableText = config.typographyTokenExpandableText
        this.maxLines = config.maxLines
        this.textAlign = config.textAlign
    }
}