const getState = () => {
  const state = localStorage.getItem("state");
  if (!state) {
    return {
      filterUser: null,
      filterTag: null,
      currentUser: null,
    };
  }
  return JSON.parse(state);
};

const setState = (state) => {
  localStorage.setItem("state", JSON.stringify(state));
};

const users = [
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
const tags = ["frontend", "backend", "ux", "data"];

const state = getState();

// DOM Elements
const $users = document.querySelector("#js-users");
const $user = document.querySelector("#js-user");
const $filterUsers = document.querySelector("#js-filter-users");
const $filterTags = document.querySelector("#js-filter-tags");

// Listeners
$users.addEventListener("click", (event) => {
  const li = event?.target.closest("li");
  if (!li) {
    return;
  }
  const id = +li.dataset.id;

  // For , while
  const user = users.find((u) => +u.id === +id);

  state.currentUser = user;

  renderUser();
});

$filterUsers.addEventListener("click", (event) => {
  const span = event?.target.closest("span");

  if (!span) {
    return;
  }
  const id = +span.dataset.id;
  const user = users.find((u) => +u.id === +id);

  state.filterUser = user;

  renderFilterUsers();
});

$filterTags.addEventListener("click", (event) => {
  const span = event?.target.closest("span");

  if (!span) {
    return;
  }
  const id = span.dataset.id;
  const tag = tags.find((t) => t === id);

  state.filterTag = tag;

  renderFilterTags();
});
// Render Functions
const renderFilterUsers = () => {
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

const renderFilterTags = () => {
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

const renderUsers = () => {
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

const renderUser = () => {
  const user = state.currentUser;
  if (!user) {
    $user.innerHTML = `<span>ZZ</span>`;
    return;
  }
  $user.innerHTML = `<img src="${user.image}" alt="${user.name}" />`;
};

const renderState = () => {
  document.getElementById("code").innerHTML = `
    ${JSON.stringify(state.currentUser)}
    ${JSON.stringify(state.filterTag)}
    ${JSON.stringify(state.filterUser)}
  `;
};

const setUsersByAPI = () => {
  fetch("https://rickandmortyapi.com/api/character")
    // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
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
