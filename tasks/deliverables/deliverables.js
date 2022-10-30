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
var firebaseDeliverablesRef = firebase.database().ref("deliverables");

// TO DATABASE
// Event Listener to submit button(get the submit button ID)
document.querySelector('#deliverables-submit').addEventListener('click', () => {
    // set a variable to get the value of the input field
    const delivneed = document.getElementById('deliverables-input').value;

    // Error handling
    if (!delivneed) {
        alert("Please enter your deliverable");
        return;
    }
    // push the value to the firebase reference point
    firebaseDeliverablesRef.push(delivneed);
    // test print the input
    console.log(delivneed);
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
firebaseDeliverablesRef.on('value', getDeliv, errData);


// create the getDeliv function
    // pass the argument 'deliv'
function getDeliv(deliv){
    // test print
    console.log(deliv.val());
    // set variable to get the value of each class (or node)
    var delivs = deliv.val();
    // set variable to get the keys of each task
    var keys = Object.keys(delivs);
    // test print the keys
    console.log(keys);
    // iterate through the delivs entered
    for(let i in delivs){
        // create a variable for the delivs iteration
        var delivsall = delivs[i];
        // test print the above
        console.log(delivsall);

        // create the output in HTML
        document.querySelector('#deliverables').innerHTML += `
            <div>
                <div class='deliverables'>
                    <p id="content">${delivsall}</p>
                    <div class='actions'>
                        <button type="submit" class="edit" id="edit">EDIT</button>
                        <button class="delete" id="delete">DELETE</button>
                        <button class="cross" id="cross">CROSS</button>
                    </div>
                </div>
            </div>
        `
    }
}

function errData(err){
    console.log(err);
}
