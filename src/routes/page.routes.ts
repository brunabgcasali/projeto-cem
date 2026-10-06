import { Router } from "express";
import path from "path";

import { autenticarToken } from "../middlewares/auth.middleware";

const router = Router();

// ================================
// DASHBOARD
// ================================

router.get(
"/dashboard",
autenticarToken,
(req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "../../private/dashboard.html"
        )
    );

}

);

// ================================
// CSS DO DASHBOARD
// ================================

router.get(
"/dashboard.css",
autenticarToken,
(req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "../../private/dashboard.css"
        )
    );

}

);

// ================================
// JAVASCRIPT DO DASHBOARD
// ================================

router.get(
"/dashboard.js",
autenticarToken,
(req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "../../private/dashboard.js"
        )
    );

}

);

export default router;