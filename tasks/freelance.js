
// Load the Window
window.addEventListener('load', () => {
    // Once the page is loaded
    // Create the form element added to the page using the id for the form
    const form = document.querySelector("#new-task-form");
    // Create the input element that's entered
    const input = document.querySelector("#new-task-input");
    // Create the list or tasks element
    const list_el = document.querySelector("#tasks");

    console.log(form);

    form.addEventListener('submit', (e) => {
        // keeps page from refreshing
        e.preventDefault();

        console.log("Submitted")

        // create task which is the value of input
        const task = input.value;

        // Error handling
        if (!task) {
            alert("Please enter your freelance job");
            return;
        }



        // TASK

        // create task element (DOM Node)
        const task_el = document.createElement('div');

        // add the task element to the list
        task_el.classList.add('task');




        // TASK CONTENT

        // create task content element
        const task_content_el = document.createElement('div');

        // add the task to the list
        task_content_el.classList.add('content');

        // task_content_el.innerText = task;

        // append the task content to the task element
        task_el.appendChild(task_content_el);

        // list_el.appendChild(task_el);




        // TASK INPUT

        // Create the task input element
        const task_input_el = document.createElement('input');
        // set it's class
        task_input_el.classList.add('text');
        // set it's ID
        task_input_el.setAttribute("id", "task");
        // set it's type
        task_input_el.type = 'text';
        // get the value from input
        task_input_el.value = task;
        // set it's attribute
        task_input_el.setAttribute('readonly', 'readonly');

        // append the input to the content
        task_content_el.appendChild(task_input_el);

        // console.log(task_content_el); 
        // The whole div
        // console.log(task_input_el.value);
        // The content of the div


        // ACTIONS

        // create the task action element
        task_actions_el = document.createElement('div');
        // add task action to the list
        task_actions_el.classList.add('actions');

        // ACTION BUTTONS

        // EDIT
        // create the task edit button
        const task_edit_el = document.createElement('button');
        // set it's class
        task_edit_el.classList.add('edit');
        // set the inner text
        task_edit_el.innerText = "Edit";

        // DELETE
        // Create the task delete button
        const task_delete_el = document.createElement('button');
        // set it's class
        task_delete_el.classList.add('delete');
        // set the inner text
        task_delete_el.innerText = "Delete";

        // CROSS
        // create the cross button
        const task_cross_el = document.createElement('button');
        // set it's class
        task_cross_el.classList.add('cross');
        // set the inner text
        task_cross_el.innerText = "Cross";



        // APPENDS OF THE ACTIONS

        // edit to actions
        task_actions_el.appendChild(task_edit_el);
        // delete to actions
        task_actions_el.appendChild(task_delete_el);
        // cross to actions
        task_actions_el.appendChild(task_cross_el);

        // actions to task 
        task_el.appendChild(task_actions_el);

        // task to list
        list_el.appendChild(task_el);

        // set's input to blank after button clicked
        input.value = '';

        // Event listener's for the Edit and Delete Buttons
        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                // set innerText to save (turns into save)
                task_edit_el.innerText = "Save";
                // remove 'readonly' attribute
                task_input_el.removeAttribute("readonly");
                // set focus function (makes the element active)
                task_input_el.focus();
            } else {
                // set innerText to edit
                task_edit_el.innerText = "Edit";
                // set Attribute back to readonly
                task_edit_el.setAttribute("readonly", "readonly");
            }
        });

        // Set delete action
        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        })

        // set the cross action
        // needs to change the class of the input to that of cross
        // start with the button
        task_cross_el.addEventListener('click', (e) => {
            // let cross = task_cross_el.innerText;
            // console.log(cross);
            if (task_cross_el.innerText === "CROSS"){
                // if the buttons texts says 'Cross'
                task_input_el.classList.add("crossed");
                // set the input's class to crossed
                task_cross_el.innerText = "UNCROSS";
                // set the button innertext
                // task_edit_el.remove('button')
                // hide the button element
                task_edit_el.style.display = 'none';
                // remove the edit button
            } else if (task_cross_el.innerText === "UNCROSS") {
                // remove the cross css
                task_input_el.classList.remove("crossed");
                // change the text of the button
                task_cross_el.innerText = "CROSS";
                // bring the button back
                task_edit_el.style.display = 'block';
            }
           
        })
        // NEXT toggle back the uncross and add back the edit button
    })
    
})

// config firebase
const firebaseConfig = {
    apiKey: "AIzaSyATc5lxId7q3aWvm2bTy2oVjX3JzqJJszE",
    authDomain: "workflowapp-c191d.firebaseapp.com",
    databaseURL: "https://workflowapp-c191d-default-rtdb.firebaseio.com",
    projectId: "workflowapp-c191d",
    storageBucket: "workflowapp-c191d.appspot.com",
    messagingSenderId: "205004352373",
    appId: "1:205004352373:web:89d233c2cdc4e4ccbf413c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference your database (id of the form)
var freelanceFormDB = firebase.database().ref("new-task-form")

// Event Listener to submit button
document.getElementById("new-task-form").addEventListener("submit", submitForm);

// create the submit form function called above
function submitForm(e) {
    // keeps page from refreshing
    e.preventDefault();

    // get the value of the task entered
    var task = getElementVal("new-task-input");

    // test print in console the value added
    console.log(task);

    // save to database
    saveMessages(task);
}

// NOW save the messages to the database
const saveMessages = (task) => {
    var newFreelance = freelanceFormDB.push();

    newFreelance.set({
        task: task,
    });
};

// getElement Value
const getElementVal = (id) => {
    return document.getElementById(id).value;
}

// NOW YOU NEED TO DISPLAY THE DB TO THE PAGE
// Map thru items added
// GETS items added 
// iterates through items added 
// Displays items added

function getItems() {
    // the collection (form) .onSnapshot(socket)
    // loop through the snapshot
    // first console log the snapshot to see what ya got

    // let items = [];
    // snapshot.docs.forEach((doc) => {
        // items.push(doc.data())
    // })
    // console.log(items);
}

// next you need to get the ID
// SO items.push({
    // id: doc.id,
    // ...doc.data()
    // ABOVE is a spread operator
// });

// NOW make a new function to generate items
// which loops through every single item

function generateItems(items) {
    // items.forEach((item) => {
        // console.log(item);
    // })
}

getItems();
