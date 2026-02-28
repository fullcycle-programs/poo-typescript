import { Payment } from "./Payment.js";

export abstract class PaymentCard extends Payment {
    private _cardNumber: string = "";
    private _cardHolder: string = "";
    private _expirationDate: string = "" 
    private _cvv: string = "";
    protected abstract tax : number;

    constructor(amount: number, date: Date, description: string, cardNumber: string, cardHolder: string, expirationDate: string, cvv: string, paymentMethod: string) {
        super(amount, date, description, paymentMethod);
        this._cardNumber = cardNumber; 
        this._cardHolder = cardHolder;
        this._expirationDate = expirationDate;
        this._cvv = cvv;
    }

    get cardNumber(): string {
        return this._cardNumber;
    }

    get cardHolder(): string {
        return this._cardHolder;
    }
 
    get expirationDate(): string {
        return this._expirationDate;
    }

    get cvv(): string {
        return this._cvv;
    }

    processPayment(): string {
        const totalAmount = this.amount + (this.amount * this.tax);
        return `Processing payment of ${totalAmount} - tax ${this.tax} -  with card ${this.cardNumber}...`;
    }
 
    async getTaxAmount(): Promise<number>{
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.amount * this.tax);
            }, 2000);
        });
    }
}