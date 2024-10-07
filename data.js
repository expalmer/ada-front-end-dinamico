const ifoodSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="23" viewBox="0 0 60 33"><g fill="#EA1D2C" fill-rule="evenodd"> <path d="M.12 18.792h4.53L7.2 5.806H2.67zM3.06 3.758h4.53L8.34.031H3.78zM6.45 22.458h4.53l2.76-14.055h3.3l.51-2.597h-3.33l.12-.612c.21-1.1.57-2.383 2.28-2.383 1.02 0 1.98.122 2.94.52l.51-2.72c-1.02-.397-2.16-.58-3.27-.58-3.66 0-6.15 2.26-7.08 5.775H8.13l-.48 2.597h1.56L6.45 22.458z"/> <path d="M20.85 19.097c5.37 0 9.09-5.072 9.09-9.228 0-3.025-2.76-4.338-5.37-4.338-5.88 0-9.09 5.469-9.09 9.227 0 2.995 2.76 4.34 5.37 4.34M35.16 19.097c5.37 0 9.09-5.072 9.09-9.228 0-3.025-2.76-4.338-5.37-4.338-5.88 0-9.09 5.469-9.09 9.227 0 2.995 2.79 4.34 5.37 4.34M51.63 18.792h4.5L59.88.03h-4.53l-1.2 5.775c-.6-.123-1.2-.214-1.83-.214-4.44 0-8.49 5.866-8.49 10.052 0 1.712 1.08 3.423 2.91 3.423 2.61 0 4.41-1.314 5.16-2.567h.27l-.54 2.292zM37.65 28.57c-3.33 2.933-7.77 4.43-12.57 4.124-6.09-.397-10.29-5.286-11.16-10.236h.3c1.38 3.178 4.71 6.08 8.88 6.57 4.08.458 9.09-1.436 11.82-4.186l-3.09-2.414 9.15.03L39 32.511l-1.35-3.942z"/> </g> </svg> ';

const button = (link, text) => `
<a href="${link}" target="_blank" class="inline-flex items-center justify-center p-0.5 mb-0.5 me-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-ada-primary to-blue-600 group-hover:from-ada-primary group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
  <span class=" px-5 py-1.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
    ${text}
  </span>
</a>
`;

export const intro = [
  {
    id: 1,
    title: "O que iremos aprender?",
    items: [
      {
        id: 1,
        title: "Ter o DOM",
        descriptions: [
          "Manipular o DOM de uma página HTML usando diferentes tipos de seletores",
          "Adicionar e remover elementos HTML",
          "Usar eventos para interagir com o usuário",
          "Adição e remoção de classes e estilização",
        ],
      },
      {
        id: 2,
        title: "Usar o LocalStorage e SessionStorage",
        descriptions: [
          "Salvar e recuperar dados do LocalStorage",
          "Salvar e recuperar dados do SessionStorage",
        ],
      },
      {
        id: 3,
        title: "Usar APIs externas e consumir dados",
        descriptions: [
          "Consumir dados de uma API externa",
          "Integrar os dados consumidos com o DOM",
        ],
      },
      {
        id: 4,
        title: "Entender a natureza assíncrona do Javascript",
        descriptions: ["Entender callbacks, promises e async/await"],
      },
    ],
  },
];

export const instrutor = [
  {
    id: 1,
    title: "Palmer Silva de Oliveira",
    items: [
      {
        id: 1,
        title: `<span class="flex items-center gap-2">Software Engineer no <strong class="text-2xl">${ifoodSVG}</strong></span>`,
        descriptions: ["Lá eu pinto botões e faço eles funcionarem 😅"],
      },
      {
        id: 2,
        title: "Bacharel em Ciência da Computação",
        descriptions: ["Comecei na Ulbra em 2006 e terminei em 2019 🫠"],
      },
      {
        id: 3,
        title: "Pós-Graduação em Sistemas Distribuídos",
        descriptions: [
          "Na PUC Minas, dessa vez comecei em 2023 e terminei em 2024 📚",
        ],
      },
      {
        id: 4,
        title: "Geeeente, tô a mais de 12 anos nesse corre",
        descriptions: [
          `Já mexi com photoshop, mongodb, mysql, postgres, nodejs, react, vue, angular,infernojs, moonjs, jquery, html, css, sass, less, bootstrap, tailwind, materialize, bulma, foundation, etc...
          webpack, gulp, grunt, babel, typescript, PHP, ah ... e javascript 😅 ... sou especialista em tudo isso? NÃO :/`,
        ],
      },
      {
        id: 5,
        title: "Links",
        descriptions: [
          `${button(
            "https://www.linkedin.com/in/palmer-oliveira/",
            "Linkedin"
          )}`,
          `${button("https://github.com/expalmer", "github")}`,
          `${button("mailto:expalmer@gmail.com", "expalmer@gmail.com")}</span>`,
        ],
      },
    ],
  },
];

export const combinados = [
  {
    id: 1,
    title: "Contratinho nada escrito em pedra",
    items: [
      {
        id: 1,
        title: "Início 19h/19h05 🚀",
        descriptions: [
          "Para dar tempo de todo mundo chegar",
          "Antes disso, quem quiser falar sobre carreira, vida, etc... fica a vontade",
        ],
      },
      {
        id: 2,
        title: "Intervalo 15 min 🕰️",
        descriptions: ["Tome água, se alimente bem e vá ao banheiro"],
      },
      {
        id: 3,
        title: "Conversem comigo 🗣️",
        descriptions: ["Pergunte, comente e até critique... mas participe"],
      },
      {
        id: 4,
        title: "Foco 👀",
        descriptions: ["Fique atento, tudo é muito importante"],
      },
      {
        id: 5,
        title: "Feedback 🔂",
        descriptions: [
          "Está lento? está rápido? não entendeu?",
          "Lembra que pode sempre chamar anonimamente pelo formulário",
        ],
      },
      {
        id: 6,
        title: "Colaboração 🧑🏿‍🤝‍🧑🏻",
        descriptions: ["Compartilhe, peça ajuda e ajude o colega"],
      },
      {
        id: 7,
        title: "Fique com a câmera ligada 🎥",
        descriptions: [
          "Mas claro... sempre que possível. Pois isso melhora nossa experiência em grupo",
        ],
      },
    ],
  },
];

export const data = [
  {
    id: 1,
    title: "Como alterar o HTML utilizando Javascript?",
    items: [
      {
        id: 1,
        title: "Document Object Model (DOM)",
        descriptions: [
          "Veremos que DOM é uma interface que representa um documento HTML e que permite a manipulação do conteúdo e da estrutura do documento.",
          "Relação entre o navegador, a página (DOM) e o JavaScript.",
          "Introdução aos objetos <b>window</b> e <b>document</b>.",
          "Seletores getElementById, getElementsByClassname e querySelectors (diferenças, vantagens e desvantagens)",
          "Eventos em Javascript (addEventListener)",
          "Callback functions",
        ],
      },
      {
        id: 2,
        title: "[ arquivos da aula ]",

        descriptions: [
          `${button(
            "https://github.com/expalmer/ada-front-end-dinamico/tree/master/aulas/aula1",
            "github com os arquivos"
          )}`,
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Formulário reativo com JS e inicio do Todo List",
    items: [
      {
        id: 1,
        title: "Criando um contator",
        descriptions: [
          "Criando um contador que incrementa ou decrementa um valor",
        ],
      },
      {
        id: 2,
        title: "Criando um formulário",
        descriptions: [
          "Criando um formulário com campos de texto, botões e eventos",
        ],
      },
      {
        id: 3,
        title: "Reatividade em formulários",
        descriptions: [
          "O que é reatividade?",
          "Como criar um formulário reativo?",
          "Validação de formulários",
        ],
      },
      {
        id: 2,
        title: "[ arquivos da aula ]",

        descriptions: [
          `${button(
            "https://github.com/expalmer/ada-front-end-dinamico/tree/master/aulas/aula2",
            "github com os arquivos"
          )}`,
        ],
      },
    ],
  },
  {
    id: 3,
    title:
      "Persistindo dados no LocalStorage/SessionStorage e começo do Task Manager",
    items: [
      {
        id: 1,
        title: "Criando um Task Manager",
        descriptions: [
          "Adicionando itens a uma lista através de um formulário reativo",
        ],
      },
      {
        id: 2,
        title: "Aprimorando o do Task Manager",
        descriptions: [
          "Opção de marcar como concluído",
          "Opção de excluir um item",
          "Opção de editar um item",
          "Salvando o Task Manager no LocalStorage",
        ],
      },
      {
        id: 3,
        title: "Entendo LocalStorage",
        descriptions: [
          "O que é LocalStorage?",
          "Como salvar dados no LocalStorage?",
          "Como recuperar dados do LocalStorage?",
          "Fazendo o mesmo com o SessionStorage",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Trabalhando com APIs externas e integrando com o Todo List",
    items: [
      {
        id: 1,
        title: "API do Rick and Morty",
        descriptions: [
          "O que é uma API e como consumir?",
          "Integrando a API do Rick and Morty no Todo List para colocamos os responsáveis pelas tarefas",
        ],
      },
      {
        id: 2,
        title: "API do Gyphy",
        descriptions: [
          "Integrando a API do Gyphy no Todo List para ser possível adicionar gifs aos itens",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Callback, Promises e Async/Await",
    items: [
      {
        id: 1,
        title: "Callback",
        descriptions: [
          "Reforçar o entendimento do que é um callback?",
          "Exemplos de callbacks",
          "SetTimeout e SetInterval",
          "Problemas com callbacks (Callback Hell)",
        ],
      },
      {
        id: 2,
        title: "Promises",
        descriptions: [
          "O que é uma Promise?",
          "Como criar uma Promise?",
          "Como consumir uma Promise?",
          "Promise.all e Promise.race",
          "Problemas com Promises (Promise Hell)",
        ],
      },
      {
        id: 3,
        title: "Async/Await",
        descriptions: [
          "O que é o Async/Await?",
          "Como criar uma função assíncrona?",
          "Como consumir uma função assíncrona?",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Consumindo um CRUD API com Javascript para o Todo List",
    items: [
      {
        id: 1,
        title: "CRUD API",
        descriptions: [
          "O que é um CRUD?",
          "Como consumir uma API com Javascript?",
        ],
      },
      {
        id: 2,
        title: "Integrando com o Todo List",
        descriptions: [
          "Create para adicionar um item",
          "Read para listar os itens",
          "Update para editar um item",
          "Delete para excluir um item",
          "Patch para marcar como concluído",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Lorem20 ipsum dolor sit amet",
    items: [
      {
        id: 1,
        title: "lorem ipsum dolor sit amet",
        descriptions: [
          "lorem ipsum dolor sit amet",
          "lorem ipsum dolor sit amet",
          "lorem ipsum dolor sit amet",
        ],
      },
      {
        id: 1,
        title: "lorem ipsum dolor sit amet",
        descriptions: [
          "lorem ipsum dolor sit amet",
          "lorem ipsum dolor sit amet",
          "lorem ipsum dolor sit amet",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Trabalho Final",
    items: [
      {
        id: 1,
        title: "Aula reservada para o trabalho. Hum... o que será?",
        descriptions: [
          "Conforme andamos no curso, veremos o que será o trabalho final",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Avaliação por Rubrica",
    items: [
      {
        id: 1,
        title: "Auto Avaliação",
        descriptions: [
          "Você precisa fazer a auto avaliação no painél do aluno na ADA",
        ],
      },
      {
        id: 2,
        title: "Quiz",
        descriptions: [
          "Vamos nos diverti com um quiz para avaliar o que aprendemos",
        ],
      },
      {
        id: 3,
        title: "Sua participação é muito importante",
        descriptions: [
          "Eu vou avaliar sua participação, então espero que tenha enviado feedbacks, perguntas e comentários lá no formulário",
        ],
      },
    ],
  },
];

export const trabalho = [
  {
    id: 999,
    title: "Trabalho Final",
    items: [
      {
        id: 1,
        title: "Ter o DOM",
        descriptions: [
          "Manipular o DOM de uma página HTML usando diferentes tipos de seletores",
          "Adicionar e remover elementos HTML",
          "Usar eventos para interagir com o usuário",
          "Adição e remoção de classes e estilização",
        ],
      },
      {
        id: 2,
        title: "Usar o LocalStorage e SessionStorage",
        descriptions: [
          "Salvar e recuperar dados do LocalStorage",
          "Salvar e recuperar dados do SessionStorage",
        ],
      },
      {
        id: 3,
        title: "Usar APIs externas e consumir dados",
        descriptions: [
          "Consumir dados de uma API externa",
          "Integrar os dados consumidos com o DOM",
        ],
      },
      {
        id: 4,
        title: "Entender a natureza assíncrona do Javascript",
        descriptions: ["Entender callbacks, promises e async/await"],
      },
    ],
  },
];
