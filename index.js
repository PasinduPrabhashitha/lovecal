function names(){
    var randomNumber = Math.floor(Math.random() * 100)+1
     var yourName = document.getElementById("firstname").value
     var crushName = document.getElementById("secondname").value
     
     document.getElementById("firstname").required = true;
    document.getElementById("firstname").required = true;

     var element = document.getElementById("love-text")

     if (randomNumber >= 70) {
       alert("Love between " + yourName + " and " + crushName + " is " + randomNumber + "%" + " Your head over heels.");
     }else if (randomNumber >= 30) {
       alert("Love between " + yourName + " and " + crushName + " is " + randomNumber + "%" + " You have a match made in heaven.");
     }else{
        alert("Love between " + yourName + " and " + crushName + " is " + randomNumber + "%" + " But don't worry.");
     }




  }
