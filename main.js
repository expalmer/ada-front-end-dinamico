import "./styles/reset.css";
import "./styles/output.css";

import { combinados, data, instrutor, intro, trabalho } from "./data.js";

const renderSection = (x, cb) => {
  const blur = [7].includes(x.id) ? "blur-sm" : "";
  return `
    <div class="p-8 border border-gray-700/40 bg-gray-700/30 text-white rounded-3xl ${blur}">
        <h3 class="text-2xl font-bold uppercase">
          ${cb ? cb(x) : x.title}
        </h3>
        <ul>
        ${x.items
          .map((item) => {
            return `
            <li class="mt-6 pt-6 border-t border-t-gray-800 flex flex-col gap-2 sm:flex-row sm:gap-6">
              <h4 class="flex-1 font-semibold text-lg">${item.title}</h4>
              <div class="flex-1 text-sm text-gray-600">
                <ul class="flex flex-col gap-2 list-disc pl-3 sm:pl-0">
                  ${item.descriptions
                    .map((description) => {
                      return `
                      <li>${description}</li>
                    `;
                    })
                    .join("")}
                </ul>
              </div>
            </li>
          `;
          })
          .join("")}
        </ul>
    </div>
  `;
};

const renderLessonTitle = (x) => {
  return `
      <span class="w-4 min-h-1 bg-gradient-to-r from-blue-500 to-blue-200 inline-flex"></span>
      <span class="text-ada-primary">AULA ${x.id}</span>
        <span class=" text-gray-600">//</span>
      <span class="text-lg">${x.title}</span>
    `;
};

const renderTrabalhoTitle = (x) => {
  return `
      <span class="w-4 min-h-1 bg-gradient-to-r from-blue-500 to-blue-200 inline-flex"></span>
      <span class="text-ada-primary">Criar um KANBAN</span>
    `;
};

const render = (data, $dom, cb) => {
  let html = "";

  data.forEach((x) => {
    html += renderSection(x, cb);
  });

  $dom.innerHTML = html;
};

document.addEventListener("DOMContentLoaded", () => {
  const $nav = document.getElementById("js-nav");
  const $intro = document.getElementById("js-intro");
  const $instrutor = document.getElementById("js-instrutor");
  const $combinados = document.getElementById("js-combinados");
  const $aulas = document.getElementById("js-aulas");
  const $trabalho = document.getElementById("js-trabalho");

  render(intro, $intro);
  render(instrutor, $instrutor);
  render(combinados, $combinados);
  render(data, $aulas, renderLessonTitle);
  render(trabalho, $trabalho, renderTrabalhoTitle);

  $nav.addEventListener("click", (e) => {
    // e.preventDefault();
    const $el = e.target.closest("a");
    if (!$el) return;
    if ($el.classList.contains("active")) return;
    $el.classList.add("active");

    // remove from other elements
    const navs = Array.from($nav.querySelectorAll(".nav"));
    navs.forEach((nav) => {
      if (nav !== $el) {
        nav.classList.remove("active");
      }
    });
  });
});
