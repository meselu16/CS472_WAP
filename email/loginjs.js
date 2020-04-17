function validate(){

  var Email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var address=document.getElementById("url").value;
    console.log(Email);
    console.log(password);
    console.log(address);

  
 
}
window.onload = function() {
  var okButton = document.getElementById("summit"); 
  okButton.onclick = this.validate;
  };
