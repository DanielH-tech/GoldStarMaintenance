let emailjs;
function LoadFooter() {
  // Load the external HTML file into the #footer div
  $("#footer").load(
    "./component/footer.html",
    function (response, status, xhr) {
      if (status === "error") {
        console.error("Error loading HTML file: ", xhr.status, xhr.statusText);
      }
    }
  );
}

function sendEmail(name, email, message) {
  $("#sendMessageFromFooter").text("Sending..");

  const templateParams = {
    from_name: name,
    from_email: email,
    from_message: message,
  };

  emailjs
    .send(
      process.env.SERVICE_ID_ID, // PUBLIC_ID from GitHub Secrets
      process.env.SERVICE_ID, // SERVICE_ID from GitHub Secrets
      templateParams,
      process.env.PUBLIC_ID
    )
    .then(
      function (response) {
        $("#sendMessageFromFooter").text("Sent!");
      },
      function (error) {
        alert("Failed to send email. Error: " + error);
      }
    );
}

function handleSubmit() {
  $("#sendMessageFromFooter").on("click", function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const name = $("#footer-name").val();
    const email = $("#footer-email").val();
    const message = $("#footer-message").val();

    sendEmail(name, email, message); // Pass form values to sendEmail function
  });
}

$(() => {
  LoadFooter();
  handleSubmit(); // Bind the form submit event
});
