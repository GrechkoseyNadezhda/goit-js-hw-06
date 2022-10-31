const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const textValue = textInput.value.length > 0 ? event.currentTarget.value : 'Anonymous';
  output.textContent = textValue;
});
