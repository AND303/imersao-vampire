function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById ("campo-pesquisa").value
console.log(campoPesquisa)

if(!campoPesquisa) {
  section.innerHTML = "<p>Nada foi encontrado</p>"
return
}

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = ""

  for (let dado of dados) {

    titulo = dado.titulo.toLowerCase()
    descricao = dado.titulo.toLowerCase()
    tags = dado.tags.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `<div class="item-resultado">
      <div class="container">
        <img src="${dado.imagem}" alt="${dado.alt}">
        <h2>${dado.titulo}</h2>
      </div>
      <p class="descricao-meta">${dado.descricao}</p>
      <p>${dado.disciplina}</p>
    </div>`;
  }
    }

if (!resultados){
resultados = "<p>Nada foi encontrado</p>"
}

  section.innerHTML = resultados;
}