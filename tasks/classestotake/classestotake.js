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
    // push the value to the firebase reference point
    firebaseClassesRef.push(classneed);
    // test print the input
    // console.log(classneed);
});

// FROM DATABASE

// test print the firebase object
console.log(firebaseClassesRef);


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
        // create the output in HTML
        document.querySelector('#tasks').innerHTML += `
            <div>
                <div class='task'><p class="content">${classesall}</p></div>
                <div class='actions'></div>
            </div>
        `
        // create a div set it's class to 'content'
        // create an element p set it's id to 'task'
    }
}

function errData(err){
    console.log(err);
}