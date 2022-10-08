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

        // create task input (DOM Node)
        const task_el = document.createElement('div');

        // add the task input to the list
        task_el.classList.add('task');

        // create task input element
        const task_content_el = document.createElement('div');

        // add the task to the list
        task_content_el.classList.add('content');

        // append the task content to the task element
        task_el.appendChild(task_content_el);

        // Create the task input element
        const task_input_el = document.createElement('input');
        // set it's class
        task_input_el.classList.add('text');
        // set it's type
        task_input_el.type = 'text';
        // set it's attribute
        task_input_el.setAttribute('readonly', 'readonly');

        // append the input to the content
        task_content_el.appendChild(task_input_el);

        // create the task action element
        task_actions_el = document.createElement('div');
        // add task action to the list
        task_actions_el.classList.add('actions');
    })
})