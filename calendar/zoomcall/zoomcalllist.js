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

        // HERE you just need to query the output
        const zoom_call_element = document.querySelector("#zoom_items");

        // FROM DATABASE

        firebaseZoomcallsRef.on('value', getZoom, errZoom)

        // get project
        function getZoom(zoomitem){
            var zooms = zoomitem.val();
            console.log('zooms ===', zooms);
        }

        // errZoom
        function errZoom(err){
            console.log(err);
        }
        
});