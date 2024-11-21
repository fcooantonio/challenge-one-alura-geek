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