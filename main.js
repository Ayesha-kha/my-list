#! /usr/bin/env node
import inquirer from "inquirer";
let myList = [];
// console.log(chalk.yellow.bold("\n \t Welcome to todo-list Application \n "));
let condition = true;
//   let listType = await inquirer.prompt([
//     {
//       name: "List",
//       type: "list",
//       message: "What type of todo-list do you want to make?",
//       choices: [
//         "Ramadan list",
//         "Eid list",
//         "Daily Routine list",
//         "Exam preparation list",
//         "other",
//       ],
//     },
//   ]);
//   while (condition) {
//   let addItem = await inquirer.prompt([
//     {
//       name: "addItem",
//       type: "input",
//       message: chalk.green("Please add item in your todo-list!"),
//     },
//   ]);
//   myList.push(addItem.addItem);
//   console.log( `${addItem.addItem} task added suuceesfully in your todo-list.`);
//   let addMore = await inquirer.prompt([
//     {
//       name: "more",
//       type: "confirm",
//       message: chalk.green("Do you want to add more task?"),
//       default:"false",
//     }
//   ]);
//  condition = addMore.more
// }
// console.log(`Yor updated todo list is ${myList}.`);
let moreOptions = async () => {
    while (condition) {
        let options = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "Select options which you want to do",
                choices: [
                    "Add task",
                    "Delete task",
                    "Update task",
                    "View todo-list",
                    "Exit",
                ],
            },
        ]);
        if (options.Opt === "Add task") {
            await addTask();
        }
        else if (options.Opt === "View todo-list") {
            await viewList();
        }
        else if (options.Opt === "Exit") {
            condition = false;
        }
        else if (options.Opt === "Delete task") {
            await deleteTask();
        }
        else if (options.Opt === "Update task") {
            await updateTask();
        }
    }
};
let addTask = async () => {
    let add = await inquirer.prompt([
        {
            name: "adtask",
            type: "input",
            message: "Enter your new task:",
        },
    ]);
    myList.push(add.adtask);
    console.log(`\n ${add.adtask} task added successfully in todo list`);
};
let viewList = async () => {
    console.log("\n Your todo list is :");
    myList.forEach((task, index) => {
        console.log(`${index + 1}, ${task}`);
    });
};
let deleteTask = async () => {
    await viewList();
    let taskIndex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the 'index number' which you want to delete:",
        }]);
    let deletedTask = myList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} This task has been deleted successfully in your todo-list`);
};
let updateTask = async () => {
    await viewList();
    let updatedTask = await inquirer.prompt([{
            name: "update",
            type: "number",
            message: "Enter the ' index number' which you want to update:",
        },
        {
            name: "new_task",
            type: "input",
            message: "Enter the updated task:",
        }
    ]);
    myList[updatedTask.update - 1] = updatedTask.new_task;
    console.log(`\n Task at index no. ${updatedTask.update - 1} updated successfully.\n`);
};
moreOptions();
