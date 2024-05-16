const taskList = document.getElementById("ul");
console.log(taskList);
taskList.addEventListener('click', (e) => {
    let className = e.target.className;
    if(Object.is(className, "delete")) {
        let li = e.target.parentElement;
        taskList.removeChild(li);
    }
})
const searchTask = document.forms["search"]
const listOfTask = document.querySelectorAll('#task-list li .name');
searchTask.addEventListener('keyup', function(e) {
    listOfTask.forEach((task) => {
        let input = e.target.value.toLowerCase();
        let title = task.textContent.toLowerCase();
        let isIncluded = title.startsWith(input)
        let parentNode = task.parentNode;
        if(isIncluded) {
            parentNode.style.display = "block";
        }else {
            parentNode.style.display = "none";
        }
    })
})
const addTask = document.forms["add-task"];
console.log(addTask);
addTask.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = addTask.querySelector("input").value.toString();
    if(inputValue){
        const liTag = document.createElement("li");
        const firstSpan = document.createElement("span");
        const input = document.createElement("input");
        const lastSpan = document.createElement("span");

        firstSpan.className = "name";
        lastSpan.className= "delete";
        input.type= 'checkbox';

        liTag.appendChild(firstSpan);
        liTag.appendChild(lastSpan);
        liTag.appendChild(input);

        firstSpan.textContent = inputValue;
        lastSpan.textContent = "delete";
        taskList.prepend(liTag)

        addTask.reset();

    }
})