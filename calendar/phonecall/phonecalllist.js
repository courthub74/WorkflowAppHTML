// JS for phone calls list

// create a variable that stores the firebase db configuration
const firebaseConfig = {
    apiKey: "AIzaSyATc5lxId7q3aWvm2bTy2oVjX3JzqJJszE",
    authDomain: "workflowapp-c191d.firebaseapp.com",
    databaseURL: "https://workflowapp-c191d-default-rtdb.firebaseio.com",
    projectId: "workflowapp-c191d",
    storageBucket: "workflowapp-c191d.appspot.com",
    messagingSenderId: "205004352373",
    appId: "1:205004352373:web:89d233c2cdc4e4ccbf413c"
};

// initialize firebase to that configuration
firebase.initializeApp(firebaseConfig);

// create a reference for your database (give it a name to id by in firebase)
    // access the fb db
    // name it (set it's reference)
    // store that all in a variable
var firebasePhonecallsRef = firebase.database().ref("phones");

// test print
console.log("Here is the DB for the firebaseZooms", firebasePhonecallsRef);

// NOW lets set up the page through the DOM

// event listener for the elements of the WHOLE PAGE
    // when it loads
window.addEventListener('load', () => {
    // Once the page is loaded
    // queryselect the whole form by id
        // you will add the event listener to this

    // query the 'calls'
    const calls = document.querySelector(".calls");
    // test print
    console.log('query of calls ===', calls);

    // FROM DATABASE
    // utilize the on function on the db reference
        // based on value
        // pass getProject and errProject functions
            // getProject locates fb db
            // errProject test for errors
                // i.e. permissions, other blocks
    firebasePhonecallsRef.on('value', getPhone, errPhone);

    // getPhone
    function getPhone(phonetitem){
        var calls = phonetitem.val();
        console.log('calls ===', calls);

        // NOW get the keys and items entered 
                // to push them to an array 
                    // this is for rendering each zoomcall item
        // let's create an empty array called data
        var data = [];
       // NOW loop through the zooms and push them into the 
            // data array by Object ids
        // Object.keys(zooms).forEach(); 
        Object.keys(calls).forEach(element => {
            // test print the todo item with it's key
            console.log('item key and text ===', element, calls[element]);
            // NOW push the id (element-keys) and item (project)
                // to the data array
            data.push({
                // id is the key
                id: element,
                // item is the library
                item: calls[element]
            });
            // test print the data array
            console.log('data ===', data);
        });
         // clear the zoom_items each entry so no double up
            // Need to study this one
        // NOW let's iterate through the zoomitems pushed to the data array
        for (let i = 0; i < data.length; i++){
            // store them in a variable
            var callsall = data[i];
            // test print
            console.log('callsall ===', callsall);

            //THE ELEMENT CREATION PART
        // so each time the form is submitted 
            // a separate phonecall element is created 
                // so it can be manipulated individually

            // PARENT DIV
                // to append every other div to
            const calls = document.querySelector(".calls");

            // BELOW is for EACH phonecall item that gets populated

            // CALL-ITEMS DIV
            // create the 'call_items' div
            const call_items = document.createElement('div');

            // test print it
            console.log(call_items);

            // give it the id zoom_items 
            call_items.id = "call_items";

            // append to the zooms div
            calls.appendChild(call_items);

            // test print
            console.log(calls);

            // CONTENT DIV
            // create the 'content' div
            const phonecontent = document.createElement("div");

            // test print it
            console.log(phonecontent);

            // assign it the id content
            phonecontent.id = "content";

            // append to 'zoom_items'
            call_items.appendChild(phonecontent);

            // CALL ITEMS (INPUTS)

            // NAME ELEMENT
            // create the NAME element that's going to be inside of the content
            const phonename = document.createElement('input');

            // test print
            console.log('phonename ===', phonename);

            // add it's class
            phonename.classList.add('text');
            // set it's type
            phonename.type = "text";
            // set it's id
            phonename.id = "phonename";

            // set the value
                // take the value from zoomsall 4 loop
            phonename.value = callsall.item.name;

            // test print all
            console.log('ID ===',callsall.id);
            console.log('Name ===',callsall.item.name);
            console.log('Date ===',callsall.item.date);
            console.log('Time ===',callsall.item.time);
            console.log('Phone ===',callsall.item.phone);
            console.log('Topic ===',callsall.item.topic);

            // set the attribute to readonly
            phonename.setAttribute('readonly', true);

            // append to the content div
            phonecontent.appendChild(phonename);

            /////////////////////////////////////

            // DATE ELEMENT
            // create the DATE element that's going to be inside of the content
            const phonedate = document.createElement('input');
            // test print
            console.log('phonedate ===', phonedate);
            // add it's class
            phonedate.classList.add('text');
            // set it's type
            phonedate.type = "text";
            // set it's id
            phonedate.id = "phonedate";

            // set the value
                // take the value from zoomsall 4 loop
            phonedate.value = callsall.item.date;

            // set the attribute to readonly
            phonedate.setAttribute('readonly', true);

            // append to the content div
            phonecontent.appendChild(phonedate);

            /////////////////////////////////////

            // TIME ELEMENT
            // create the TIME element that's going to be inside of the content
            const phonetime = document.createElement('input');
            // test print
            console.log('phonetime ===', phonetime);
            // add it's class
            phonetime.classList.add('text');
            // set it's type
            phonetime.type = "text";
            // set it's id
            phonetime.id = "phonetime";

            // set the value
                // take the value from zoomsall 4 loop
            phonetime.value = callsall.item.time;

            // set the attribute to readonly
            phonetime.setAttribute('readonly', true);

            // append to the content div
            phonecontent.appendChild(phonetime);

            /////////////////////////////////////

            // PHONE NUMBER ELEMENT
            // create the TIME element that's going to be inside of the content
            const phonenumber = document.createElement('input');
            // test print
            console.log('phonenumber ===', phonenumber);
            // add it's class
            phonenumber.classList.add('text');
            // set it's type
            phonenumber.type = "text";
            // set it's id
            phonenumber.id = "phonenumber";

            // set the value
                // take the value from zoomsall 4 loop
            phonenumber.value = callsall.item.phone;

            // set the attribute to readonly
            phonenumber.setAttribute('readonly', true);

            // append to the content div
            phonecontent.appendChild(phonenumber);

            /////////////////////////////////////

            // TOPIC ELEMENT
            // create the TOPIC element that's going to be inside of the content
            const phonetopic = document.createElement('input');
            // test print
            console.log('phonetopic ===', phonetopic);
            // and it's class
            phonetopic.classList.add('text');
            // set it's type
            phonetopic.type = "text";
            // set it's id
            phonetopic.id = "phonetopic";

            // set the value
                // take the value from zoomsall 4 loop
            phonetopic.value = callsall.item.topic;
            // set the attribute to readonly
            phonetopic.setAttribute('readonly', true);

            // append to the content div
            phonecontent.appendChild(phonetopic);

             /////////////////////////////////////

             // NOW FOR THE BUTTONS

            // FIRST create the BUTTONS div
            const phone_buttons_div = document.createElement('div');

            // test print
            console.log(phone_buttons_div);

            // set it's class
            phone_buttons_div.classList.add('buttons');

            // append the buttons div to the zoom_items div
            call_items.appendChild(phone_buttons_div);

            // EDIT BUTTON

            // create the button
            const phone_edit_button = document.createElement('button');

            // test print
            console.log(phone_edit_button);

            // set it's class
            phone_edit_button.classList.add('edit');

            // set it's name for later toggling
            phone_edit_button.setAttribute('name', 'edit');

            // set the id (for the key of the firebase item)
                // the id is the actual key
            phone_edit_button.setAttribute('id', callsall.id);

            // set the edit icon
            phone_edit_button.style.background = "url('/img/editdarkblue.png')";
            
            // set the icon size
            phone_edit_button.style.backgroundSize = "29px";

            // set margin
            phone_edit_button.style.margin = "20px";

            // append to the buttons div
            phone_buttons_div.appendChild(phone_edit_button);

            // DELETE BUTTON

            // create the button
            const phone_delete_button = document.createElement('button');

            // test print
            console.log(phone_delete_button);

            // set it's class
            phone_delete_button.classList.add('delete');

            // set the id (for the key of the firebase item)
                // the id is the actual key
            phone_delete_button.setAttribute('id', callsall.id);

            // set the style background
            phone_delete_button.style.background = "url('/img/deletedarkblue.png')";

            // set the img size
            phone_delete_button.style.backgroundSize = "29px"

            // append to the buttons div
            phone_buttons_div.appendChild(phone_delete_button);
        }
    }

    // errPhone
    function errPhone(err){
        console.log(err)
    }
});