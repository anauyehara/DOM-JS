var btn = document.getElementsByClassName('button');
var btnUsingSelector = document.querySelector('.button');
btn [0].style.padding ='10px';
btn [0].style.fontSize ='22px';

// add event listner
btnUsingSelector.addEventListener('click', function(){
console.log('button was clicked from JS!');

});

btnUsingSelector.addEventListener('mouseover',function( event){
    console.log(event);
    console.log(typeof event.target);

    var btnText =event.target.innerHTML;
alert('mouse over on the' + btnText +' button.');
});


btnUsingSelector.addEventListener('click', function(){
    console.log('button was clicked from JS!');
    
 });

 

 var btn = document.getElementsByClassName('cancel-button');
 var btnusingselector = document.querySelector('.cancel-button');
 btn [0].style.padding ='10px';
 btn [0].style.fontSize ='22px';

 var cancelbtn = document.querySelector('.cancel-button');
 cancelbtn.addEventListener('click',function(){
    var response = confirm ('Are you sure you want to cancel?');
    console.log(response);
 })

 // if user confirms, do something = response value is true
 //if user cancels, do something = response value is false

 //*add an event on the document that captures any key that is typed/clicked on the keyboard
 //*console.log the key value

 document.addEventListener('keypress', function (event){
     console.log(event.key);
     console.log(event.keyCode);

 });

 document.addEventListener('keydown', function (event){
    console.log(event.key);
    console.log(event.keyCode);
    
});



document.addEventListener('keyup', function (event){
    console.log(event.key);
    console.log(event.keyCode);
    
});
    
//listen for scroll event on document
//console.log the position of the cursor on the document

  

