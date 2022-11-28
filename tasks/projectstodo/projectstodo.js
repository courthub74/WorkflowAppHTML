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
        // queryselect the output fields field
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
            firebaseProjectsRef.push({project});
            // test print the input
            console.log('PROJECT===',project);
        });

        // // clear the project block each time
        // if (project_list_element){
        //     project_list_element.innerHTML = '';;
        // }
        

        // FROM DATABASE

        // test print the firebase db object
        // console.log(firebaseProjectsRef);

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
            // console.log('projectitem ===',projectitem);
            // test print the value of the arg
            // console.log(projectitem.val());
            // store the value in a variable
            var projects = projectitem.val();
            // test print
            console.log('projects ===', projects);

            // NOW get the keys and items entered 
                // to push them to an array 
                    // in order to have access to deleting and editing

                    
            // create an array called data 
                // that is going to consist of the data to push to firebase
            var data = [];
            // NOW loop through the projects (input values) and push them into the 
                // data array
            Object.keys(projects).forEach(element => {
                // test print the todo item with it's key
                // console.log('item key and text ===', element, projects[element]);
                // NOW push the id (element-keys) and item (project)
                    // to the data array
                data.push({
                    id: element,
                    // item is value with id(key) set to the 'todo' name under the 
                        // firebase todo db list which happens to be projects
                            // the last bracket is for the render to locate the new key set 
                                // push the item with the key into the project name key
                    item: projects[element]['project']
                })
                // test print the data array
                    // it prints for every todo item entered
                console.log('data ===', data);
            }); 
                 // clear the project block each time
                if (project_list_element){
                    project_list_element.innerHTML = '';;
                }
        
            // iterate through the projectitems pushed to the data array
            for (let i = 0; i < data.length; i++){
                // store them in a variable
                var projectsall = data[i];
                // test print
                console.log('projectsall ===', projectsall);


                // THE ELEMENT CREATION PART

                // NOW we build the list elements below
                    // so each time the form is submitted 
                        // a separate todo element is created 
                            // so it can be manipulated individually
                
                            // start building the list elements 
                // in the for loop for each one
            

                // BELOW is for EACH todo item that gets populated
                // PROJECT-ITEMS DIV

                // create the 'project_items' div
                const project_items = document.createElement('div');

                // test print it
                // console.log(project_items);

                // add the class to the div
                project_items.classList.add('project_items');

                // append the todo div to the todos-list
                project_list_element.appendChild(project_items);

                // CONTENT DIV

                // create the 'content' div 
                    // this is setup as an input that displays the output
                const project_content_div = document.createElement('div');

                // test print it
                // console.log(project_content_div);

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
                // console.log(project_input_element);

                // add it's class
                project_input_element.classList.add('input');
                // set it's type
                project_input_element.type = "text";
                // set it's id
                project_input_element.id = "input";

                // set it's value. Which is the input value 'todo' variable
                // you need to redefine 'todo' in this for loop
                project_input_element.value = projectsall.item;
                // set it's style
                project_input_element.style.width = "300px";
                // set it's attribute
                project_input_element.setAttribute('readonly', true);

                // append the input element to the content div
                    // which was appended to the todos div earlier
                project_content_div.appendChild(project_input_element);



                // NOW FOR THE BUTTONS

                // FIRST SET THE BUTTONS DIV

                // BUTTONS DIV

                // this is the bar of buttons (edit, delete, cross-off)
                const project_buttons_div = document.createElement('div');

                // test print
                // console.log(project_buttons_div);

                // set it's class
                project_buttons_div.classList.add('buttons');

                // append the buttons div to the todos div
                    // REMEMBER parent first and then appendChild to it
                        // this is separate from the input on the todos div
                project_content_div.appendChild(project_buttons_div);

                // NOW to put buttons on it



                // EDIT BUTTON

                // create the edit button
                const project_edit_button = document.createElement('button');

                // test print
                console.log(project_edit_button);

                // set it's class
                project_edit_button.classList.add('edit');

                // set the id (for the key of the firebase item)
                    // the id is the actual key
                project_edit_button.setAttribute('id', projectsall.id);

                // set the innerText
                project_edit_button.innerText = "edit";

                // append edit button to the buttons div
                project_buttons_div.appendChild(project_edit_button);



                // DELETE BUTTON

                // create the delete button
                const project_delete_button = document.createElement('button');

                // test print
                // console.log(project_delete_button);

                // set it's class
                project_delete_button.classList.add('delete');

                // set the id (for the key of the firebase item)
                    // the id is the actual key
                project_delete_button.setAttribute('id', projectsall.id);

                // set the innerText
                project_delete_button.innerText = "delete";

                // append delete button to the buttons div
                project_buttons_div.appendChild(project_delete_button);



                // CROSS OFF BUTTON

                // create the cross off button
                const project_cross_button = document.createElement('button');

                // set it's class
                project_cross_button.classList.add('cross');

                // NOTE this one doesn't need an ID 
                    // since it's just a css change
                        // nothing to do with the database

                // set the innerText
                project_cross_button.innerText = "cross-off";

                // test print
                // console.log(project_cross_button);

                // append cross button to the buttons div
                project_buttons_div.appendChild(project_cross_button);

                // EVENT LISTENER TIME

                // EDIT BUTTON
                    // this is where you:
                        // set the innertext change on the button
                        // toggle the readonly attribute
                        // edit the changes in firebase
                project_edit_button.addEventListener('click', (e) => {
                    // store the id in a variable that is the target of event (the key)
                    let id = e.target.id;
                    // check the text in order to change it
                    if (project_edit_button.innerText.toLowerCase() === "edit"){
                        // test print text with the id
                        // console.log(project_edit_button, id);
                        // change the innerText
                        project_edit_button.innerText = "SAVE";
                        // remove the readonly attribute from the input field so you can edit the field
                        project_input_element.removeAttribute('readonly', true);
                        // place the cursor inside the field to be edited
                        project_input_element.focus();
                    } else {
                        // check the text in order to change it
                        if (project_edit_button.innerText.toLowerCase() === "save"){
                            // test print text with the id
                            // console.log("save button pressed", id);
                            // change the innerText
                            project_edit_button.innerText = "EDIT";
                            // set the readonly attribute to the input field so you can't edit
                            project_input_element.setAttribute('readonly', true);
                            // NOW save the change to firebase
                            // NOW keep the edit in firebase
                            let updated = project_input_element.value;
                            // test print
                            // console.log(updated, id);
                            // test print db + updated element
                            console.log(`projects ${id}`);
                            console.log(updated);
                            // NOW edit in firebase
                                // locate the firebase reference by each item id
                                    // apply the update function
                                        // it sets updated value with a new key
                                            // that is declared earlier in the data.push ['project']
                            firebase.database().ref(`projects/${id}`).update({project: updated});
                        }
                    }
                })
            }
            
        }

        // create the errTodo function
        function errProject(err){
            console.log(err);
        }
});