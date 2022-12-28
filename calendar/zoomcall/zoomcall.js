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
    // const time = document.querySelector("#timebuttons");
    // ISSUE BELOW
    // try to get each input-field by each input clicked on
        // if input is pressed get tile id and change that
    // const twofield = document.getElementById("");
    // rendered by parent div
    var property = document.getElementById("timebuttons");
    // add event listener to each button
    property.addEventListener('click', (e) => {
        // if 2pm change the button style to opposite colors
        if(e.target && e.target.id === "two"){
            console.log(e.target.value);
            // var two = e.target;
            // console.log(two);
            // NOW get the input-container
            var containtwo = document.getElementById("containertwo");
            // test print 
            console.log('Container Two:', containtwo);
            // NOW change the background color
            containtwo.style.backgroundColor = "#4375C0";
            // change the border
            containtwo.style.border = "#ffffff solid 1px";
            // NOW get the label by id
            var labeltwo = document.getElementById("labeltwo");
            // test print
            console.log('Label Two:', labeltwo);
            // NOW change the text color through label
            labeltwo.style.color = "#ffffff";
            // get the input for 2pm
            // const twopm = document.querySelector("#two");
            // test print
            // console.log(twopm);
            // store the value into a variable
            // const zoomtime = twopm.value;
            // test print 
            // console.log('zoomtime:', zoomtime);
        }
        // if 3pm change the button style to opposite colors
        if(e.target && e.target.id === "three"){
            console.log(e.target.value);
            // store 3pm target in a variable
            // var three = e.target;
            // NOW let's get the input-container
            var containthree = document.getElementById("containerthree");
            // test print
            console.log('Container Three:', containthree);
            // NOW change the background color
            containthree.style.backgroundColor = "#4375C0";
            // change the border
            containthree.style.border = "#ffffff solid 1px";
            // NOW get the label by id
            var labelthree = document.getElementById("labelthree");
            // test print
            console.log('Label Three:', labelthree);
            // change the text color through label
            labelthree.style.color = "#ffffff";
        }
        // if 4pm change the button style to opposite colors
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
        // if 5pm change the button style to opposite colors
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
        // if 6pm change the button style to opposite colors
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
        // if 7pm change the button style to opposite colors
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
   
    // const twopm = document.querySelector("#two");
    // const threepm = document.querySelector("#three");

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



        // for TIME

         // TIME input fields go under the same variable
        const zoomtimes = document.querySelector('input[name="timebutt"]:checked').value;
        // 2PM
        // store the clicked value into a variable
        // const zoomtime = times.value;
        // Error handling
            // if no value entered just alert
        if (!zoomtimes) {
            alert("Please select a time");
            return;
        }
        // get the container for 2pm
        var containtwo = document.getElementById("containertwo");
        // clear the field button
        // twopm.value = '';
        // change the style back
        containtwo.style.backgroundColor = "#ffffff";
        containtwo.style.border = "none";
        // get the label 
        var labeltwo = document.getElementById("labeltwo");
        // change the text style back
        labeltwo.style.color = "#4375C0";
        // show what's sent to db in console
        // console.log('zoomtime:', zoomtime);


        // 3PM
        // store the clicked value into a variable
        // const zoomtimethree = threepm.value;
        // Error handling
            // if now value entered just alert
        // if (!zoomtimethree) {
        //     alert("Please select a time");
        //     return;
        // }
        // get the container for 3pm
        var containthree = document.getElementById("containerthree");
        // clear the 3pm field button
        // threepm.value = '';

        // change the style back
        containthree.style.backgroundColor = "#ffffff";
        containthree.style.border = "none";
        // get the label
        var labelthree = document.getElementById("labelthree");
        // change the text style back
        labelthree.style.color = "#4375C0";
        // show what's sent to db in console
        // console.log('zoomtime3:', zoomtimethree);


        // 4PM
        // 5PM
        // 6PM
        // 7PM
        console.log('Time submitted is:', zoomtimes);

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

        // clear the 2pm field button
        twopm.value = '';
        // clear the 3pm field button
        threepm.value = '';

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
        });
    });
});




