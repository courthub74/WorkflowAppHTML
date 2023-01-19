// JS for phone call page

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
var firebasePhoneCallRef = firebase.database().ref("phones");

// test print
console.log("Here is the DB object for the firebasePhoneCallRef:", firebasePhoneCallRef);

// window add event listener
window.addEventListener('load', () => {
    // query the form field for submit button
    const form = document.querySelector("#phoneform");

    // query each input field
        // get the input.value for each

    // NAME field
    const name = document.querySelector("#name");
    // DATE field
    const date = document.querySelector("month");
    // TIME field 
        // rendered by parent div
    const property = document.getElementById("timebuttons");
    // add event listener to each button
    property.addEventListener('click', (e) => {
        // // if 2pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id == "two"){
            console.log(e.target.value);
            // HERE we get the input container 
                // and change the background and border
            var two = e.target;
            // NOW change it's style
            two.style.backgroundColor = "#96B0D3";
            // change the border
            two.style.border = "#243F67 solid 1px";
            // change the text color
            two.style.color = "#243F67";
        }
        // if 3pm
        if(e.target && e.target.id == "three"){
            console.log(e.target.value);
            // store 3pm target in a variable
            var three = e.target;
            // NOW change it's style
            three.style.backgroundColor = "#96B0D3";
            // change the border
            three.style.border = "#243F67 solid 1px";
            // change the text color
            three.style.color = "#243F67";
        }
        // if 4pm
        if(e.target && e.target.id == "four"){
            console.log(e.target.value);
            // store 4pm target in a variable
            var four = e.target;
            four.style.backgroundColor = "#96B0D3";
            // change the border
            four.style.border = "#243F67 solid 1px";
            // change the text color
            four.style.color = "#243F67";
        }
        // if 5pm
        if(e.target && e.target.id == "five"){
            console.log(e.target.value);
            // store 5pm target in a variable
            var five = e.target;
            five.style.backgroundColor = "#96B0D3";
            // change the border
            five.style.border = "#243F67 solid 1px";
            // change the text color
            five.style.color = "#243F67";
        }
        // if 6pm
        if(e.target && e.target.id == "six"){
            console.log(e.target.value);
            // store 6pm target in a variable
            var six = e.target;
            // NOW change it's style
            six.style.backgroundColor = "#96B0D3";
            // change the border
            six.style.border = "#243F67 solid 1px";
            // change the text color
            six.style.color = "#243F67";
        }
        // if 7pm
        if(e.target && e.target.id == "seven"){
            console.log(e.target.value);
            // store 7pm target in a variable
            var seven = e.target;
            // NOW change it's style
            seven.style.backgroundColor = "#96B0D3";
            // change the border
            seven.style.border = "#243F67 solid 1px";
            // change the text color
            seven.style.color = "#243F67";
        }
    })
})

