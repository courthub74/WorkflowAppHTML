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
        console.log(task_input_el.value);
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
            // console.log(task_input_el.value);
            // console.log(task_input_el.className);
            task_input_el.classList.add("crossed");
        })
    })
})