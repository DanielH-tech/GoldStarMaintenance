function sendEmail(name, email, message) {
  $("#sendMessageBtn").html("Sending..");

  const templateParams = {
    from_name: name,
    from_email: email,
    from_message: message,
  };

  emailjs
    .send(
      SERVICE_ID, // PUBLIC_ID from GitHub Secrets
      TEMPLATE_ID, // SERVICE_ID from GitHub Secrets
      templateParams
    )
    .then(
      function (response) {
        $("#sendMessageBtn").html("Sent!");
      },
      function (error) {
        alert("Failed to send email. Error: " + error);
      }
    );
}

function handleSubmit() {
  $("#sendMessageBtn").on("click", function () {
    const name = $("#Name").val();
    const email = $("#Email").val();
    const message = $("#contact_message").val();

    sendEmail(name, email, message);
  });
}

$(() => {
  emailjs.init({
    publicKey: PUBLIC_ID,
  });
  handleSubmit();
});
