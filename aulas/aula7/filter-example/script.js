class App {
  constructor() {
    this.$users = document.querySelector("#users");
    this.$tags = document.querySelector("#tags");
    this.$cards = document.querySelector("#cards");

    this.filters = {
      userId: null,
      tag: null,
    };

    this.users = [];

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

    this.tags = ["frontend", "backend", "fullstack"];

    this.render();
    this.eventListeners();
    this.replaceUsers();
  }

  replaceUsers() {
    const users = localStorage.getItem("users");
    if (users) {
      this.users = JSON.parse(users);
      return;
    }

    fetch(
      "https://gist.githubusercontent.com/expalmer/252eb374d054e231a5a477b941d7c4f6/raw/bffd4a3c68c393c64ba478c6e617708c6bab5e3a/users"
    )
      .then((d) => d.json())
      .then((users) => {
        this.users = users;
        localStorage.setItem("users", JSON.stringify(users));
        this.render();
      });
  }

  eventListeners() {
    this.$users.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        const id = +event.target.dataset.id;
        this.filters.userId = id === this.filters.userId ? null : id;
        this.render();
      }
    });

    this.$tags.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        const tag = event.target.dataset.tag;
        this.filters.tag = tag === this.filters.tag ? null : tag;
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
    const html = this?.users
      .map((user) => {
        const className = this.filters.userId === user.id ? "active" : "";
        return `
        <li data-id="${user.id}" class="${className}"  :class="{ active: isActive, 'text-danger': hasError }">
        <span>
        <img src="${user.image}" width="42" height="42" />
        </span>
        ${user.name}
      </li>
      `;
      })
      .join("");

    this.$users.innerHTML = html;
  }

  renderTags() {
    const html = this.tags
      .map((tag) => {
        const className = this.filters.tag === tag ? "active" : "";
        return `
        <li data-tag="${tag}" class="${className}">${tag}</li>
      `;
      })
      .join("");

    this.$tags.innerHTML = html;
  }

  renderCards() {
    const filteredCards = this.cards.filter((card, index) => {
      const { userId, tag } = this.filters;

      if (userId && tag) {
        return card.tag === tag && card.userId === userId;
      }
      if (userId) {
        return card.userId === userId;
      }
      if (tag) {
        return card.tag === tag;
      }

      return true;
    });

    const html = filteredCards
      .map((card) => {
        const user = this.users.find((user) => user.id === card.userId);
        return `
        <li class="${card.tag}">
          <h3>${card.id} :: ${card.task}</h3>
          <p>${card.tag}</p>
          <p>${user?.name}</p>
        </li>
      `;
      })
      .join("");

    this.$cards.innerHTML = html;
  }
}

new App();
