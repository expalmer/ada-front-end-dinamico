interface State {
  filterUser: User | null;
  filterTag: string | null;
  currentUser: User | null;
}

interface User {
  id: number;
  name: string;
  image: string;
}

class StateManager {
  state: State;

  constructor() {
    this.state = this.getState();
  }

  getState(): State {
    const state = localStorage.getItem("state");
    if (!state) {
      return {
        filterUser: null,
        filterTag: null,
        currentUser: null,
      };
    }
    return JSON.parse(state);
  }

  setState(state: State): void {
    localStorage.setItem("state", JSON.stringify(state));
  }
}

class UserManager {
  users: User[];

  constructor(users: User[]) {
    this.users = users;
  }

  findUserById(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  updateUser(index: number, name: string, image: string): void {
    this.users[index].name = name;
    this.users[index].image = image;
  }
}

class TagManager {
  tags: string[];

  constructor(tags: string[]) {
    this.tags = tags;
  }

  findTagById(id: string): string | undefined {
    return this.tags.find((t) => t === id);
  }
}

class Renderer {
  stateManager: StateManager;
  userManager: UserManager;
  tagManager: TagManager;
  $users: HTMLElement;
  $user: HTMLElement;
  $filterUsers: HTMLElement;
  $filterTags: HTMLElement;

  constructor(
    stateManager: StateManager,
    userManager: UserManager,
    tagManager: TagManager
  ) {
    this.stateManager = stateManager;
    this.userManager = userManager;
    this.tagManager = tagManager;
    this.$users = document.querySelector("#js-users")!;
    this.$user = document.querySelector("#js-user")!;
    this.$filterUsers = document.querySelector("#js-filter-users")!;
    this.$filterTags = document.querySelector("#js-filter-tags")!;
  }

  renderFilterUsers(): void {
    const html = this.userManager.users
      .map((user) => {
        const className =
          user.id === this.stateManager.state.filterUser?.id ? "selected" : "";
        return `
          <span class="filter-user ${className}" data-id="${user.id}">
            <img src="${user.image}" alt="${user.name}" />
          </span>
        `;
      })
      .join("");
    this.$filterUsers.innerHTML = html;
  }

  renderFilterTags(): void {
    const html = this.tagManager.tags
      .map((tag) => {
        const className =
          tag === this.stateManager.state.filterTag ? "selected" : "";
        return `
          <span class="filter-tag ${className}" data-id="${tag}">
           ${tag}
          </span>
        `;
      })
      .join("");
    this.$filterTags.innerHTML = html;
  }

  renderUsers(): void {
    const html = this.userManager.users
      .map((user) => {
        return `
        <li data-id="${user.id}" style="padding: 6px;background: blue;">
          <span class="user" style="padding: 6px;background: red;">
            <img src="${user.image}" alt="${user.name}" />
          </span>
        </li>
      `;
      })
      .join("");
    this.$users.innerHTML = html;
  }

  renderUser(): void {
    const user = this.stateManager.state.currentUser;
    if (!user) {
      this.$user.innerHTML = `<span>ZZ</span>`;
      return;
    }
    this.$user.innerHTML = `<img src="${user.image}" alt="${user.name}" />`;
  }

  renderState(): void {
    document.getElementById("code")!.innerHTML = `
      ${JSON.stringify(this.stateManager.state.currentUser)}
      ${JSON.stringify(this.stateManager.state.filterTag)}
      ${JSON.stringify(this.stateManager.state.filterUser)}
    `;
  }
}

class App {
  stateManager: StateManager;
  userManager: UserManager;
  tagManager: TagManager;
  renderer: Renderer;

  constructor() {
    this.stateManager = new StateManager();
    this.userManager = new UserManager([
      {
        id: 1,
        name: "Maria",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
      },
      {
        id: 2,
        name: "John",
        image: "https://randomuser.me/api/portraits/men/94.jpg",
      },
      {
        id: 3,
        name: "Anna",
        image: "https://randomuser.me/api/portraits/women/9.jpg",
      },
      {
        id: 4,
        name: "Eddy",
        image: "https://randomuser.me/api/portraits/men/25.jpg",
      },
    ]);
    this.tagManager = new TagManager(["frontend", "backend", "ux", "data"]);
    this.renderer = new Renderer(
      this.stateManager,
      this.userManager,
      this.tagManager
    );

    this.init();
  }

  init(): void {
    this.addEventListeners();
    this.setUsersByAPI();
    this.renderer.renderFilterUsers();
    this.renderer.renderFilterTags();
    this.renderer.renderUsers();
    this.renderer.renderUser();

    setInterval(() => {
      this.renderer.renderState();
      this.stateManager.setState(this.stateManager.state);
    }, 1000);
  }

  addEventListeners(): void {
    this.renderer.$users.addEventListener("click", (event) => {
      const li = (event.target as HTMLElement).closest("li");
      if (!li) return;
      const id = +li.dataset.id!;
      const user = this.userManager.findUserById(id);
      this.stateManager.state.currentUser = user || null;
      this.renderer.renderUser();
    });

    this.renderer.$filterUsers.addEventListener("click", (event) => {
      const span = (event.target as HTMLElement).closest("span");
      if (!span) return;
      const id = +span.dataset.id!;
      const user = this.userManager.findUserById(id);
      this.stateManager.state.filterUser = user || null;
      this.renderer.renderFilterUsers();
    });

    this.renderer.$filterTags.addEventListener("click", (event) => {
      const span = (event.target as HTMLElement).closest("span");
      if (!span) return;
      const id = span.dataset.id!;
      const tag = this.tagManager.findTagById(id);
      this.stateManager.state.filterTag = tag || null;
      this.renderer.renderFilterTags();
    });
  }

  setUsersByAPI(): void {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        this.userManager.updateUser(0, results[0].name, results[0].image);
        this.userManager.updateUser(1, results[1].name, results[1].image);
        this.userManager.updateUser(2, results[2].name, results[2].image);
        this.userManager.updateUser(3, results[3].name, results[3].image);

        this.renderer.renderFilterUsers();
        this.renderer.renderFilterTags();
        this.renderer.renderUsers();
        this.renderer.renderUser();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

new App();
