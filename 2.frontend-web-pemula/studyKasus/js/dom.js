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

function makeToDo(data, timesTamp) {
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
    container.append(createCheckButton());

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
    taskElement.remove();
}

function createCheckButton() {
    return createButton("check-button", function(event) {
        addTaskToCompleted(event.target.parentElement);
    });
}