const botaoSair = document.getElementById("sair");
const botaoGerenciarFuncionarios = document.getElementById("gerenciarFuncionarios");

botaoSair.addEventListener("click", async () => {
    try {
        await fetch("/api/logout", {
            method: "POST"
        });

        // Volta para a tela de login
        window.location.href = "/login.html";

    } catch (erro) {
        console.error("Erro ao sair:", erro);
    }
})

botaoGerenciarFuncionarios.addEventListener("click", async () => {
    try {
        await fetch("/api/gerenciarFuncionario", {
            method: "POST"
        });

        // Vai para a tela de funcionários
        window.location.href = "/gerenciarFuncionario.html";

    } catch (erro) {
        console.error("Erro ao entrar na tela de Funcionários:", erro);
    }
});