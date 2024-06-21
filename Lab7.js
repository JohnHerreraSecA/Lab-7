function addTask() {
    // Get the input field and value
    var taskInput = document.getElementById("task");
    var taskValue = taskInput.value;

    // Create a new list item and check box
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    // Add the task text to the list item
    var textNode = document.createTextNode(taskValue);
    li.appendChild(textNode);

    // Add the list item to the task list
    var ul = document.getElementById("task-list");
    ul.appendChild(li);

    // Create and add the delete button to the list item
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
    ul.removeChild(li);
};
    li.appendChild(deleteButton);

    // Clear the input field
    taskInput.value = "";
}