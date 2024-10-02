class Todo {
  constructor() {
    this.$input = document.getElementById("add");
    this.$tasks = document.getElementById("tasks");
    this.data = [];
    this.currentId = 0;
    this.addListeners();
  }

  addListeners() {
    this.$input.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        const title = event.target.value;
        this.addTask(title);
        event.target.value = "";
      }
    });

    this.$tasks.addEventListener("click", (event) => {
      const li = event.target.closest("li");

      if (!li) {
        return;
      }

      const id = parseInt(li.dataset.id);

      if (event.target.tagName === "BUTTON") {
        this.removeTask(id);
      }

      if (event.target.tagName === "SPAN" || event.target.tagName === "LI") {
        this.toggleTask(id);
      }
    });
  }

  getId() {
    this.currentId += 1;
    return this.currentId;
  }

  addTask(title) {
    this.data.push({ id: this.getId(), title, done: false });
    this.render();
  }

  removeTask(id) {
    this.data = this.data.filter((task) => task.id !== id);
    this.render();
  }

  toggleTask(id) {
    const task = this.data.find((task) => +task.id === +id);
    task.done = !task.done;
    this.render();
  }

  taskTemplate(task) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.dataset.id = task.id;

    if (task.done) {
      li.classList.add("done");
    }

    span.textContent = `${task.id} _ ${task.title}`;
    button.textContent = "x";

    li.appendChild(span);
    li.appendChild(button);

    return li;
  }

  render() {
    this.$tasks.innerHTML = "";
    this.data.forEach((task) => {
      this.$tasks.appendChild(this.taskTemplate(task));
    });
  }
}

const todo = new Todo();
