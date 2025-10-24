"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Maths_1 = require("./Calculations/Maths");
var Persons_1 = require("./Persons");
var Types_1 = require("./Types/Types");
var fs_1 = require("fs");
var names = ["Ryan", "James"];
(0, Persons_1.Person)(names);
var maths = Types_1.PAYMENT.BILL * Types_1.PAYMENT.HOUR;
var payment = new Maths_1.PaymentsYearly(maths);
var getFileStream = function (name, data) {
    return (0, fs_1.writeFileSync)(name, data.toString());
};
var paidHourly = (Types_1.PAYMENT.BILL * Types_1.PAYMENT.HOUR) / Types_1.PAYMENT.HOUR;
var message = "You Getting Paid: $".concat(paidHourly, " Check Amount: $").concat(payment.getPayments());
getFileStream("main.maths.me", message);
console.log(message);
