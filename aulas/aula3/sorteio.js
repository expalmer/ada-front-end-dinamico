const alunos = [
  "Aridan Silva Pantoja",
  "Caroline Costa Malveira",
  "Daniel Moraes Mariz",
  "Débora Fioravante Da Silveira",
  "Eric Alisson Barbosa Mescouto",
  "Felipe Costa Da Silva",
  "Felipe De Oliveira Garrido",
  "Francisco Cezaniltom Soares Silva",
  "Francisco Evangelista Nobre Filho",
  "Gabriel Martins Leite",
  "Isabela Ivanoff",
  "Jonathan Dias De Carvalho",
  "Julianna Dantas Alencar Reis",
  "Juliano Pereira",
  "Karolyne Rafaelly De Sousa Carvalho",
  "Lucas Silva Do Nascimento",
  "Marcely Lobato",
  "Matheus Evaristo De Souza",
  "Matheus Santos Quintanilha",
  "Márcia Kamila De Nazaré Feitosa Ramos",
  "Natalia Kuester",
  "Raiza Trindade Martins",
  "Yasmin Barcelos Pires",
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function dividirEmGrupos(alunos) {
  const grupos = [];

  shuffle(alunos);

  while (alunos.length > 0) {
    shuffle(alunos);
    grupos.push(alunos.splice(0, 4));
  }

  return grupos;
}
