interface User {
  id: number;
  name: string;
  image: string;
}

interface State {
  filterUser: User | null;
  filterTag: string | null;
  currentUser: User | null;
}

const getState = (): State => {
  const state = localStorage.getItem("state");
  if (!state) {
    return {
      filterUser: null,
      filterTag: null,
      currentUser: null,
    };
  }
  return JSON.parse(state) as State;
};

const setState = (state: State): void => {
  localStorage.setItem("state", JSON.stringify(state));
};

const users: User[] = [
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
];

const tags: string[] = ["frontend", "backend", "ux", "data"];

const state: State = getState();

// DOM Elements
const $users = document.querySelector("#js-users") as HTMLElement;
const $user = document.querySelector("#js-user") as HTMLElement;
const $filterUsers = document.querySelector("#js-filter-users") as HTMLElement;
const $filterTags = document.querySelector("#js-filter-tags") as HTMLElement;

// Listeners
$users.addEventListener("click", (event: Event) => {
  const li = (event.target as HTMLElement)?.closest("li");
  if (!li) {
    return;
  }
  const id = +li.dataset.id!;

  const user = users.find((u) => +u.id === +id);

  state.currentUser = user || null;

  renderUser();
});

$filterUsers.addEventListener("click", (event: Event) => {
  const span = (event.target as HTMLElement)?.closest("span");

  if (!span) {
    return;
  }
  const id = +span.dataset.id!;
  const user = users.find((u) => +u.id === +id);

  state.filterUser = user || null;

  renderFilterUsers();
});

$filterTags.addEventListener("click", (event: Event) => {
  const span = (event.target as HTMLElement)?.closest("span");

  if (!span) {
    return;
  }
  const id = span.dataset.id!;
  const tag = tags.find((t) => t === id);

  state.filterTag = tag || null;

  renderFilterTags();
});

// Render Functions
const renderFilterUsers = (): void => {
  const html = users
    .map((user) => {
      const className = +user.id === +state.filterUser?.id ? "selected" : "";
      return `
        <span class="filter-user ${className}" data-id="${user.id}">
          <img
            src="${user.image}"
            alt="${user.name}"
          />
        </span>
    `;
    })
    .join("");
  $filterUsers.innerHTML = html;
};

const renderFilterTags = (): void => {
  const html = tags
    .map((tag) => {
      const className = tag === state.filterTag ? "selected" : "";
      return `
        <span class="filter-tag ${className}" data-id="${tag}">
         ${tag}
        </span>
    `;
    })
    .join("");
  $filterTags.innerHTML = html;
};

const renderUsers = (): void => {
  const html = users
    .map((user) => {
      return `
      <li data-id="${user.id}" style="padding: 6px;background: blue;">
        <span class="user" style="padding: 6px;background: red;">
          <img
            src="${user.image}"
            alt="${user.name}"
          />
        </span>
      </li>
    `;
    })
    .join("");
  $users.innerHTML = html;
};

const renderUser = (): void => {
  const user = state.currentUser;
  if (!user) {
    $user.innerHTML = `<span>ZZ</span>`;
    return;
  }
  $user.innerHTML = `<img src="${user.image}" alt="${user.name}" />`;
};

const renderState = (): void => {
  document.getElementById("code")!.innerHTML = `
    ${JSON.stringify(state.currentUser)}
    ${JSON.stringify(state.filterTag)}
    ${JSON.stringify(state.filterUser)}
  `;
};

const setUsersByAPI = (): void => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      const { results } = data;
      const user1 = results[0];
      const user2 = results[1];
      const user3 = results[2];
      const user4 = results[3];

      users[0].name = user1.name;
      users[0].image = user1.image;

      users[1].name = user2.name;
      users[1].image = user2.image;

      users[2].name = user3.name;
      users[2].image = user3.image;

      users[3].name = user4.name;
      users[3].image = user4.image;

      renderFilterUsers();
      renderFilterTags();
      renderUsers();
      renderUser();
    })
    .catch((err) => {
      console.log(err);
    });
};

setUsersByAPI();

renderFilterUsers();
renderFilterTags();
renderUsers();
renderUser();

setInterval(() => {
  renderState();
  setState(state);
}, 1000);
