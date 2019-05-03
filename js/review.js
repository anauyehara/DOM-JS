var user = { };
var name = prompt('Enter name');
console.log({name});
console.log ( !! name);
console.log (!isNaN(name));

// if (name ==='' || name === '' || parseInt (name)){
//     alert ('Enter Valid Name');
// } else {
//     user.name =name;
// }

//ternary
// (name === '' || name === ''  || parseInt (name)) ?
// alert ('Enter Valid Name'):
// user.name = name;

if (name && isNaN (name)){
    user.name = name;
    var power = prompt('Enter your Power');
    console.log(!!power);
    console.log(typeof power);
    console.log(isNaN( parseInt(power)));

    if( power && !isNaN(parseInt (power))){
        user.power = parseInt(power);

        }
} else {
        alert( 'Enter Valid Name');
}

