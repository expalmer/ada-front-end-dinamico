const getId = (() => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
})();

let data = [];

const $input = document.getElementById("add");
const $tasks = document.getElementById("tasks");

const $voice = document.getElementById("voice");
const $start = document.getElementById("start");
const $stop = document.getElementById("stop");

const addTask = (task) => {
  const id = getId();

  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.dataset.id = id;

  span.textContent = `${id} _ ${task}`;
  button.textContent = "x";

  li.appendChild(span);
  li.appendChild(button);

  $tasks.appendChild(li);

  data.push({ id, task });
  console.log({ data });
};

const removeTask = (id) => {
  const li = document.querySelector(`li[data-id="${id}"]`);
  if (li) {
    li.remove();
    data = data.filter((item) => item.id !== id);
  }
};

$input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask($input.value);
    $input.value = "";
  }
});

$tasks.addEventListener("click", function (e) {
  const li = e.target.closest("li");
  const id = Number(li.dataset.id);
  if (e.target.tagName === "BUTTON") {
    removeTask(id);
    return;
  }
  li.classList.toggle("done");
});

addTask("Tarefa de exemplo");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();

  // Configurações de reconhecimento
  recognition.lang = "pt-BR"; // Definindo o idioma para português
  recognition.interimResults = false; // Não mostrar resultados intermediários
  recognition.maxAlternatives = 1; // Apenas uma alternativa de reconhecimento

  // Inicia o reconhecimento
  $voice.addEventListener("click", () => {
    recognition.start();
    $start.style.display = "none";
    $stop.style.display = "block";
  });

  // Evento quando a fala é reconhecida
  recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript;
    // se a palavra for: "remover tarefa 1"

    if (transcript.includes("remover tarefa")) {
      const id = Number(transcript.split(" ")[2]);
      removeTask(id);
      return;
    }

    addTask(transcript);
  });

  // Evento quando o reconhecimento é encerrado
  recognition.addEventListener("end", () => {
    console.log("Reconhecimento de voz encerrado.");
    $start.style.display = "block";
    $stop.style.display = "none";
  });
} else {
  console.error("API de reconhecimento de voz não suportada.");
}
