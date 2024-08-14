export interface Token {
    uuid: string;
    name: string;
    cost: number;
    quantity: number;
    available: number
    maximum: number;
    valid_from: Date;
    expiration: Date;
}