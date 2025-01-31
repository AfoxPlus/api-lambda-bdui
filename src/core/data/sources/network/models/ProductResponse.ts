export interface ProductResponse {
    success: boolean
    payload: Product[]
    message: string
}

export interface Product {
    code?: string
    name?: string
    description?: string
    imageUrl?: string
    stock?: number
    price?: number
    showInApp?: boolean
    measure?: Measure
    currency?: Currency
    productType?: ProductType
}

export interface Measure {
    code?: string
    value?: string
}

export interface Currency {
    code?: string
    value?: string
}

export interface ProductType {
    code?: string
    name?: string
}