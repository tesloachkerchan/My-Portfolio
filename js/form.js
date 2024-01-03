
function sendMail() {
  var params = {
     name : document.getElementById('name').value,
     email : document.getElementById('email').value,
     message : document.getElementById('message').value,
     

  }
  const serviceId = "service_dvurdt3";
const templateId = "template_534qdnh";

emailjs.send(serviceId, templateId, params)
  .then(
    res => {
      name = document.getElementById('name').value = ""
      email = document.getElementById('email').value = ""
      message = document.getElementById('message').value = ""
      alert('your message send successfully!')
   
    }
  ).catch(err => console.log(err));
}

