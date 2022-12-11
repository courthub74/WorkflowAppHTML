// first connect to the firebase db

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
var firebaseZoomCallRef = firebase.database().ref("zooms");

// test print
console.log("Here is the DB object for the firebaseZoomCallRef:", firebaseZoomCallRef);

// query each input field
    // get the input.value for each

// query select the form in order to 
// add event listener to the submit button repping the form
    // when clicked, send data from each queried input
        // to the firebase db
            // most likely you will place it in key value form

// first put the arrow on there django set up and installation

