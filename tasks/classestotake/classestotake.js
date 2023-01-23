// Send it to the Database first

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// create a reference for your database (give it a name to id by in firebase)
var firebaseClassesRef = firebase.database().ref("classes");

// test print
console.log("Here is the DB object for the firebaseClassesRef:", firebaseClassesRef);

// event listener for the elements of the WHOLE PAGE
window.addEventListener('load', () => {
    // Once the page is loaded
    // query the form field
        // the reason: to add an event listener to the form field
        const form = document.querySelector("#classes-fill-form");
        // queryselect the input field
            // the reason: to get the data submitted
        const input = document.querySelector("#classes-input");
        // queryselect the output fields field (list-elements)
            // the reason: to place the outputs as items
        const classes_list_element = document.querySelector("#classes_block");

        // NOW populate the list element upon the submit button click
        // THIS part is the form that goes TO the database
        form.addEventListener('submit', (e) => {

            // keeps page from refreshing
            e.preventDefault();

            // test print the submit button
            console.log("Classes submit button pressed");

            // get the value of the 'input' variable above and store it in anoter variable
            const classtotake = input.value;

            // for cross off
            // define crossed as false
            const crossed = false;

            // Error handling
            // if no value entered just alert
            if (!classtotake) {
                alert("Please fill out the class to take");
                return;
            }

            // clear the input field after button pressed
            input.value = '';

            // TO DATABASE

            // NOW this is where we push the todo variable to the firebaseTodo db reference
            // HERE is where you set the list for deliverable and crossed
                // set crossed as false by default
            // firebaseClassesRef.push({class});
            // store the push of fb ref into a variable
            var newClassRef = firebaseClassesRef.push();
            // now set the variable to the deliverable and crossed library
            newClassRef.set({
                classtotake,
                crossed: false
            });

            // test print the deliverable and crossed status
            console.log('CLASS ===', classtotake);
            console.log('CROSSED ===', crossed);
        });

        // FROM DATABASE

        // test print the firebase db object
        // console.log(firebaseDeliverablesRef);

        // utilize the on function on the db reference
        // based on value
        // pass getDeliverable and errDeliverable functions
            // getDeliverable locates fb db in order to get the values
            // errDeliverable test for errors
                // i.e. permissions, other blocks
        firebaseClassesRef.on('value', getClass, errClass);
        // create the getDeliverables function
            // pass the arg 'deliverableitem' which comes from the on function
        function getClass(classitem){
            console.log('classitem ===', classitem);
            // test print the value of the arg
            console.log(classitem.val());
            // store the value in a variable
            var classes = classitem.val();
            // test print the value of the arg
            console.log('classtotake ===', classes);

            // NOW get the keys and items entered 
                // to push them to an array 
                    // in order to have access to deleting and editing

            // create an array called data
                // that is going to consist of the data from fb
            var data = [];
            // NOW loop through the projects (input values) and push them into the 
                // data array by Object ids
            Object.keys(classes).forEach(element => {
                // test print the todo key with it's item
                console.log('item key and text ===', element, classes[element]);
                // NOW push the id (element-keys) and item (project)
                    // to the data array
                data.push({
                    id: element,
                    // item is value with id(key) set to the 'todo' name under the 
                        // firebase todo db list which happens to be deliverables
                            // the last bracket is for the render to locate the new key set 
                                // push the item with the key into the project key name['classtotake']
                                    // this is the name that was orig pushed to the fb db
                    item: classes[element]['classtotake'],
                });
                // test print the data array
                    // it prints for every todo item entered
                console.log('data ===', data);
            });
            // clear the project block each time
                // NOW you locate the list items id variable
                if (classes_list_element){
                    classes_list_element.innerHTML = '';
                }
                // iterate through the deliverableitems pushed to the data array
                for(let i = 0; i < data.length; i++){
                   // store them in a variable
                    var classesall = data[i];
                    // test print
                    console.log('classesall ===', classesall); 
                    // ABOVE is what you access to the output displays
                    // you are to create BELOW
                
                    // The way these will be created:
                        // each time you hit the submit button
                            // everything above or the algorithm above is executed for the input entered
                            // THEN an output element is created in and of itself
                    
                    // THE ELEMENT CREATION PART

                    // NOW we build the list elements below
                        // so each time the form is submitted 
                            // a separate todo element is created 
                                // so it can be manipulated individually
                    
                                // start building the list elements 
                    // in the for loop for each one

                    // BELOW is for EACH todo item that gets populated

                    // CLASS-ITEMS DIV

                    // create the 'class_items' div
                    const class_items = document.createElement('div');

                    // test print it
                    console.log(class_items);

                    // add the class to the div
                    class_items.classList.add('class_items');

                    // append the div to the parent (deliverable_list_element)
                    classes_list_element.appendChild(class_items);

                    // CONTENT DIV

                    // create the 'content' div 
                        // this is setup as an input that displays the output
                    const classes_content_div = document.createElement('div');

                    // test print it
                    // console.log(classes_content_div);

                    // set the div id
                    classes_content_div.id = "content";

                    // append the div to the parent (deliverable_items)
                    class_items.appendChild(classes_content_div);

                    // INPUT ELEMENT
                        // create the input element that's going to be inside of the content
                        // which is actually a display of the output
                            // but you need to set as readonly so ....
                    const classes_input_element = document.createElement('input');

                    // test print it
                    console.log(classes_input_element);
                    // add it's class
                    classes_input_element.classList.add('input');
                    // set it's type
                    classes_input_element.type = "text";
                    // set it's id
                    classes_input_element.id = "classes";

                    // set it's value. Which is the input value 'todo' variable
                    classes_input_element.value = classesall.item;
                    // set it's attribute to readonly
                    classes_input_element.setAttribute('readonly', true);

                    // append the input element to the parent div (deliverable_content_div)
                    classes_content_div.appendChild(classes_input_element);

                    // NOW FOR THE BUTTONS

                    // FIRST SET THE BUTTONS DIV

                    // BUTTONS DIV

                    // this is the bar of buttons (edit, delete, cross-off)
                    const classes_buttons_div = document.createElement('div');

                    // test print
                    console.log(classes_buttons_div);

                    // set it's class
                    classes_buttons_div.classList.add('buttons');
                    // append the buttons div to the parent div (deliverable_content_div)
                    classes_content_div.appendChild(classes_buttons_div);

                    // EDIT BUTTON

                    // create the edit button
                    const classes_edit_button = document.createElement('button');
                    // test print
                    console.log(classes_edit_button);
                    // set it's class
                    classes_edit_button.classList.add('edit');
                    // set the id (for the key of the firebase item)
                        // the id is the actual key
                            // deliverablesall.id
                    classes_edit_button.setAttribute('id', classesall.id);
                    // set the innerText
                    classes_edit_button.innerText = "edit";
                    // append edit button to parent (deliverable_buttons_div)
                    classes_buttons_div.appendChild(classes_edit_button);

                    // DELETE BUTTON

                    // create the delete button
                    const classes_delete_button = document.createElement('button');

                    // test print
                    console.log(classes_delete_button);

                    // set it's class
                    classes_delete_button.classList.add('delete');

                    // set the id (for the key of the firebase item)
                        // the id is the actual key
                    classes_delete_button.setAttribute('id', classesall.id);

                    // set the innerText
                    classes_delete_button.innerText = "delete";

                    // append delete button to the parent div
                    classes_buttons_div.appendChild(classes_delete_button);

                    // CROSS OFF BUTTON

                    // create the cross off button
                    const classes_cross_button = document.createElement('button');

                    // test print
                    console.log(classes_cross_button);

                    // set it's class
                    classes_cross_button.classList.add('cross');

                    // set it's id
                    classes_cross_button.setAttribute('id', classesall.id);

                    // set the innerText
                    classes_cross_button.innerText = "cross-off";

                    // test print
                    // console.log(project_cross_button);

                    // append cross button to the buttons div
                    classes_buttons_div.appendChild(classes_cross_button);

                    // EVENT LISTENER TIME

                    // EDIT BUTTON
                        // this is where you:
                            // set the innertext change on the button
                            // toggle the readonly attribute
                            // edit the changes in firebase
                    classes_edit_button.addEventListener('click', (e) => {
                        // store the id in a variable that is the target of event (the key)
                        let id = e.target.id;
                        // test print
                        console.log('editbutton id for this deliverable ===', id);
                        // check the text in order to change it
                    });
                }
        }
        // TO DATABASE
        // Event Listener to submit button(get the submit button ID)
});




function errClass(err){
    console.log(err);
}
