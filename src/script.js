function displayQuote(response) {
  console.log("Quote generatated!");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "✨",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `Generate a quote about ${instructionsInput.value}`;
  let context =
    "You are a seasoned quotes expert who crafts diverse, inspiring, and thought-provoking motivational or wise quotes.  Do NOT include a title or attribution unless the quote is a famous one—if so, mention the author clearly. Always end the quote with '— SheCodes AI' wrapped  a <strong> tag.";
  let apiKey = "a9taa49fcab393c9d77od70f76b07b85";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating a quote for you about ${instructionsInput.value} </div>`;

  console.log("Generating quote.....");

  axios.get(apiUrl).then(displayQuote);
}

let formElement = document.querySelector("#quote-generator-form");
formElement.addEventListener("submit", generateQuote);
