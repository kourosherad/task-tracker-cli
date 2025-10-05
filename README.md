# Task Tracker CLI - JavaScript
A simple Command Line Interface (CLI) task tracker built with Node.js. Track your tasks, mark them as pending, in progress, or done, and manage them easily via the terminal. Features include adding tasks, listing tasks, marking them as done or in progress, deleting tasks by ID, and clearing all tasks. Tasks are stored in a `task.json` file with unique IDs that persist even if tasks are deleted. Multi-word task names are supported using quotes.

## Usage
Add a task: `node index.js add "Task description"`  
List all tasks: `node index.js list`  
Mark a task as in progress: `node index.js mark-in-progress <task-id>`  
Mark a task as done: `node index.js mark-done <task-id>`  
Delete a task by ID: `node index.js delete <task-id>`  
Clear all tasks: `node index.js clear`  

## Task Statuses
`pending` – task not started  
`in progress` – task is being worked on  
`done` – task completed  

## Installation
Clone the repository: `git clone https://github.com/yourusername/task-tracker-js.git`  
Navigate to the project folder: `cd task-tracker-js`  
Make sure you have Node.js installed.  
Run commands via terminal as shown in Usage.  

## Task Storage
Tasks are stored in a `task.json` file in the project directory. Each task looks like this:
```json
{
  "id": 1,
  "title": "Study JavaScript",
  "status": "pending"
}

