import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import pool from "../database/connection";

export async function login(req: Request, res: Response) {
    try {
        const { matricula, senha } = req.body;

        // 1. Verifica se matrícula e senha foram informadas
        if (!matricula || !senha) {
            return res.status(400).json({
                mensagem: "Matrícula e senha são obrigatórios."
            });
        }

        // 2. Procura o usuário no banco
        const resultado = await pool.query(
            `
            SELECT
                usuario_id,
                matricula,
                senha,
                nome
            FROM usuario
            WHERE matricula = $1
            `,
            [matricula]
        );

        // 3. Usuário não encontrado
        if (resultado.rows.length === 0) {
            return res.status(401).json({
                mensagem: "Matrícula ou senha inválida."
            });
        }

        const usuario = resultado.rows[0];

        // 4. Compara a senha digitada com o hash do banco
        const senhaCorreta = await bcrypt.compare(
            senha,
            usuario.senha
        );

        // 5. Senha incorreta
        if (!senhaCorreta) {
            return res.status(401).json({
                mensagem: "Matrícula ou senha inválida."
            });
        }

        // 6. Pega a chave secreta do .env
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new Error("JWT_SECRET não configurado.");
        }

        // 7. Cria o JWT
        const token = jwt.sign(
            {
                usuario_id: usuario.usuario_id,
                matricula: usuario.matricula
            },
            secret,
            {
                expiresIn: "1h"
            }
        );

        // 8. Guarda o JWT em um cookie HttpOnly
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000
        });

        // 9. Retorna apenas os dados necessários ao frontend
        return res.status(200).json({
            mensagem: "Login realizado com sucesso!",
            usuario: {
                id: usuario.usuario_id,
                matricula: usuario.matricula,
                nome: usuario.nome
            }
        });

    } catch (erro) {
        console.error(erro);

        return res.status(500).json({
            mensagem: "Erro interno do servidor."
        });
    }
}