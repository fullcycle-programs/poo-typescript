import { PaymentCard } from "./PaymentCard.js";
import { PAYMENT_STATUS } from "./enums/Payment_Status.js"; 
import { PAYMENT_METHOD } from "./enums/Payment_Method.js"; 

import type { ProcessPaymentInterface } from "./interface/ProcessPaymentInterface.js";

export class PaymentDebitCard extends PaymentCard implements ProcessPaymentInterface {
 
    tax = 0.02;
 

     constructor(amount: number, date: Date, description: string, cardNumber: string, cardHolder: string, expirationDate: string, cvv: string) {
        super(amount, date, description, cardNumber, cardHolder, expirationDate, cvv, PAYMENT_METHOD.DEBIT_CARD);
     }

    async startPayment(amount: number, date: Date, description: string): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Payment of ${amount} started...`);
            }, 1000);
        });

    }

    async getPaymentStatus(id: string): Promise<PAYMENT_STATUS> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(PAYMENT_STATUS.COMPLETED);
            }, 1000);
        });
    }

    async confirmPayment(id: string): Promise<boolean> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });
    }

    async cancelPayment(id: string): Promise<boolean> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });
    }

}