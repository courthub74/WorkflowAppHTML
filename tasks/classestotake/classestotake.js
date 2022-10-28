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


// TO DATABASE
// Event Listener to submit button(get the submit button ID)
document.querySelector("#classes-submit").addEventListener('click', () => {
    // set a variable to get the value of the input field
    const classneed = document.getElementById('classes-input').value;
    // Error handling
    if (!classneed) {
        alert("Please enter your freelance job");
        return;
    }
    // push the value to the firebase reference point
    firebaseClassesRef.push(classneed);
    // test print the input
    // console.log(classneed);
    
});



// FROM DATABASE

// test print the firebase object
// console.log(firebaseClassesRef);


// utilize the on function 
// and pass the getData function as an argument
  // function to locate the firebase db 
    // then iterate through it to manipulate
// and pass the errData function as an argument
  // this function tests for errors 
    // i.e. permissions, other blocks
firebaseClassesRef.on('value', getClass, errData);


// create the getClass function 
  // pass the argument 'classtotake'
function getClass(classtotake){
    console.log(classtotake.val());
    // set variable to get the value of each class (or node)
    var classes = classtotake.val();
    // set variable to get the keys of each task
    var keys = Object.keys(classtotake);
    // test print the keys
    // console.log(keys);
    // iterate through the classes entered
    for(let i in classes){
        // create a variable for the class iteration
        var classesall = classes[i];
        // test print the above
        console.log(classesall);

        // CREATING THE LIST 
            // FIRST you have to set up the main container on the HTML
                // in this case it's called 'tasks' like your home page

        // create the CLASSES div
        

        // // set the CLASSES div element
        

        // // create the CLASSES CONTENT div
       

        // // set the CLASSES CONTENT class
        

        // // append CLASSES CONTENT to CLASSES element
        

        // // CLASSES INPUT (what was entered into the task input)

        // // NOW set the INPUT element for the CLASSES
        

        // console.log(classneed);

        // create the CLASSES INPUT div


        // create the ACTIONS div


        // create the ACTIONS BUTTONS div


        // create the EDIT button
       

        // append all 3 buttons to ACTIONS div

        // append the ACTIONS to TASK div

        // append the TASK to THE LIST

        // create the output in HTML
        document.querySelector('#tasks').innerHTML += `
            <div>
                <div class='classes'>
                    <p id="content">${classesall}</p>
                    <div class='actions'>
                        <button type="submit" class="edit" id="edit">EDIT</button>
                        <button class="delete" id="delete">DELETE</button>
                        <button class="cross" id="cross">CROSS</button>
                    </div>
                </div>
            </div>
        `

        // NOW set the functionality of the action buttons

        // EDIT BUTTON

        // query the edit buttons
        let editbuttons = document.querySelectorAll("#edit");

        // THINGS TO DO HERE
        // iterate through all buttons
        for (i = 0; i < editbuttons.length; i++){
            // set a variable for editbuttons[i]
            let alleditbuttons = editbuttons[i];
            // test print the edit button text
            console.log(alleditbuttons.innerText);
            // NOW lets addEventListener upon click
            alleditbuttons.addEventListener('click', function(){
                // if statement checks the innerTEXT
                // test print
                console.log("edit button pressed");
                if (alleditbuttons.innerText.toLowerCase() == 'edit'){
                    // change innerText to save
                    alleditbuttons.innerText = 'save';
                    // THINGS TO DO HERE
                        // set the state to write upon click 
                            // from readonly to write
                } else {
                    // if text says save
                    // check innerTEXT again
                    if (alleditbuttons.innerText.toLowerCase() == 'save'){
                        // change innerText back to edit
                        alleditbuttons.innerText = 'edit';
                        // test print
                        console.log("save button pressed");
                        // THINGS TO DO HERE
                        // set the state to readonly upon click 
                        // program the change into firebase 
                    }
                }
            });
        }

        // DELETE BUTTON

        // query the delete buttons
        // iterate through the delete buttons
        // addEventListener to them
        // use .remove()
        // also .remove() from firebase


        // CROSS BUTTON

        // query the cross buttons
    }
};

function errData(err){
    console.log(err);
}
