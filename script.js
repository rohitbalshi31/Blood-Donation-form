function validation(){
    let  username = document.getElementById('username').value;
    let  email = document.getElementById('email').value;
    let  mnumber = document.getElementById('mnumber').value;
    let  pincode = document.getElementById('pincode').value;
    let  weight = document.getElementById('weight').value;


    let usernamecheck= /^[a-zA-z ]{2,30}$/;
    let emailcheck =   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mnumbercheck =/^[789]\d{9,12}$/;
    let pincodecheck = /^[0-9]{6}$/;
    let weightcheck = /^[4-9]{1}[0-9]{1}$/;

    usernameres = usernamecheck.test(username);
    emailres = emailcheck.test(email);
    mnumberres = mnumbercheck.test(mnumber);
    pincoderes = pincodecheck.test(pincode);
    weightres = weightcheck.test(weight);


    if (!usernameres) {
        alert("Your username is not valid");
      }
      if (!emailres) {
        alert("Your email not valid");
      }
      if (!mnumberres) {
        alert("Mobile number should consists of 10 digits");
      }
      if (!pincoderes){
        alert("Pincode should be of 6 digits.")
      }
      if(weightres){
        alert("Please enter your weight in numbers")
      }
}


console.log("testing");