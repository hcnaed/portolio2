window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_qtlglq3', 'template_59ttgnw', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
function fun1(){
    Swal.fire({
        icon: "success",
        title: "Message has been successfully sent",
        showConfirmButton: false,
        timer: 1500
      })
}
