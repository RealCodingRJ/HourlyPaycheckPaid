"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYMENT = void 0;
exports.setPayment = setPayment;
var billing = 15;
var hours = 4;
exports.PAYMENT = {
    BILL: billing,
    HOUR: hours,
};
function setPayment(payment) {
    console.log(payment);
}
