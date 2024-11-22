async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível criar o produto")
    }
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

async function deletaProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível deletar o produto")
    }
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos,
    criaProduto,
    deletaProduto
}