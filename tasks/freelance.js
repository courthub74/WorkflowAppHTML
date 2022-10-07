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
    })
})