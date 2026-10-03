import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function autenticarToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
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

        jwt.verify(token, secret);

        next();

    } catch (erro) {

        res.clearCookie("token");

        return res.redirect("/login.html");
    }
}