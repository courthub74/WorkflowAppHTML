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

// window add event listener for form submit
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
        // rendered by parent div
    var property = document.getElementById("timebuttons");
    // add event listener to each button
    property.addEventListener('click', (e) => {
        // if 2pm 
        if(e.target && e.target.id == "two"){
            console.log(e.target.value);
            var two = e.target;
            // console.log(two);
            // NOW change it's style
            two.style.backgroundColor = "#4375C0";
            // change the border
            two.style.border = "#ffffff solid 1px";
            // change the text color
            two.style.color = "#ffffff";
        }
        // if 3pm 
        if(e.target && e.target.id == "three"){
            console.log(e.target.value);
            // store 3pm target in a variable
            var three = e.target;
            // NOW change it's style
            three.style.backgroundColor = "#4375C0";
            // change the border
            three.style.border = "#ffffff solid 1px";
            // change the text color
            three.style.color = "#ffffff";
        }
        // if 4pm
        if(e.target && e.target.id == "four"){
            console.log(e.target.value);
            // store 4pm target in a variable
            var four = e.target;
            // NOW change it's style
            four.style.backgroundColor = "#4375C0";
            // change the border
            four.style.border = "#ffffff solid 1px";
            // change the text color
            four.style.color = "#ffffff";
        }
        // if 5pm
        if(e.target && e.target.id == "five"){
            console.log(e.target.value);
            // store 5pm target in a variable
            var five = e.target;
            // NOW change it's style
            five.style.backgroundColor = "#4375C0";
            // change the border
            five.style.border = "#ffffff solid 1px";
            // change the text color
            five.style.color = "#ffffff";
        }
        // if 6pm
        if(e.target && e.target.id == "six"){
            console.log(e.target.value);
            // store 6pm target in a variable
            var six = e.target;
            // NOW change it's style
            six.style.backgroundColor = "#4375C0";
            // change the border
            six.style.border = "#ffffff solid 1px";
            // change the text color
            six.style.color = "#ffffff";
        }
        // if 7pm
        if(e.target && e.target.id == "seven"){
            console.log(e.target.value);
            // store 6pm target in a variable
            var seven = e.target;
            // NOW change it's style
            seven.style.backgroundColor = "#4375C0";
            // change the border
            seven.style.border = "#ffffff solid 1px";
            // change the text color
            seven.style.color = "#ffffff";
        }
        // NOW print that value to the div like the other fields
            // somehow send it to the form
        const timevar = e.target.value;
        console.log("This is the time pressed: ",timevar);
        // function for the Timebuttons
        // get's the value from the button by id
        // send it with the press of the submit button
    });

    // PHONE field
    const phone = document.querySelector("#phone");
    // TOPIC field
    const topic = document.querySelector("#topic");
    // LINK field
    const link = document.querySelector("#link");
    // TIME fields
    const twopm = document.querySelector("#two");

    // FORM field
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

        // push to firebase from here

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

        // push to firebase from here


        // for TIME
        // get the value of the 'time' button pressed
            // store it in a variable
        // add event listener to each button
       console.log("The Time needs to be figured out here")
        // Need to refresh the buttons set
        const zoomtime = twopm.value;
        // Error handling
            // if no value entered just alert
        if (!zoomtime) {
            alert("Please select a time");
            return;
        }

        // clear the phone field buttons
        twopm.value = '';

        console.log('zoomtime:', zoomtime);


        // for PHONE
        // get the value of the 'date' variable
            // store it in a variable
        const zoomphone = phone.value;
        // Error handling
            // if no value entered just alert
        if (!zoomphone) {
            alert("Please fill out the phone field");
            return;
        }
        // clear the date field after button pressed
        phone.value = '';

        // test print
        console.log(zoomphone);

        // push to firebase from here

        // for TOPIC
        // get the value of the 'topic' variable
            // store it in a variable
        const zoomtopic = topic.value;
        // Error handling
            // if no value entered just alert
        if (!zoomtopic) {
            alert("Please fill out the topic field");
            return;
        }
        // clear the date field after button pressed
        topic.value = '';

        // test print
        console.log(zoomtopic);

        // push to firebase from here

        // for LINK
        // get the value of the 'topic' variable
            // store it in a variable
        const zoomlink = link.value;
        // Error handling
            // if no value entered just alert
        if (!zoomlink) {
            alert("Please fill out the zoomlink field");
            return;
        }
        // clear the date field after button pressed
        link.value = '';

        // test print
        console.log(zoomlink);

        // push to firebase from here
        // create a new variable
        // push to fb list but in the new variable 
            // set all of the inputs into a library
        var newZoomRef = firebaseZoomCallRef.push();
        newZoomRef.set({
            name: zoomname,
            date: zoomdate,
            time: zoomtime,
            phone: zoomphone,
            topic: zoomtopic,
            link: zoomlink,
        })
    });
});




