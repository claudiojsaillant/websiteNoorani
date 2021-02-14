var w = window.innerWidth;
var h = window.innerHeight;
var scrolling;



if(w <= 460){
  $(window).scroll(function() {
      clearTimeout(scrolling);
      $("#footer").hide();
      scrolling = setTimeout(function(){$("#footer").show();},100);
  });
} else {
  $("#footer").remove();
}

window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    $("#footer").hide();
    clearInterval(scrolling);
  }
};

$(document).ready(function(){
    $('.parallax').parallax();


  });


$("#formBtn").on("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  let info = {};
  info.firstName = $("#fname").val();
  info.lastName = $("#lname").val();
  info.email = $("#email").val();
  info.phoneNum = $("#phoneNum").val();
  info.address1 = $("#address1").val();
  info.address2 = $("#address2").val();
  info.city = $("#city").val();
  info.zip = $("#zip").val();
  info.price = $("#price").val();
  info.condition = $("#condition").val();

  let objKeys = Object.keys(info);
  let str = "";
  let validated = true;
  objKeys.forEach(function (e) {
    if (info[e] === "" && e != "address2") {
      alert("Please fill all missing fields");
      validated = false;
      return;
    } else {
      str += e + " : " + info[e] + "<br>";
    }
  });

  if (validated) {
    Email.send({
      SecureToken: "920f2acf-42ab-4351-89c5-9e75a8170398",
      To: "nooranirealestate@nooranire.com",
      From: "nooraniforms@gmail.com",
      Subject: "Form submitted (Home offer)",
      Body: str,
    }).then((message) => {
        if(message === "OK" ){
            alert("Form successfuly submitted.");
        } else {
            alert("Error submitting form.");
        }
    });
  }
});
