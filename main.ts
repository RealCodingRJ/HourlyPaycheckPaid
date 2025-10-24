import { PaymentsYearly } from "./Calculations/Maths";
import { Person } from "./Persons";
import { PAYMENT, setPayment } from "./Types/Types";

const names = ["Ryan", "James"];
Person(names);

const maths = PAYMENT.BILL * PAYMENT.HOUR;
const payment = new PaymentsYearly(maths);

const paidHourly = (PAYMENT.BILL * PAYMENT.HOUR) / PAYMENT.HOUR;

const message = `You Getting Paid: $${paidHourly} Check Amount: $${payment.getPayments()}`;
console.log(message);
