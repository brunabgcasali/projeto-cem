import { Router } from "express";
import { login } from "../controllers/auth.controller";

const router = Router();

router.post("/login", login);

router.post("/logout", (req, res) => {

    res.clearCookie("token");

    res.json({
        mensagem: "Logout realizado com sucesso."
    });

});

export default router;