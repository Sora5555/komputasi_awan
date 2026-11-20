const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "enggarekamaulana@gmail.com",
      Password : "7FAF95764670B44B0BC22391F0269FE42145",
      To : 'enggarekamaulana@gmail.com',
      From : document.querySelector(".email").value,
      Subject : document.querySelector(".about").value,
      Body : document.querySelector(".message").value
  }).then(
    message => alert(message)
  );
  e.preventDefault()
  console.log("hey")
  })