import { ComponentName, ComponentType } from "@core/domain/entities/Types"
import { Component } from "@core/domain/entities/Component"

interface IconConfig {
    name: ComponentName,
    type: ComponentType,
    iconToken: string,
    hintToken: string,
    size: string,
    spacingHorizontal?: string,
    spacingVertical?: string,
    backgroundToken?: string
}

export class Icon extends Component {
    iconToken: string
    size: string
    hintToken: string
    constructor(config: IconConfig) {
        super({
            name: config.name,
            type: config.type,
            spacingHorizontal: config.spacingHorizontal,
            spacingVertical: config.spacingVertical,
            backgroundToken: config.backgroundToken
        })
        this.iconToken = config.iconToken
        this.hintToken = config.hintToken
        this.size = config.size
    }
}