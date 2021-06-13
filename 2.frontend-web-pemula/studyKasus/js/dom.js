const UNCOMPLETED_LIST_TODO_ID = "todos";
const COMPLETED_LIST_TODO_ID = "completed-todos";

function addToDo() {

    const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID);

    const titleText = document.getElementById('title').value;
    const tanggal = document.getElementById('date').value;

    console.log('teks ' + titleText);
    console.log('waktu ' + tanggal);

    const todo = makeToDo(titleText, tanggal);
    uncompletedTODOList.append(todo);
}

function makeToDo(data, timesTamp, isCompleted) {
    const textTitle = document.createElement('h2');
    textTitle.innerText = data;

    const textTimestamp = document.createElement('p');
    textTimestamp.innerText = timesTamp;

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle, textTimestamp);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);
    // container.append(createCheckButton());

    if(isCompleted) {
        container.append(createUndoButton(), createTrashButton());
    } else {
        container.append(createCheckButton());
    }

    return container;
}


function createButton(buttonTypeClass, eventListener) {
    const button = document.createElement('button');
    button.classList.add(buttonTypeClass);
    button.addEventListener('click', function(event) {
        eventListener(event);
    });
    return button;
}

function addTaskToCompleted(taskElement) {
    const taskTitle = taskElement.querySelector('.inner > h2').innerText;
    const taskTimesTamp = taskElement.querySelector('.inner > p').innerText;

    const newTodo = makeToDo(taskTitle, taskTimesTamp, true);
    const listCompleted = document.getElementById(COMPLETED_LIST_TODO_ID);
    listCompleted.append(newTodo);

    taskElement.remove();
}

function createCheckButton() {
    return createButton("check-button", function(event) {
        addTaskToCompleted(event.target.parentElement);
    });
}

function removeTaskFromCompleted(taskElement) {
    taskElement.remove();
}
function createTrashButton() {
    return createButton("trash-button", function(event) {
        removeTaskFromCompleted(event.target.parentElement);
    });
}

function undoTaskFromCompleted(taskElement) {
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_TODO_ID);
    const taskTitle = taskElement.querySelector('.inner > h2').innerText;
    const taskTimesTamp = taskElement.querySelector('.inner > p').innerText;

    const newTodo = makeToDo(taskTitle, taskTimesTamp, false);

    listUncompleted.append(newTodo);
    taskElement.remove();
}
function createUndoButton() {
    return createButton("undo-button", function(event) {
        undoTaskFromCompleted(event.target.parentElement);
    })
}