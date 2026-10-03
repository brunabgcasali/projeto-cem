const form = document.getElementById("loginForm");

const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const matricula =
        document.getElementById("matricula").value;

    const senha =
        document.getElementById("senha").value;

    try {

        const resposta = await fetch("/api/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                matricula,
                senha
            })

        });

        const dados = await resposta.json();

        if (resposta.ok) {

            localStorage.setItem(
                "usuario",
                JSON.stringify(dados.usuario)
            );

            window.location.href = "/dashboard";

        } else {

            mensagem.textContent = dados.mensagem;

        }

    } catch (erro) {

        console.error(erro);

        mensagem.textContent =
            "Não foi possível conectar ao servidor.";

    }

});