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

// query the 'zooms' div
const zooms = document.querySelector(".zooms");
// test print
console.log(zooms);

// NOW lets set up the page through the DOM

// event listener for the elements of the WHOLE PAGE
window.addEventListener('load', () => {
    // Once the page is loaded
    // queryselect the whole form by id
        // you will add the event listener to this


        // FROM DATABASE

        firebaseZoomcallsRef.on('value', getZoom, errZoom)

        // get project
        function getZoom(zoomitem){
            var zooms = zoomitem.val();
            console.log('zooms ===', zooms);


            //THE ELEMENT CREATION PART
            // so each time the form is submitted 
                // a separate zoomcall element is created 
                    // so it can be manipulated individually
        
                // BELOW is for EACH zoomcall item that gets populated
                // ZOOM-ITEMS DIV

                // create the 'zoom_items' div
                const zoom_items = document.createElement('div');

                // test print it
                console.log(zoom_items);

                // give it the id zoom_items 
                zoom_items.id = "zoom_items";

                // append 'zoom_items' to the 'zooms' div
                // zooms.appendChild(zoom_items);

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
                console.log(zoomname);

                // add it's class
                zoomname.classList.add('text');
                // set it's type
                zoomname.type = "text";
                // set it's id
                zoomname.id = "zoomname";

                // set the value
                    // take the value from zoomsall 4 loop
                zoomname.value = "Mike Check";
                // test print
                // console.log(zoomsall.item);

                // set the attribute to readonly
                zoomname.setAttribute('readonly', true);

                // append to the content div
                zoomcontent.appendChild(zoomname);

                /////////////////////////////////////

                // DATE ELEMENT
                // create the DATE element that's going to be inside of the content

                // test print

                // add it's class
                // set it's type
                // set it's id

                // set the value
                    // take the value from zoomsall 4 loop

                // set the attribute to readonly

                // append to the content div

            // iterate through the zoomitems
            // for (let i = 0; i < zooms.length; i++){
            //     // store them in a variable
            //     var zoomsall = zooms[i];
            //     // test print
            //     console.log('zoomsall ===', zoomsall);
            // }
        };

        // // THE ELEMENT CREATION PART
        //     // so each time the form is submitted 
        //         // a separate zoomcall element is created 
        //             // so it can be manipulated individually
        
        //         // BELOW is for EACH zoomcall item that gets populated
        //         // ZOOM-ITEMS DIV

        //         // create the 'zoom_items' div
        //         const zoom_items = document.createElement('div');

        //        

        
        // errZoom
        function errZoom(err){
            console.log(err);
        }
});