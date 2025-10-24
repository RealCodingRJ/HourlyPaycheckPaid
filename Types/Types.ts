const billing = 15;
const hours = 4;

export const PAYMENT = {
  BILL: billing,
  HOUR: hours,
} as const;

export type Status = (typeof PAYMENT)[keyof typeof PAYMENT];

export function setPayment(payment: Status) {
  console.log(payment);
}
