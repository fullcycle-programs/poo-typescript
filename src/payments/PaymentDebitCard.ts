import { PaymentCard } from "./PaymentCard.js";

export class PaymentDebitCard extends PaymentCard {
 
    tax = 0.02;
    
    private static type: string = "Debit Card";

     constructor(amount: number, date: Date, description: string, cardNumber: string, cardHolder: string, expirationDate: string, cvv: string) {
        super(amount, date, description, cardNumber, cardHolder, expirationDate, cvv, PaymentDebitCard.type);
     }

}