/*
A través de un input, el usuario pudiese ir añadiendo tareas a una lista. 
Simplemente os pongo una lista con el proceso que debe de ver el usuario:

1. El usuario empieza viendo un *input* con un *botón*
2. El usuario escribe algo en el input y pulsa el botón
3. Al pulsar el botón, el texto se añade a una *lista* y el
 input queda nuevamente en blanco

Mucho ánimo y de nuevo, cualquier duda que tengáis, 
aquí estamos los profesores para ayudaros :sonrisa:!
*/
const taskMessage = document.querySelector('.task-message')
  const addTaskButton = document.querySelector('.add-task-button')
  const taskList = document.querySelector('.task-list')

  addTaskButton.addEventListener('click', function (event) {
    const taskTextContent = taskMessage.value
    const liNodeElement = document.createElement('li')
    liNodeElement.append(taskTextContent)
    taskList.append(liNodeElement)
    taskMessage.value = ''


