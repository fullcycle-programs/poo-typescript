export default class Address {
    private street: string;
    private number: number;
    private city: string;
    private state: string;
    private country: string;

    constructor(street: string, number: number, city: string, state: string, country: string) {
        this.street = street;
        this.number = number;
        this.city = city;
        this.state = state;
        this.country = country;
    }

    get streetAddress(): string {
        return this.street;
    }

    get numberAddress(): number {
        return this.number;
    }

    get cityAddress(): string {
        return this.city;
    }

    get stateAddress(): string {
        return this.state;
    }

    get countryAddress(): string {
        return this.country;
    }

}