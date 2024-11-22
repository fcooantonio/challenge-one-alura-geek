import { conectaApi } from "./main.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, preco, imagem) {
    const produto = document.createElement("li");
    produto.innerHTML = `
        <img src="${imagem}" alt="imagem do produto">
        <p>${nome}</p>
        <div>
            <p>$ ${preco}</p>
            <ion-icon name="trash"></ion-icon>
        </div>
    `;
    return produto;
}

async function deletarProduto() {
    lista.addEventListener("click", async (evento) => {
        const elementoClicado = evento.target;
        const paiElementoClicado = elementoClicado.parentElement;
        if (elementoClicado.tagName === "ION-ICON") {
            const nomeProduto = paiElementoClicado.previousElementSibling.textContent;
            const conexao = await conectaApi.listaProdutos();
            const produto = conexao.find((elemento) => elemento.nome === nomeProduto);
            await conectaApi.deletaProduto(produto.id);
            paiElementoClicado.parentElement.remove();
        }
    });
}

async function listarProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.nome, elemento.preco, elemento.imagem)))
    } catch {
        lista.innerHTML = `<h2>Não foi possível carregar a lista de produtos</h2>`
    }
}

listarProdutos();
deletarProduto();