"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticarToken = autenticarToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function autenticarToken(req, res, next) {
    const token = req.cookies.token;
    console.log("Cookie recebido:", token ? "SIM" : "NÃO");
    if (!token) {
        return res.redirect("/login.html");
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        return res.status(500).send("JWT_SECRET não configurado.");
    }
    try {
        jsonwebtoken_1.default.verify(token, secret);
        next();
    }
    catch (erro) {
        res.clearCookie("token");
        return res.redirect("/login.html");
    }
}
