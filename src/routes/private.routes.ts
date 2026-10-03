import { Router, Request, Response } from "express";
import path from "path";

import { autenticarToken } from "../middlewares/auth.middleware";

const router = Router();


// ========================================
// DASHBOARD
// ========================================

router.get(
    "/dashboard",
    autenticarToken,
    (req: Request, res: Response) => {

        res.sendFile(
            path.join(
                process.cwd(),
                "private",
                "dashboard.html"
            )
        );

    }
);


// ========================================
// CSS DO DASHBOARD
// ========================================

router.get(
    "/dashboard.css",
    autenticarToken,
    (req: Request, res: Response) => {

        res.sendFile(
            path.join(
                process.cwd(),
                "private",
                "dashboard.css"
            )
        );

    }
);


// ========================================
// JAVASCRIPT DO DASHBOARD
// ========================================

router.get(
    "/dashboard.js",
    autenticarToken,
    (req: Request, res: Response) => {

        res.sendFile(
            path.join(
                process.cwd(),
                "private",
                "dashboard.js"
            )
        );

    }
);


// ========================================
// GERENCIAR FUNCIONÁRIOS
// ========================================

router.get(
    "/gerenciarFuncionarios",
    autenticarToken,
    (req: Request, res: Response) => {

        res.sendFile(
            path.join(
                process.cwd(),
                "private",
                "gerenciarFuncionario.html"
            )
        );

    }
);


// ========================================
// CSS DE FUNCIONÁRIOS
// ========================================

router.get(
    "/gerenciarFuncionario.css",
    autenticarToken,
    (req: Request, res: Response) => {

        res.sendFile(
            path.join(
                process.cwd(),
                "private",
                "gerenciarFuncionario.css"
            )
        );

    }
);


// ========================================
// JAVASCRIPT DE FUNCIONÁRIOS
// ========================================

router.get(
    "/gerenciarFuncionario.js",
    autenticarToken,
    (req: Request, res: Response) => {

        res.sendFile(
            path.join(
                process.cwd(),
                "private",
                "gerenciarFuncionario.js"
            )
        );

    }
);


export default router;