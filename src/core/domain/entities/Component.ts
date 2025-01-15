import { ComponentName, ComponentType, GridType } from "@core/domain/entities/Types"

export interface Content {
    [key: string]: any
}

interface ComponentConfig {
    name: ComponentName,
    type: ComponentType;
    spacingHorizontal?: string;
    spacingVertical?: string;
    backgroundToken?: string;
    colorToken?: string;
    typographyToken?: string;
    content?: Content;
    children?: Component[];
}

export class Component {
    name: ComponentName
    type: ComponentType
    spacingHorizontal?: string
    spacingVertical?: string
    backgroundToken?: string
    colorToken?: string
    typographyToken?: string
    content?: Content
    children?: Component[]

    constructor(config: ComponentConfig) {
        this.name = config.name
        this.type = config.type
        this.spacingHorizontal = config.spacingHorizontal
        this.spacingVertical = config.spacingVertical
        this.backgroundToken = config.backgroundToken
        this.colorToken = config.colorToken
        this.typographyToken = config.typographyToken
        this.content = config.content
        this.children = config.children
    }
}

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
            content: config.content
        })
        this.elevation = config.elevation
        this.border = config.border
        this.stroke = config.stroke
    }
}

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