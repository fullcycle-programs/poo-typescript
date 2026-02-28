import { PaymentCreditCard } from "./PaymentCreditCard.js";
import { PaymentDebitCard } from "./PaymentDebitCard.js";
import { PaymentProcessor } from "./PaymentProcessor.js"; 

const paymt = new PaymentCreditCard(100, new Date(), "Compra de livro", "1234567890123456", "João da Silva", "12/25", "123");
console.log(paymt.getPaymentInfo());
console.log(paymt.processPayment());

const paymt2 = new PaymentDebitCard(200, new Date(), "Compra de curso", "9876543210987654", "Maria Oliveira", "11/24", "456");
console.log(paymt2.getPaymentInfo());
console.log(paymt2.processPayment());

console.log("------------------------------");

//PaymentProcessor.processPayment(paymt);
PaymentProcessor.processPayment(paymt2);