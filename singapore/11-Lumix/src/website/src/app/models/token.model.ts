export interface Token {
    uuid: string;
    name: string;
    cost: number;
    total: number;
    maximum: number;
    valid_from: Date;
    expiration: Date;
}