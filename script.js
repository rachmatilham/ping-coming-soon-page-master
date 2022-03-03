const submit = document.querySelector("button");
const input = document.querySelector("input");

submit.addEventListener("click", (event) => {
  if (input.value.match(emailFormatRegex)) {
    input.classList.remove("active");
    document.querySelector(".alert").classList.remove("active");
    alert("Subscribed!");
  } else if (input.value === "") {
    event.preventDefault();
    input.classList.add("active");
    document.querySelector(".alert").classList.add("active");
    document.querySelector(".alert").textContent =
      "Whoops! It looks like you forgot to add your email";
  } else {
    event.preventDefault();
    input.classList.add("active");
    document.querySelector(".alert").classList.add("active");
    document.querySelector(".alert").textContent =
      "Please provide a valid email address";
  }
});

const emailFormatRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
