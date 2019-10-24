function sendMail(contactForm){
    console.log("in send email");
    console.log("user_name: "+ contactForm.name.value );
    console.log("user_email: "+ contactForm.emailaddress.value );
    console.log("project_request: "+ contactForm.projectsummary.value );

    emailjs.send("malia_havlicek_gmail_com", "codeinstitue", {
        "user_name": contactForm.name.value,
        "user_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}