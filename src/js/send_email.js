function sendEmail() {
  let name = document.getElementById("input_name").value;
  let email = document.getElementById("input_email").value;
  let subject = document.getElementById("input_subject").value;
  let message = document.getElementById("input_message").value;

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Make sure all fields are completed!");
    return;
  }

  window.open(
    `mailto:example@gmail.com?subject=${subject}&body=${
      "Sent by: " +
      name +
      "   " +
      "Address: " +
      email +
      "   " +
      "Message: " +
      message
    }`
  );
}
