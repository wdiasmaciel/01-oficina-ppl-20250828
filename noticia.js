let noticiasCarregadas = false;

function lerNoticias() {
    const container = document.getElementById("container");

    if (!noticiasCarregadas) {
        carregarNoticias();
        noticiasCarregadas = true;
    } else {
        container.innerHTML = "";
        noticiasCarregadas = false;
    }
}

function carregarNoticias() {
    const container = document.getElementById("container");
    
    dados.forEach(noticia => {
        const cartao = document.createElement('div');

        cartao.className = 'cartao';

        cartao.innerHTML = `
          <img src="${noticia.imagem}" alta="${noticia.titulo}" class="imagem">
          <section class="corpo-cartao">
            <h2 class="titulo-noticia-cartao">${noticia.titulo}</h2>
            <p>${noticia.categoria} - ${noticia.data}</p>
            <p class="descricao-noticia-cartao">${noticia.descricao}</p>
            <p class="autor-noticia-cartao">${noticia.autor}</p>
          </section>
          <a class="botao-cartao" href="./detalhe.html?id=${noticia.id}">Leia mais</a>
        `;

        container.appendChild(cartao);
    });
}

