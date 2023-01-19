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
        // if 2pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id == "two"){
            // test print the target
             console.log(e.target.value);
             // HERE we get the input container 
                // and change the background and border
            // NOW get the input-container
            var containtwo = document.getElementById("containertwo");
            // test print
            console.log('Container Two:', containtwo);
            // NOW change the background color
            containtwo.style.backgroundColor = "#243F67";
            // change the border
            containtwo.style.border = "#243F67 solid 1px";
            // NOW change it's style
            containtwo.style.backgroundColor = "#96B0D3";
            // change the border
            containtwo.style.border = "#243F67 solid 1px";
            // in order to change the label 
                // retrieve it by id
            var labeltwo = document.getElementById("labeltwo");
            // change the text color
            labeltwo.style.color = "#243F67";
        } else {
            if (e.target && e.target.id !== "two"){
                // change color back
            }
        }
        // if 3pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id == "three"){
            // test print the target
            console.log(e.target.value);
            // HERE we get the input container 
                // and change the background and border
            // NOW let's get the input-container
            var containthree = document.getElementById("containerthree");
            // test print
            console.log('Container Three:', containthree);
            // NOW change the background color
            containthree.style.backgroundColor = "#96B0D3";
            // change the border
            containthree.style.border = "#243F67 solid 1px";
            // NOW get the label by id
            var labelthree = document.getElementById("labelthree");
            // change the text color
            labelthree.style.color = "#243F67";
        }
        // if 4pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id == "four"){
            // test print the target
            console.log(e.target.value);
             // HERE we get the input container 
                // and change the background and border
            // NOW let's get the input-container
            var containfour = document.getElementById("containerfour");
            // test print
            console.log('Container Four:', containfour);
            containfour.style.backgroundColor = "#96B0D3";
            // change the border
            containfour.style.border = "#243F67 solid 1px";
            // HERE we change the text color for the label
            // NOW get the label by id
            var labelfour = document.getElementById("labelfour");
            // change the text color
            labelfour.style.color = "#243F67";
        }
        // if 5pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id == "five"){
            // test print the target
            console.log(e.target.value);
            // HERE we get the input container 
                // and change the background and border
            // NOW let's get the input-container
            var containfive = document.getElementById("containerfive");
            // test print
            console.log('Container Five:', containfive);
            containfive.style.backgroundColor = "#96B0D3";
            // change the border
            containfive.style.border = "#243F67 solid 1px";
            // NOW get the label by id
            var labelfive = document.getElementById("labelfive");
            // test print
            console.log('Label Five:', labelfive);
            // change the text color through label
            labelfive.style.color = "#243F67";
        }
        // if 6pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id == "six"){
            // test print
            console.log(e.target.value);
            // HERE we get the input container 
                // and change the background and border
            // NOW let's get the input-container
            var containsix = document.getElementById("containersix");
            // test print
            console.log('Container Six:', containsix);
            // NOW change it's style
            containsix.style.backgroundColor = "#96B0D3";
            // change the border
            containsix.style.border = "#243F67 solid 1px";
            // HERE we change the text color for the label
            // NOW get the label by id
            var labelsix = document.getElementById("labelsix");
            // test print
            console.log('Label Six:', labelsix);
            // change the text color
            labelsix.style.color = "#243F67";
        }
        // if 7pm
        if(e.target && e.target.id == "seven"){
            // test print the target
            console.log(e.target.value);
            // HERE we get the input container 
                // and change the background and border
            // NOW let's get the input-container
            var containseven = document.getElementById("containerseven");
            // test print
            console.log('Container Seven:', containseven);
            // NOW change it's style
            containseven.style.backgroundColor = "#96B0D3";
            // change the border
            containseven.style.border = "#243F67 solid 1px";
            // HERE we change the text color for the label
            // NOW get the label by id
            var labelseven = document.getElementById("labelseven");
            // test print
            console.log('Label Seven:', labelseven);
            // change the text color
            labelseven.style.color = "#243F67";
        }
    })
})

