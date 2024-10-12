// Exemplo de chamada de API com fetch
// dando um console.log no resultado
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("ERR", { err });
  });

// dando um console.log no erro já que a URL está errada
fetch("https://rickandmortyapi.com/api/charact")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Erro na requisição");
    }
    return res.json();
  })
  .then((data) => {
    // Não irá chegar aqui
    console.log(data);
  })
  .catch((err) => {
    // Aqui vai chegar porque a URL está errada e damos um throw new Error quando o status da resposta não é ok
    console.log("ERR", { err });
  });
