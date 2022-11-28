// JS for the Projects Todos 2nd version

// lets set up firebase
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

// create a reference for your database (give it a name to id by in firebase)
    // access the fb db
    // name it (set it's reference)
    // store that all in a variable
var firebaseProject = firebase.database().ref("firebaseproject");

// test print
console.log("Here is the DB:", firebaseProject);

// event listener for the elements of the WHOLE PAGE
window.addEventListener('load', () => {
    // Once the page is loaded
    // queryselect the whole form by id
        // you will add the event listener to these below
    // FIRST the FORM
    const form = document.querySelector("#project-fill-form");
    // NEXT the INPUT
    const input = document.querySelector("#new-project-input");
    // NEXT the OUTPUT
    const project_list_element = document.querySelector("#project_block");

    // NOW populate the list element upon the submit button click
        // THIS part is the form that goes TO the database
    form.addEventListener('submit', (e) => {

        // keeps page from refreshing
        e.preventDefault();

        // test print the submit button
        console.log("Project submit button pressed");

        // get the value of the 'input' variable above and store it in another variable
            // get the input by id
        const project = input.value;

        // Error handling
            // if no value entered just alert
        if (!project) {
            alert("Please fill out the project field");
            return;
        }

        // clear the input field after button pressed
        input.value = '';

        // TO DATABASE

        // NOW this is where we push the todo variable to the firebaseTodo db reference
        firebaseProject.push({project});
        // test print the input
        console.log('PROJECT===',project);
    })
})