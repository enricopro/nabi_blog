require("dotenv").config();


function subscribe() {
  //check if the string user_email is a valid email
  var user_email = document.getElementById("usr_mail").value;
  if(user_email.includes('@') && user_email.includes('.')) {
    const sendgrid_apikey = process.env.HUGO_GIT_SENDGRID_API_KEY;
    const data = {"contacts": [{"email": user_email}]};
    const headers = {
      'Authorization': sendgrid_apikey,
      'Content-Type': 'application/json'
    };
    fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log("success");
      })
      .catch(error => {
        console.error(error);
      });
  }
}
