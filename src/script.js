function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings: "Generating quote",
    autoStart: true,
    delay: 10,
    cursor: "✨",
  });
}

let FormElement = document.querySelector("#quote-generator-form");
FormElement.addEventListener("submit", generateQuote);
