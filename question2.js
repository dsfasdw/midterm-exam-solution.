let tasks = []; 


function createTask(id, name, description) {
    const task = { id, name, description };
    tasks.push(task);
    return task;
}

function getAllTasks() {
    return tasks;
}

function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        return task;
    }
    return null;
}

function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        return deletedTask[0];
    }
    return null;
}


createTask(1, 'Task 1', 'This is task 1');
createTask(2, 'Task 2', 'This is task 2');
console.log(getAllTasks()); 

updateTask(1, 'Updated Task 1', 'This is the updated task 1');
console.log(getAllTasks());  

deleteTask(2);
console.log(getAllTasks());  
