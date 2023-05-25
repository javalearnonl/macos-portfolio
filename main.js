const myLink = document.getElementById("myLink");
const myDiv = document.getElementById("kapsa");


myLink.addEventListener("click", function (event) {
  event.preventDefault(); // Отменяем действие по умолчанию для ссылки (переход по ссылке)
  if (myDiv) { // Проверяем, найден ли элемент с id "myDiv"
    myDiv.classList.add("hidden");
  }
});
const projectFolder = document.querySelector('.project-folder');
const showProject = document.querySelector('#project');

// Добавить обработчик события "click" на ссылку
projectFolder.addEventListener('click', () => {
  // Убрать класс "hidden" с блока
  showProject.classList.remove('hidden');
});
const closeProject = document.getElementById("close-project");
const projectWindow = document.getElementById("project");


closeProject.addEventListener("click", function (event) {
  event.preventDefault(); 
  if (projectWindow) { 
    projectWindow.classList.add("hidden");
  }
});
// 
// README
const closeReadMe = document.getElementById("close-readme");
const readMeWindow = document.getElementById("readme");


closeReadMe.addEventListener("click", function (event) {
  event.preventDefault(); 
  if (readMeWindow) { 
    readMeWindow.classList.add("hidden");
  }
});
// 
const readMeFolder = document.querySelector('.readme-folder');
const showReadme = document.querySelector('#readme');

// Добавить обработчик события "click" на ссылку
readMeFolder.addEventListener('click', () => {
  // Убрать класс "hidden" с блока
  showReadme.classList.remove('hidden');
});

      window.onload = function () {
        document.body.classList.add("loaded_hiding");
        window.setTimeout(function () {
          document.body.classList.add("loaded");
          document.body.classList.remove("loaded_hiding");
        }, 4000);
      };
