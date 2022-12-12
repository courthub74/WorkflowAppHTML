// first connect to the firebase db

// const { Button } = require("react-bootstrap");

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

// window add event listener
window.addEventListener('load', () => {
    // query the form field for submit button
    const form = document.querySelector("#zoomform");

    // query each input field
        // get the input.value for each

    // NAME field
    const name = document.querySelector("#name");
    // DATE field
    const date = document.querySelector("#date");
    // TIME field
    const time = document.getElementsByName("#timebutt");

   
    // for TIME
        // FIRST you have to set the buttons to onclick
            // render the value
        
            // push to firebase from here

    // query select the form in order to 
    // add event listener to the submit button repping the form
        // when clicked, send data from each queried input
            // to the firebase db
                // most likely you will place it in key value form

    // add event listener to the form submit button
    form.addEventListener('submit', (e) => {
        // keeps page from refreshing
        e.preventDefault();
        // test print the submit button
        console.log("Zoom submit button pressed");


        // for NAME
        // get the value of the 'name' variable
            // store it in a variable
        const zoomname = name.value;
        // Error handling
            // if no value entered just alert
        if (!zoomname) {
            alert("Please fill out the name field");
            return;
        }
        // clear the name field after button pressed
        name.value = '';

        // test print
        console.log(zoomname);


        // for DATE
        // get the value of the 'date' variable
            // store it in a variable
        const zoomdate = date.value;
        // Error handling
            // if no value entered just alert
        if (!zoomdate) {
            alert("Please fill out the date field");
            return;
        }
        // clear the date field after button pressed
        date.value = 'Select Here';

        // test print
        console.log(zoomdate);
        
    });
})




