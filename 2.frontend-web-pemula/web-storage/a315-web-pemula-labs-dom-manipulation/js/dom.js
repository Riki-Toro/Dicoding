const UNCOMPLETED_LIST_TODO_ID = "todos";
const COMPLETED_LIST_TODO_ID = "completed-todos";
const TODO_ITEMID = "itemID"; // sebagai object key yang akan digunakan untuk menyimpan id dari masing-masing task pada objek HTMLElement.

function makeTodo(data /* string */, timestamp /* string */, isCompleted /* boolean */) {

    const textTitle = document.createElement("h2");
    textTitle.innerText = data;

    const textTimestamp = document.createElement("p");
    textTimestamp.innerText = timestamp;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner")
    textContainer.append(textTitle, textTimestamp);

    const container = document.createElement("div");
    container.classList.add("item", "shadow")
    container.append(textContainer);
    
    if(isCompleted){
        container.append(
            createUndoButton(),
            createTrashButton()
        );
    } else {
        container.append(
            createCheckButton()
        );
    }

    return container;
}

function createUndoButton() {
    return createButton("undo-button", function(event){
        undoTaskFromCompleted(event.target.parentElement);
    });
}

function createTrashButton() {
    return createButton("trash-button", function(event){
        removeTaskFromCompleted(event.target.parentElement);
    });
}

function createCheckButton() {
    return createButton("check-button", function(event){
        addTaskToCompleted(event.target.parentElement);
    });
}

function createButton(buttonTypeClass /* string */, eventListener /* callback function */) {
    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);
    button.addEventListener("click", function (event) {
        eventListener(event);
    });
    return button;
}


function addTodo() {
    const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID);
    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;

    const todo = makeTodo(textTodo, timestamp, false);
    const todoObject = composeToDoObject(textTodo, timestamp, false);
    // untuk menyimpan objek task yang kita buat ke dalam variabel todos yang telah dibuat sebelumnya. Hal ini diperlukan supaya kita bisa dengan mudah memuat dan menyimpan data dari dan ke web storage.

    todo[TODO_ITEMID] = todoObject.id; // penandaan
    todos.push(todoObject); // untuk menambahkan suatu elemen di dalam array. Elemen akan bertambah pada posisi sebelah kanan, atau bagian akhir.

    uncompletedTODOList.append(todo);
    updateDataToStorage();
}

function addTaskToCompleted(taskElement /* HTMLELement */) {
    const listCompleted = document.getElementById(COMPLETED_LIST_TODO_ID);
    const taskTitle = taskElement.querySelector(".inner > h2").innerText;
    const taskTimestamp = taskElement.querySelector(".inner > p").innerText;

    const newTodo = makeTodo(taskTitle, taskTimestamp, true);
    const todo = findToDo(taskElement[TODO_ITEMID]); //  untuk memperbarui status (isCompleted) dari masing-masing objek TODO. Pertama, kita mencari objek TODO yang akan di-update pada array todos yang telah dideklarasikan sebelumnya dengan menggunakan fungsi findTodo().  
    todo.isCompleted = true; //ubah property isCompleted menjadi true supaya TODO ini ditandai ‘selesai’
    newTodo[TODO_ITEMID] = todo.id; // update lagi identifier yang ada pada elemen TODO yang baru

    listCompleted.append(newTodo);
    taskElement.remove();

    updateDataToStorage();
}

function removeTaskFromCompleted(taskElement /* HTMLELement */) {
    const todoPosition = findToDoIndex(taskElement[TODO_ITEMID]); // untuk menghapus data dari array TODO berdasarkan posisi data pada array yang diperoleh dari findTodoIndex(). Fungsi ini mempunyai cara kerja yang sama dengan find(), yaitu mencari objek TODO. Namun, bedanya nilai yang dikembalikan (return) pada fungsi ini adalah integer dari posisi objek yang match.
    todos.splice(todoPosition, 1); // menghapus objek tersebut dengan menggunakan fungsi splice().

    taskElement.remove();
    updateDataToStorage();
}

function undoTaskFromCompleted(taskElement /* HTMLELement */){
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_TODO_ID);
    const taskTitle = taskElement.querySelector(".inner > h2").innerText;
    const taskTimestamp = taskElement.querySelector(".inner > p").innerText;

    const newTodo = makeTodo(taskTitle, taskTimestamp, false);

    const todo =findToDo(taskElement[TODO_ITEMID]);
    todo.isCompleted = false;
    newTodo[TODO_ITEMID] = todo.id;

    listUncompleted.append(newTodo);
    taskElement.remove();

    updateDataToStorage();
}