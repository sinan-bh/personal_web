function sendMail() {
    var form = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceId = "service_9skua6n"
    const templateId = "template_lb7mhiw"

    emailjs
        .send(serviceId, templateId,form)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your Message Sent Successfully")
            }
        )
        .catch(err => console.log(err));
}


