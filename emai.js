emailjs.init("cogoxsCLTqIjI-VoA");

const templateParams = {
  to_name: "Vikas Chaudhary",
  from_name: "",
  message: "",
};

const form = document.querySelector(".form-items");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.querySelector(".input-name input").value;
  const email = event.target.querySelector(".input-email input").value;
  const message = event.target.querySelector("#textArea").value;

  templateParams.from_name = email;
  templateParams.message = message;

  event.target.querySelector(".input-name input").value = " ";
  event.target.querySelector(".input-email input").value = " ";
  event.target.querySelector("#textArea").value = " ";

  emailjs.send("service_b4i3alm", "template_q5elotr", templateParams).then(
    function (response) {
      alert("Thank you, I will contact you soon.");
    },
    function (error) {
      alert("Message could'nt be sent... try again");
    }
  );
});
