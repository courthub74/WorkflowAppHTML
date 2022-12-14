 // Lets query the date data
 const datedata = document.querySelector("#first");

 // test print
 console.log(datedata.innerHTML);

 // check if it has the attribute
 let target = datedata.hasAttribute('value');
 console.log(target);

 // NOW get the attribute
 let datevalue = datedata.getAttribute('value');
 console.log(datevalue);

 // NOW push it to another html page