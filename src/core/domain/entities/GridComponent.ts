import { ComponentName, ComponentType, GridType } from "@core/domain/entities/Types"
import { Component } from "@core/domain/entities/Component"
import { Card } from "@core/domain/entities/CardComponent"

interface GridConfig {
    name: ComponentName,
    type: ComponentType,
    spacingHorizontal?: string,
    spacingVertical?: string,
    spacingBetweenComponents: string,
    gridType: GridType,
    gridSize: number,
    backgroundToken?: string,
    colorToken?: string,
    items: Card[]
}

export class Grid extends Component {
    spacingBetweenComponents?: string
    gridType: GridType
    gridSize: number
    items: Card[]

    constructor(config: GridConfig) {
        super({
            name: config.name,
            type: config.type,
            spacingHorizontal: config.spacingHorizontal,
            spacingVertical: config.spacingVertical,
            backgroundToken: config.backgroundToken,
            colorToken: config.colorToken
        })
        this.spacingBetweenComponents = config.spacingBetweenComponents
        this.gridType = config.gridType
        this.gridSize = config.gridSize
        this.items = config.items
    }
}