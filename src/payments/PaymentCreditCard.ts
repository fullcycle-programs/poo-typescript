import { PaymentCard } from "./PaymentCard.js";

export class PaymentCreditCard extends PaymentCard {
 
    private static type: string = "Credit Card";
    tax= 0.05;

     constructor(amount: number, date: Date, description: string, cardNumber: string, cardHolder: string, expirationDate: string, cvv: string) {
        super(amount, date, description, cardNumber, cardHolder, expirationDate, cvv, PaymentCreditCard.type);
     }
    
}