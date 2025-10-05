const fs = require('fs')


console.log("Task tracker is running...")

const args = process.argv.slice(2);
const command = args[0];
const value = args[1];
const filePath = "./task.json"  // The file where tasks will be stored


// Step 1: Check if file exist or not :
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([])) // Creates a file with a empty array
}


// Step 2: Read tasks from thr file 
const data = fs.readFileSync(filePath, "utf8");
const tasks = JSON.parse(data);



// Adding the tasks 
if (command === "add") {
  if (!value) {
    console.log("❌ Please provide a task description.");
    process.exit(1);
  }

  const newTask = {
    id: tasks.length + 1,
    title: value,
    status: "not done",
  };

  tasks.push(newTask);
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log(`✅ Task added: "${value}"`);
}


// Showing the list of tasks
else if (command === "list") {
  if (tasks.length === 0) {
    console.log("📭 No tasks found.");
  } else {
    console.log("📝 Your tasks:");
    tasks.forEach((task) => {
      console.log(`${task.id}. ${task.title} [${task.status}]`);
    });
  }
}

// Done or in the progress 
else if (command === "mark-in-progress" || command === "mark-done") {
  if (!value) {
    console.log("Please provide the task id to update");
    process.exit(1);
  }

  const taskId = parseInt(value);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    console.log(`Task with ID ${taskId} not found!.`);
    process.exit(1);
  }

  task.status = command === "mark-done" ? "done" : "in progress";

  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log(`Task ${taskId} marked as ${task.status}.`)
}

// Deleting the tasks
else if (command === "delete") {
  if (!value) {
    console.log(`Please provide the task ID to delete`);
    process.exit(1);
  }

  const taskId = parseInt(value);
  const index = tasks.findIndex((t) => t.id === taskId);

  if (index === -1) {
    console.log(`⚠️ Task with ID ${taskId} not found.`);
    process.exit(1);
  }

  const removed = tasks.splice(index, 1); // remove one element at index 
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

  console.log(`✅ Task ${removed[0].id} deleted: "${removed[0].title}"`);
}

// Clearing the list
else if (command === "clear") {
  fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  console.log("🗑️ All tasks have been deleted.");
}




