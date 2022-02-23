"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(5000, () => {
    console.log("Server has started", 5000);
});
app.get("/start", (req, res) => {
    res.json({
        result: "successful result",
    });
});
