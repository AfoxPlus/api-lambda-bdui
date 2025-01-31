import { ComponentName, ComponentType } from "@core/domain/entities/Types"
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
    id: string
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
        this.id = randomId()
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

const randomId = (length = 6) => {
    return Math.random().toString(36).substring(2, length + 2);
};