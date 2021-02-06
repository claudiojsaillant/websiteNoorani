$("#formBtn").on("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    let info = {};
    info.firstName = $("#fname").val();
    info.lastName = $("#lname").val();
    info.email = $("#email").val();
    info.phoneNum = $("#phoneNum").val();
    info.text = $("#textArea").val();
  
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
        To: "claudiojsaillant@gmail.com",
        From: "nooraniforms@gmail.com",
        Subject: "Form submitted (Contact)",
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