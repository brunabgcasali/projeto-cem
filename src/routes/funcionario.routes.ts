import { Router } from "express";

import { autenticarToken } from "../middlewares/auth.middleware";

const router = Router();

router.get(
    "/funcionarios",
    autenticarToken,
    (req, res) => {

        res.json({
            mensagem: "Você está autenticado!"
        });

    }
);

export default router;