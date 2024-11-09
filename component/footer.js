const SERVICE_ID = "service_z455hyv";
const PUBLIC_ID = "PmaHLHkm5f10t3ag9";
const TEMPLATE_ID = "template_tlhhxd5";

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
  $("#sendMessageFromFooter").html("Sending..");

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
        $("#sendMessageFromFooter").html("Sent!");
      },
      function (error) {
        alert("Failed to send email. Error: " + error);
      }
    );
}

function handleSubmit() {
  const name = $("#footer-name").val();
  const email = $("#footer-email").val();
  const message = $("#footer-message").val();

  sendEmail(name, email, message);
}

$(() => {
  emailjs.init({
    publicKey: PUBLIC_ID,
  });
  LoadFooter();
});
