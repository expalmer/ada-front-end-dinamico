const getCurrentDate = () =>
  new Date().toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

class App {
  constructor() {
    this.$form = document.querySelector("#form");

    this.$todo = document.querySelector("#todo");
    this.$doing = document.querySelector("#doing");
    this.$completed = document.querySelector("#completed");

    this.cards = [
      {
        id: 1,
        section: "todo",
        tag: "frontend",
        description: "Criar componente modal",
        createdAt: getCurrentDate(),
      },
      {
        id: 2,
        section: "completed",
        tag: "backend",
        description: "Criar API de produtos",
        createdAt: getCurrentDate(),
      },
      {
        id: 3,
        section: "doing",
        tag: "ux",
        description: "Fazer mocks das telas de login",
        createdAt: getCurrentDate(),
      },
    ];

    this.eventListener();
    this.render();
  }

  eventListener() {
    this.$form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(this.$form);
      const values = Object.fromEntries(formData);

      if (!values.tag || !values.description) {
        return;
      }

      const card = {
        id: Date.now(),
        section: "todo",
        tag: values.tag,
        description: values.description,
        createdAt: getCurrentDate(),
      };

      this.$form.reset();
      this.cards.push(card);
      this.render();
    });

    this.$todo.addEventListener("click", (event) => {
      this.onMove(event);
    });
    this.$doing.addEventListener("click", (event) => {
      this.onMove(event);
    });
    this.$completed.addEventListener("click", (event) => {
      this.onMove(event);
    });
  }

  onMove(event) {
    const button = event.target.closest("button");
    if (!button) {
      return;
    }
    const id = +button.dataset.id;
    const move = button.dataset.move;
    const card = this.cards.find((card) => card.id === id);

    switch (card.section) {
      case "todo":
        card.section = "doing";
        break;
      case "doing":
        if (move === "left") {
          card.section = "todo";
        } else {
          card.section = "completed";
        }
        break;
      case "completed":
        card.section = "doing";
        break;
    }
    this.render();
  }

  render() {
    const todoCards = this.cards.filter((card) => card.section === "todo");
    const doingCards = this.cards.filter((card) => card.section === "doing");
    const completedCards = this.cards.filter(
      (card) => card.section === "completed"
    );

    this.renderTotal(this.$todo.querySelector("small"), todoCards.length);
    this.renderCards(this.$todo.querySelector("ul"), todoCards);

    this.renderTotal(this.$doing.querySelector("small"), doingCards.length);
    this.renderCards(this.$doing.querySelector("ul"), doingCards);

    this.renderTotal(
      this.$completed.querySelector("small"),
      completedCards.length
    );
    this.renderCards(this.$completed.querySelector("ul"), completedCards);
  }

  renderTotal(dom, total) {
    dom.textContent = `total ${total}`;
  }

  renderCards(dom, cards) {
    const html = cards
      .map((card) => {
        return `
      <li>
        <span>${card.tag}</span>
        <p>${card.description}</p>
        <div>
          ${
            card.section === "todo"
              ? ""
              : `<button class="move" data-id="${card.id}" data-move="left">👈</button>`
          }  
          ${
            card.section === "completed"
              ? ""
              : `<button class="move" data-id="${card.id}" data-move="right">👉</button>`
          }  
          
        </div>
        <span>${card.createdAt}</span>
      </li>
    `;
      })
      .join("");

    dom.innerHTML = html;
  }
}

const app = new App();
//
// console.log(app.cards);
