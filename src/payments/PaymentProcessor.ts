
import type { ProcessPaymentInterface } from "./interface/ProcessPaymentInterface.js";

export class PaymentProcessor {

    static async processPayment(payment: ProcessPaymentInterface): Promise <Boolean> {
        const idPayment = await payment.startPayment(100, new Date(), "Compra de livro");
        console.log(`ID do pagamento: ${idPayment}`);
        const status = await payment.getPaymentStatus(idPayment);
        console.log(`Status do pagamento: ${status}`);
        const confirm = await payment.confirmPayment(idPayment);
        console.log(`Pagamento confirmado: ${confirm}`);
        const taxAmount = await payment.getTaxAmount();
        console.log(`Valor do imposto: ${taxAmount}`);
        return true;
    } 
}