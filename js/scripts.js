window.onload = function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {

    event.preventDefault();
    let turtles = document.getElementById("turtles");
    turtles.setAttribute("class", "hidden");
    let snakes = document.getElementById("snakes");
    snakes.setAttribute("class", "hidden");
    let insects = document.getElementById("insects");
    insects.setAttribute("class", "hidden");
    let other = document.getElementById("other");
    other.setAttribute("class", "hidden");
    const animals = document.querySelector("input#animals").value;

    if (animals === "turtles") { 
      turtles.removeAttribute("class");
    } else if (animals === "snakes") {
      snakes.removeAttribute("class");
    } else if (animals === "insects") {
      insects.removeAttribute("class");
    } else {
      other.removeAttribute("class");
    }
  });
}
