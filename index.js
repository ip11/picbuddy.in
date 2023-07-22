// var name = document.getElementById("name").blur();
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var role = document.getElementById("role");
var address = document.getElementById("address");
var joinBtn = document.getElementById("joinBtn");

var toggle = () => {
  var video = document.querySelector(".modal");
  video.classList.toggle("modal-hidden");
  var play = document.querySelector("video");
  play.pause();
  play.currentTime = 0;
}

document.querySelector("#showvideo").addEventListener('click', toggle);

function reveal() {
  console.log("hi");
  // document.getElementById("leftArea").remove();
  document.getElementById("leftArea").style.zIndex = 0;
  document.getElementById("smallImage").remove();
  document.getElementById("rightArea").style.display = "block";
  document.getElementById("rightArea").style.zIndex = 1;
}

// var database = firebase.database();
// var rootRef = database.ref("wait_list");

// joinBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(name.value, email.value, phone.value, role.value);
//   var autoId = rootRef.push().key;
//   rootRef.child(autoId).set({
//     name: name.value,
//     email: email.value,
//     phone: phone.value,
//     role: role.value,
//   });
// });

function joinUs() {
  // console.log("hi");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var role = document.getElementById("role");
  var address = document.getElementById("address");
  // var joinBtn = document.getElementById("joinBtn");
  if (document.getElementById("name").validity.patternMismatch || name.value=="") {

} else if (document.getElementById("email").validity.patternMismatch || email.value=="") {
    
} else if (phone.value == "" || document.getElementById("phone").validity.patternMismatch ) {
    
} else if (role.value == "") {
    
} else if (address.value ==""){

} else {
    console.log(name.value, email.value, phone.value, role.value);
    document.getElementById("successmsg").style.display="block";
    var form = document.joinForm;
    // Firebase code
    var database = firebase.database();
    var rootRef = database.ref("wait_list");
    var autoId = rootRef.push().key;
    rootRef.child(autoId).set({
      name: name.value,
      email: email.value,
      phone: phone.value,
      role: role.value,
      address: address.value,
    });
    // Form reset
    form.reset();
    document.getElementById("joinBtn").value = "Form Submission Successful.";
    document.getElementById("joinBtn").disabled = true;
    name.blur();
    email.blur();
    phone.blur();
    address.blur();
    return false;//Prevents reloading
    
} 


  
}