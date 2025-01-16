const d = new Date();
//console.log(date);
let year = d.getFullYear();
//console.log(year);
document.querySelector('#añoactual').innerHTML = year;

//LAST MODIFIED DATE
const modification =document.lastModified;

document.querySelector('#Lastupdate').innerHTML = `Last Modified: ${modification}`;