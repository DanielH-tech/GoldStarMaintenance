$(document).ready(function () {
  // Load the external HTML file into the #content div
  $("#footer").load(
    "./component/footer.html",
    function (response, status, xhr) {
      if (status === "error") {
        console.error("Error loading HTML file: ", xhr.status, xhr.statusText);
      }
    }
  );
});
