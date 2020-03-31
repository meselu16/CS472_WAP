
function display_c(){
let refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
let x = new Date(); 
let hr=x.getHours();
let mins=x.getMinutes();
let sec=x.getSeconds();
if(hr <10 ){hr='0'+hr;}
if(mins <10 ) {mins='0' + mins; }
if(sec<10){second='0' + sec;}
let x1=x.getFullYear() +"/" +(parseInt(x.getMonth(),10) + 1)+ "/" + x.getDate() ; 
x1 = x1 + " - " +  hr+ ":" +  mins + ":" +  sec;
document.getElementById('ct').innerHTML = x1;
display_c();
}

