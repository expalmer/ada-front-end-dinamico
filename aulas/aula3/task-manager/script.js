const state = {
  title: "Task Manager",
  tasks: [
    {
      id: 1,
      description: "Estudar JS",
      done: true,
    },
    {
      id: 2,
      description: "Escutar música no Estipotifai",
      done: false,
    },
    {
      id: 3,
      description: "Pedir cupom de desconto do iFood pra Ada",
      done: true,
    },
  ],
};

const main = () => {
  const $title = document.querySelector("#js-title");
  const $list = document.querySelector("#js-list");
  const $add = document.querySelector("#js-add");

  const renderTitle = () => {
    $title.textContent = state.title;
  };

  const renderList = () => {
    const listHtml = state.tasks
      .map((task) => {
        const className = task.done ? "task done" : "task";
        return `<li class="${className}" data-id="${task.id}" data-description="${task.description}">
          <span>${task.description}</span>
          <button>[ x ]</button>
        </li>`;
      })
      .join("");
    $list.innerHTML = listHtml;
  };

  $add.addEventListener("keyup", (event) => {
    const value = event.target.value;
    if (event.key === "Enter" && value) {
      state.tasks.push({
        id: Date.now(),
        description: value,
        done: false,
      });
      event.target.value = "";
      renderList();
    }
  });

  $list.addEventListener("click", (event) => {
    const parent = event.target.closest("li");
    const id = parent.dataset.id;

    if (event.target.tagName === "BUTTON") {
      // Remover do Array
      state.tasks = state.tasks.filter((task) => +task.id !== +id);
      renderList();
      return;
    }

    // Tem varias formas de fazer, faça do seu jeito
    // TODO: mostrar outras formas de mudar o valor (eu)
    state.tasks = state.tasks.map((task) => {
      if (+task.id === +id) {
        task.done = !task.done;
        return task;
      }
      return task;
    });

    renderList();
  });

  // primeira vez
  renderTitle();
  renderList();
};

document.addEventListener("DOMContentLoaded", main);
