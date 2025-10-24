"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var getFileStream = function (name, data) {
    fs_1.default.writeFileSync(name, data.toString());
};
exports.default = getFileStream;
