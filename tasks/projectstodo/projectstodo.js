// JS for the Projects Todos

// set up firebase
const firebaseConfig = {
    apiKey: "AIzaSyATc5lxId7q3aWvm2bTy2oVjX3JzqJJszE",
    authDomain: "workflowapp-c191d.firebaseapp.com",
    databaseURL: "https://workflowapp-c191d-default-rtdb.firebaseio.com",
    projectId: "workflowapp-c191d",
    storageBucket: "workflowapp-c191d.appspot.com",
    messagingSenderId: "205004352373",
    appId: "1:205004352373:web:89d233c2cdc4e4ccbf413c"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// create a reference for your database (give it a name to id by in firebase)
    // access the fb db
    // name it (set it's reference)
    // store that all in a variable
var firebaseProjectsRef = firebase.database().ref("projects");

// test print
console.log("Here is the DB for the firebaseProjectsRef");
console.log(firebaseProjectsRef);

// NOW lets set up the page through the DOM

// Whole Page
window.addEventListener('load', () => {
    // Once the page is loaded
    // queryselect the whole form by id
        // you will add the event listener to this
        const form = document.querySelector("#project-fill-form");
        // queryselect the input field
        const input = document.querySelector("#new-project-input");
        // queryselect the output field
        const project_list_element = document.querySelector("#project-list");

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
            firebaseProjectsRef.push(project);
            // test print the input
            console.log(project);
        });

        // THIS part is the todo list that renders FROM the database

        // test print the firebase db object
        console.log(firebaseProjectsRef);

        // utilize the on function on the db reference
        // based on value
        // pass getProject and errProject functions
            // getProject locates fb db
            // errProject test for errors
                // i.e. permissions, other blocks
        firebaseProjectsRef.on('value', getProject, errProject);

        // create the getProject function
            // pass the arg 'projectitem'
        function getProject(projectitem){
            // test print the value of the arg
            console.log(projectitem.val());
            // store the value in a variable
            var projects = projectitem.val();
            // create an array called data 
                // that is going to consist of the data to push to firebase
            var data = [];
            // NOW loop through the projects (input values) and push them into the 
                // data array
            Object.keys(projects).forEach(element => {
                // test print the todo item with it's key
                console.log('item key and text ===', element, projects[element]);
                // NOW push the id (element-keys) and item (project)
                    // to the data array
                data.push({
                    id: element,
                    // item is value with id(key) set to the 'todo' name under the 
                        // firebase todo db list
                    item: projects[element]['project']
                })
            }); 
            // lets set a variable to get the keys of each todo item
            var keys = Object.keys(projects);
            // test print keys and projects
            console.log('Keys and Projects ===',keys, projects);
            // if there is a projects-list div 
            // then change the innerHTML of the projects-list div
            if (document.getElementById('projects-list')){
                document.getElementById('projects-list').innerHTML = '';
            }
            // iterate through the projectitems pushed to the data array
            for (let i = 0; i < data.length; i++){
                // store them in a variable
                var projectsall = data[i];
                // test print
                console.log('projectsall ===', projectsall);

                // NOW we build the list elements below
                    // so each time the form is submitted 
                        // a separate todo element is created 
                            // so it can be manipulated individually
                
                            // start building the list elements 
                // in the for loop for each one

                // PROJECTS DIV

                // create the 'project_items' div
                const project_items = document.createElement('div');

                // test print it
                console.log(project_items);

                // add the class to the div
                project_items.classList.add('project_items');

                // append the todo div to the todos-list
                project_list_element.appendChild(project_items);

                // CONTENT DIV

                // create the 'content' div 
                    // this is setup as an input that displays the output
                const project_content_div = document.createElement('div');

                // test print it
                console.log(project_content_div);

                // set the div id
                project_content_div.setAttribute('id', 'content');

                // append the content div to the todo div
                project_items.appendChild(project_content_div);

                // INPUT ELEMENT
                    // create the input element that's going to be inside of the content
                    // which is actually a display of the output
                        // but you need to set as readonly so ....
                const project_input_element = document.createElement('input');

                // test print it
                console.log(project_input_element);

                // add it's class
                project_input_element.classList.add('input');
                // set it's type
                project_input_element.type = "text";
                // set it's id
                project_input_element.id = "input";

                // set it's value. Which is the input value 'todo' variable
                // you need to redefine 'todo' in this for loop
                project_input_element.value = projectsall;
                // set it's style
                project_input_element.style.width = "300px";
                // set it's attribute
                project_input_element.setAttribute('readonly', true);

                // append the input element to the content div
                    // which was appended to the todos div earlier
                project_content_div.appendChild(project_input_element);
            }
            
        }

        // create the errTodo function
        function errProject(err){
            console.log(err);
        }
});