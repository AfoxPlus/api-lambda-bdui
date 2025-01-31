import { Screen } from "@core/domain/entities/Screen"

export interface BDUIRepository {
    getEstablishmentDetail(code: string): Promise<Screen>
}