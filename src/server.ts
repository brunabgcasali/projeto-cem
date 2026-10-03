import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes";
import pageRoutes from "./routes/page.routes";
import privateRoutes from "./routes/private.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

// SOMENTE arquivos públicos
app.use(express.static(path.join(__dirname, "../public")));

app.use(privateRoutes);

// API
app.use("/api", authRoutes);

// Páginas
app.use("/", pageRoutes);

app.get("/", (req, res) => {
    res.redirect("/login.html");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});