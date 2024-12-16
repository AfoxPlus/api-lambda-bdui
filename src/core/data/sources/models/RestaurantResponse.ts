export interface RestaurantResponse {
    success: boolean
    payload: Restaurant
    message: string
}

export interface Restaurant {
    code?: string
    key?: string
    name?: string
    primaryType?: string
    description?: string
    phone?: string
    email?: string
    address?: string
    urlImageLogo?: string
    urlImageBanner?: string
    ownDelivery?: boolean
    isOnlyDelivery?: boolean
    isVerified?: boolean
    openNow?: boolean
    showInApp?: boolean
    userRatingCount?: number
    rating?: number
    googleMapsUri?: string
    websiteUri?: string
    postalCode?: string
    areaLevel2?: string
    areaLevel1?: string
    country?: string
    location?: Location
    types?: Type[]
    paymentMethods?: PaymentMethod[]
    regularOpeningHours?: RegularOpeningHour[]
    photos?: Photo[]
    subscription?: Subscription
    registrationState?: RegistrationState
}

export interface Location {
    latitude?: number
    longitude?: number
}

export interface Type {
    name?: string
}

export interface PaymentMethod {
    id?: string
    paymentMethod?: string
    isDefaultSelected?: boolean
}

export interface RegularOpeningHour {
    weekdayDescription?: string
}

export interface Photo {
    name?: string
    heightPx?: string
    widthPx?: string
}

export interface Subscription {
    code?: string
    name?: string
}

export interface RegistrationState {
    code?: string
    state?: string
}
