import { PaymentCard } from "./PaymentCard.js";
import { PAYMENT_METHOD } from "./enums/Payment_Method.js"; 

export class PaymentCreditCard extends PaymentCard {
  
    tax= 0.05;

     constructor(amount: number, date: Date, description: string, cardNumber: string, cardHolder: string, expirationDate: string, cvv: string) {
        super(amount, date, description, cardNumber, cardHolder, expirationDate, cvv, PAYMENT_METHOD.CREDIT_CARD);
     }
    
}