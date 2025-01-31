import { Component } from "./Component";

interface ScreenConfig {
    topBar?: Component,
    content: Component[],
    bottomBar?: Component
}

export class Screen {
    topBar: Component
    content: Component[]
    bottomBar: Component

    constructor(config: ScreenConfig) {
        this.topBar = config.topBar
        this.content = config.content
        this.bottomBar = config.bottomBar
    }
}