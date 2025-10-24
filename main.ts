import { PaymentsYearly } from "./Calculations/Maths";
import { Person } from "./Persons";
import { PAYMENT, setPayment } from "./Types/Types";
import { writeFileSync } from "fs";

const names = ["Ryan", "James"];
Person(names);

const maths = PAYMENT.BILL * PAYMENT.HOUR;
const payment = new PaymentsYearly(maths);

const getFileStream = (name: string, data: string) => {
  return writeFileSync(name, data.toString());
};

const paidHourly = (PAYMENT.BILL * PAYMENT.HOUR) / PAYMENT.HOUR;

const message = `You Getting Paid: $${paidHourly} Check Amount: $${payment.getPayments()}`;

getFileStream("main.maths.me", message);
console.log(message);
