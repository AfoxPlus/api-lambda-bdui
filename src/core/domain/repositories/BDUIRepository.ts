import { Component } from "@core/domain/entities/Component";

export interface BDUIRepository {
    getEstablishmentDetail(code: string): Promise<Component[]>
}