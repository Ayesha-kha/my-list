import inquirer from "inquirer";
let myList = [];
let condition = true;
while (condition) {
    let addItem = await inquirer.prompt([
        {
            name: "eidList",
            type: "input",
            message: "What do you want to add in your Eid list?",
        },
        {
            name: "newItem",
            type: "confirm",
            message: "Are you sure you do not want anything?",
            default: "false",
        },
    ]);
    myList.push(addItem.eidList);
    condition = addItem.newItem;
    console.log(`Your final list is ${myList}`);
}
