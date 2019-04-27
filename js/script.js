var anchor = document.querySelector('a');
console.log(anchor);
var allanchors = document.querySelectorAll('a');
console.log(allanchors);

allanchors[1].textContent = 'This text is set from JS using DOM manipulation.';
allanchors[1].href ='https://www.google.com';
allanchors[1].target = '_blank';

var para1 = document.getElementById('para-1');
console.log(para1);
var para1usingselector = document.querySelector('#para-1');
console.log(para1usingselector);
para1.style.color ='blue';

var btn = document.getElementsByClassName('button');
console.log(btn[0]);

var btnusingselector = document.querySelector('.button');
console.log(btnusingselector);
btn[0].style.padding ='10px';
btn[0].style.fontsize = '22px';
