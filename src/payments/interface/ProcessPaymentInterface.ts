import type { PAYMENT_STATUS } from "../enums/Payment_Status.js"; 

export interface ProcessPaymentInterface {
    
    startPayment(amount: number, date: Date, description: string): Promise<string>;
    getPaymentStatus(id: string): Promise<PAYMENT_STATUS>;
    getTaxAmount(): Promise<number>;
    confirmPayment(id: string): Promise<Boolean>;
    cancelPayment(id: string): Promise<Boolean>;

}