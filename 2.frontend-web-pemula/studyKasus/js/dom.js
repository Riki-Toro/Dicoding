// const UNCOMPLETED_LIST_TODO_ID = "todos";
// // const COMPLETED_LIST_TODO_ID = "completed-todos";

// function addToDo() {

//     const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID);

//     const titleText = document.getElementById('title').value;
//     const tanggal = document.getElementById('date').value;

//     console.log('teks ' + titleText);
//     console.log('waktu ' + tanggal);

//     for (let i = 0; i < 5; i++) {
//         const todo = makeToDo();
//         uncompletedTODOList.append(todo);
//     }
// }

// function makeToDo() {
//     const textTitle = document.createElement('h2');
//     textTitle.innerText = 'tugas android';

//     const textTimestamp = document.createElement('p');
//     textTimestamp.innerText = '2021-06-13';

//     const textContainer = document.createElement('div');
//     textContainer.classList.add('inner');
//     textContainer.append(textTitle, textTimestamp);

//     const container = document.createElement('div');
//     container.classList.add('item', 'shadow');
//     container.append(textContainer);
//     // container.append(createCheckButton());

//     return container;
// }


// const UNCOMPLETED_LIST_TODO_ID = "todos";

function addTodo() {
    // const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID );

    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;
    console.log("todo" + textTodo);
    console.log("timestamp" + timestamp);

    // for (let i = 0; i < 10; i++) {
    //     const todo = makeTodo();
    //     uncompletedTODOList.append(todo);
    // }
}
// function makeTodo() {

//     const textTitle = document.createElement("h2");
//     textTitle.innerText = "Tugas Android";

//     const textTimestamp = document.createElement("p");
//     textTimestamp.innerText = "2021-05-01";

//     const textContainer = document.createElement("div");
//     textContainer.classList.add("inner")
//     textContainer.append(textTitle, textTimestamp);

//     const container = document.createElement("div");
//     container.classList.add("item", "shadow")
//     container.append(textContainer);

//     return container;
// }








// function createButton(buttonTypeClass, eventListener) {
//     const button = document.createElement('button');
//     button.classList.add(buttonTypeClass);
//     button.addEventListener('click', function(event) {
//         eventListener(event);
//     });
//     return button;
// }

// function addTaskToCompleted(taskElement) {
//     taskElement.remove();
// }

// function createCheckButton() {
//     return createButton("check-button", function(event) {
//         addTaskToCompleted(event.target.parentElement);
//     });
// }