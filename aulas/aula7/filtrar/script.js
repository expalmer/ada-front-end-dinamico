class App {
  constructor() {
    this.$users = document.querySelector("#users");
    this.$tags = document.querySelector("#tags");
    this.$cards = document.querySelector("#cards");

    this.filters = {
      userId: null,
      tag: null,
    };

    this.users = [
      {
        id: 1,
        name: "Darth Vader",
      },
      {
        id: 2,
        name: "Luke Skywalker",
      },
      {
        id: 3,
        name: "Leia Organa",
      },
    ];

    this.tags = ["frontend", "backend", "fullstack"];

    this.cards = [
      {
        id: 7,
        task: "Learn Docker",
        tag: "fullstack",
        userId: 3,
      },
      {
        id: 2,
        task: "Learn React",
        tag: "frontend",
        userId: 2,
      },
      {
        id: 6,
        task: "Learn Angular",
        tag: "frontend",
        userId: 3,
      },
      {
        id: 1,
        task: "Learn JavaScript",
        tag: "frontend",
        userId: 1,
      },
      {
        id: 4,
        task: "Learn Express",
        tag: "backend",
        userId: 2,
      },
      {
        id: 5,
        task: "Learn MongoDB",
        tag: "backend",
        userId: 2,
      },
      {
        id: 8,
        task: "Learn Kubernetes",
        tag: "fullstack",
        userId: 1,
      },
      {
        id: 9,
        task: "Learn AWS",
        tag: "fullstack",
        userId: 2,
      },
      {
        id: 3,
        task: "Learn Node",
        tag: "backend",
        userId: 1,
      },
    ];

    this.render();
    this.eventListeners();
  }

  eventListeners() {
    this.$users.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const id = parseInt(e.target.dataset.id);
        this.filters.userId = this.filters.userId === id ? null : id;
        this.render();
      }
    });

    this.$tags.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const name = e.target.dataset.name;
        this.filters.tag = this.filters.tag === name ? null : name;
        this.render();
      }
    });
  }

  render() {
    this.renderUsers();
    this.renderTags();
    this.renderCards();
  }

  renderUsers() {
    const html = this.users
      .map((user) => {
        const className = this.filters.userId === user.id ? "active" : "";
        return `<li data-id="${user.id}" class="${className}">${user.name}</li>`;
      })
      .join("");

    this.$users.innerHTML = html;
  }

  renderTags() {
    const html = this.tags
      .map((tag) => {
        const className = this.filters.tag === tag ? "active" : "";
        return `<li data-name="${tag}" class="${className}">${tag}</li>`;
      })
      .join("");

    this.$tags.innerHTML = html;
  }

  renderCards() {
    const filteredCards = this.cards.filter((card) => {
      if (this.filters.userId && this.filters.tag) {
        return (
          card.userId === this.filters.userId && card.tag === this.filters.tag
        );
      } else if (this.filters.userId) {
        return card.userId === this.filters.userId;
      } else if (this.filters.tag) {
        return card.tag === this.filters.tag;
      }
      return true;
    });

    const html = filteredCards
      .map((card) => {
        const user = this.users.find((user) => user.id === card.userId);
        return `
        <li data-id="${card.id}" class="${card.tag}">
          <h3>${card.task}</h3>
          <p>${card.tag}</p>
          <p>${user.name}</p>
        </li>`;
      })
      .join("");

    this.$cards.innerHTML = html;
  }
}

new App();
