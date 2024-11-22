import { conectaApi } from "./main.js";

const formulario = document.querySelector("[data-formulario]");

async function adiconarProduto(evento) {
    evento.preventDefault();
    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    try {
        await conectaApi.criaProduto(nome, preco, imagem);
        alert("Produto criado com sucesso!");
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => adiconarProduto(evento));