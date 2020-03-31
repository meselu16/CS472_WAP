
function display_c(){
let refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
let x = new Date(); 
let x1=x.getFullYear() +"/" +(parseInt(x.getMonth(),10) + 1)+ "/" + x.getDate() ; 
x1 = x1 + " - " +  x.getHours()+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
document.getElementById('ct').innerHTML = x1;
display_c();
}
