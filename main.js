function send() {
  var form = document.getElementById("form");
  var card = document.getElementById("card");
  const rate = document.querySelector(
    'input[name="option"]:checked'
  ).value;
  var rated = document.getElementById("rated");

  form.classList.add("none")
  card.classList.add("card");

  rated.innerHTML = `
  ${rate}
  `
}