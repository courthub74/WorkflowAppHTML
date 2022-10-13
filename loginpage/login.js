var googlebutton = document.getElementById("googlelogin");
var provider = new firebase.auth.GoogleAuthProvider();

googlebutton.addEventListener('click', () => {
    console.log("google login clicked");
    googleSignInPopup(provider);
})