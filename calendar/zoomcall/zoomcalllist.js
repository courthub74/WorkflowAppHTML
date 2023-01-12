// JS for zoom calls list

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

// initialize firebase
firebase.initializeApp(firebaseConfig);

// create a reference for your database (give it a name to id by in firebase)
    // access the fb db
    // name it (set it's reference)
    // store that all in a variable
var firebaseZoomcallsRef = firebase.database().ref("zooms");

// test print
// console.log("Here is the DB for the firebaseZooms");

// NOW lets set up the page through the DOM

// event listener for the elements of the WHOLE PAGE
window.addEventListener('load', () => {
    // Once the page is loaded
    // queryselect the whole form by id
        // you will add the event listener to this

    // query the 'zooms' div
    const zooms = document.querySelector(".zooms");
    // test print
    console.log('query of zooms ===', zooms);

    // FROM DATABASE
    // utilize the on function on the db reference
        // based on value
        // pass getProject and errProject functions
            // getProject locates fb db
            // errProject test for errors
                // i.e. permissions, other blocks
    firebaseZoomcallsRef.on('value', getZoom, errZoom)

    // get project
    function getZoom(zoomitem){
        var zooms = zoomitem.val();
        console.log('zooms ===', zooms);

        // NOW get the keys and items entered 
                // to push them to an array 
                    // this is for rendering each zoomcall item
        // let's create an empty array called data
        var data = [];
        // NOW loop through the zooms and push them into the 
                // data array by Object ids
        // Object.keys(zooms).forEach();
        Object.keys(zooms).forEach(element => {
            // test print the todo item with it's key
                console.log('item key and text ===', element, zooms[element]);
                // NOW push the id (element-keys) and item (project)
                    // to the data array
            data.push({
                id: element,
                item: zooms[element]
            });
            // test print the data array
            console.log('data ===', data);
        });
        // clear the zoom_items each entry so no double up
            // Need to study this one
        // NOW let's iterate through the zoomitems pushed to the data array
        for (let i = 0; i < data.length; i++){
            // store them in a variable
            var zoomsall = data[i];
            // test print
            console.log('zoomsall ===', zoomsall);

            //THE ELEMENT CREATION PART
        // so each time the form is submitted 
            // a separate zoomcall element is created 
                // so it can be manipulated individually
    
            // BELOW is for EACH zoomcall item that gets populated
            // ZOOM-ITEMS DIV

            const zooms = document.querySelector(".zooms");

            // create the 'zoom_items' div
            const zoom_items = document.createElement('div');

            // test print it
            console.log("ZOOM ITEM:",zoom_items);

            // give it the id zoom_items 
            zoom_items.id = "zoom_items";

            // append to the zooms div
            zooms.appendChild(zoom_items);

            // test print
            console.log(zooms);

            // create the 'content' div
            const zoomcontent = document.createElement("div");

            // test print it
            // console.log(content);

            // assign it the id content
            zoomcontent.id = "content";

            // append to 'zoom_items'
            zoom_items.appendChild(zoomcontent);

            // THE CONTENT ITEMS

            // NAME ELEMENT
            // create the NAME element that's going to be inside of the content
            const zoomname = document.createElement('input');

            // test print
            console.log('zoomname ===', zoomname);

            // add it's class
            zoomname.classList.add('text');
            // set it's type
            zoomname.type = "text";
            // set it's id
            zoomname.id = "zoomname";

            // set the value
                // take the value from zoomsall 4 loop
            zoomname.value = zoomsall.item.name;
            // test print
            // console.log(zoomsall.item);

            // set the attribute to readonly
            zoomname.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomname);

            /////////////////////////////////////

            // DATE ELEMENT
            // create the DATE element that's going to be inside of the content
            const zoomdate = document.createElement('input');
            // test print
            console.log('zoomdate ===', zoomdate);
            // add it's class
            zoomdate.classList.add('text');
            // set it's type
            zoomdate.type = "text";
            // set it's id
            zoomdate.id = "zoomdate";

            // set the value
                // take the value from zoomsall 4 loop
            zoomdate.value = zoomsall.item.date;

            // set the attribute to readonly
            zoomdate.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomdate);

            /////////////////////////////////////

            // TIME ELEMENT
            // create the TIME element that's going to be inside of the content
            const zoomtime = document.createElement('input');
            // test print
            console.log('zoomtime ===', zoomtime);
            // add it's class
            zoomtime.classList.add('text');
            // set it's type
            zoomtime.type = "text";
            // set it's id
            zoomtime.id = "zoomtime";

            // set the value
                // take the value from zoomsall 4 loop
            zoomtime.value = zoomsall.item.time;

            // set the attribute to readonly
            zoomtime.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomtime);

            /////////////////////////////////////

            // PHONE NUMBER ELEMENT
            // create the TIME element that's going to be inside of the content
            const zoomnumber = document.createElement('input');
            // test print
            console.log('zoomnumber ===', zoomnumber);
            // add it's class
            zoomnumber.classList.add('text');
            // set it's type
            zoomnumber.type = "text";
            // set it's id
            zoomnumber.id = "zoomnumber";

            // set the value
                // take the value from zoomsall 4 loop
            zoomnumber.value = zoomsall.item.phone;

            // set the attribute to readonly
            zoomnumber.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomnumber);

            /////////////////////////////////////

            // TOPIC ELEMENT
            // create the TOPIC element that's going to be inside of the content
            const zoomtopic = document.createElement('input');
            // test print
            console.log('zoomtopic ===', zoomtopic);
            // and it's class
            zoomtopic.classList.add('text');
            // set it's type
            zoomtopic.type = "text";
            // set it's id
            zoomtopic.id = "zoomtopic";

            // set the value
                // take the value from zoomsall 4 loop
            zoomtopic.value = zoomsall.item.topic;
            // set the attribute to readonly
            zoomtopic.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomtopic);

             /////////////////////////////////////

            // LINK ELEMENT
            // create the LINK element that's going to be inside of the content
            const zoomlink = document.createElement('input');

            // test print
            console.log('zoomlink ===', zoomlink);
            // and it's class
            zoomlink.classList.add('text');
            // set it's type
            zoomlink.type = "text";
            // set it's id
            zoomlink.id = "zoomlink";

            // set the value
                // take the value from zoomsall 4 loop
            zoomlink.value = zoomsall.item.link;
            // set the attribute to readonly
            zoomlink.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomlink);

            // NOW FOR THE BUTTONS

            // FIRST create the BUTTONS div
            const zoom_buttons_div = document.createElement('div');

            // test print
            console.log(zoom_buttons_div);

            // set it's class
            zoom_buttons_div.classList.add('buttons');

            // append the buttons div to the zoom_items div
            zoom_items.appendChild(zoom_buttons_div);

            // DELETE BUTTON

            // create the button
            const zoom_delete_button = document.createElement('button');

            // test print
            console.log(zoom_delete_button);

            // set it's class
            zoom_delete_button.classList.add('delete');

            // set the id (for the key of the firebase item)
                // the id is the actual key
            zoom_delete_button.setAttribute('id', zoomsall.id);

            // set the style background
            // zoom_delete_button.style.background = "url('/img/deletex.png')"; 

            // set the innerText
            zoom_delete_button.innerText = "DELETE";

            // set the style background color
            zoom_delete_button.style.backgroundColor = "#ffffff";

            // append to the buttons div
            zoom_buttons_div.appendChild(zoom_delete_button);

            // EDIT BUTTON

            // create the button
            const zoom_edit_button = document.createElement('button');

            // test print
            console.log(zoom_edit_button);

            // set it's class
            zoom_edit_button.classList.add('edit');

            // set the id (for the key of the firebase item)
                // the id is the actual key
            zoom_edit_button.setAttribute('id', zoomsall.id);

            // set the innerText
            zoom_edit_button.innerText = "EDIT";

            // set the style background color
            zoom_edit_button.style.backgroundColor = "#243F67";

            // set the text color
            zoom_edit_button.style.color = "#ffffff";

            // append to the buttons div
            zoom_buttons_div.appendChild(zoom_edit_button);

            // EVENT LISTENER TIME

            // DELETE BUTTON
            // this is where you:
                // remove the input element from the display
                    // remove the data element from firebase
            zoom_delete_button.addEventListener('click', (e) =>{
                // keep from bubbling up
                e.stopPropagation();
                // store the id in a variable that is the target of event
                let id = e.target.id;
                // test print the delete button
                console.log(`delete button pressed for: ${id}`);
                // remove the child input (ZOOM ITEM (zoom_items)) from the (ZOOMS) parent
                zooms.removeChild(zoom_items);
                // NOW delete it in the firebase 
                firebase.database().ref(`zooms/${id}`).remove();
            })
        }

    };
        
        // errZoom
        function errZoom(err){
            console.log(err);
        }
});

