function displayQuote(response) {
  console.log("Quote generatated!");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "✨",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `Generate a quote about ${instructionsInput}`;
  let context =
    "You are a seasoned quotes expert who crafts diverse, inspiring, and thought-provoking motivational or wise quotes. Generate a short, unique quote (1–2 sentences) that resonates deeply with the user's topic. The quotes should vary in style—sometimes poetic, sometimes straightforward, sometimes metaphorical, and occasionally humorous or uplifting. Do NOT include a title or attribution unless the quote is a famous one—if so, mention the author clearly. Always end the quote with '— SheCodes AI' wrapped inside a <strong> tag.";
  let apiKey = "a9taa49fcab393c9d77od70f76b07b85";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating quote.....");

  axios.get(apiUrl).then(displayQuote);
}

let FormElement = document.querySelector("#quote-generator-form");
FormElement.addEventListener("submit", generateQuote);
