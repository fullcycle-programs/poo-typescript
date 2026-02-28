export abstract class Payment {
    
    private _amount: number;
    private _date: Date;
    private _description: string;   
    private _paymentMethod: string;

    constructor(amount: number, date: Date, description: string, paymentMethod: string) {
        this._amount = amount;
        this._date = date;
        this._description = description;
        this._paymentMethod = paymentMethod;
    }

    get amount(): number {
        return this._amount;
    }

    get date(): Date {
        return this._date;
    }

    get description(): string {
        return this._description;
    }

    get paymentMethod(): string {
        return this._paymentMethod;
    }


    getPaymentInfo(): string {
        return `Payment of ${this.amount} made on ${this.date.toDateString()} for ${this.description} on payment method ${this.paymentMethod}    `;
    }

    processPayment(): string { 
        return `Processing payment of ${this.amount}...`;
    }   
}