//your JS code here. If required.

const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

// Apply saved preferences when page loads
const savedFontSize = document.cookie
  .split("; ")
  .find((cookie) => cookie.startsWith("fontsize="));

const savedFontColor = document.cookie
  .split("; ")
  .find((cookie) => cookie.startsWith("fontcolor="));

if (savedFontSize) {
  const size = savedFontSize.split("=")[1];
  document.documentElement.style.setProperty("--fontsize", size + "px");
  fontSizeInput.value = size;
}

if (savedFontColor) {
  const color = savedFontColor.split("=")[1];
  document.documentElement.style.setProperty("--fontcolor", color);
  fontColorInput.value = color;
}

// Save preferences when form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  document.cookie = `fontsize=${fontSize}; max-age=31536000; path=/`;
  document.cookie = `fontcolor=${fontColor}; max-age=31536000; path=/`;

  document.documentElement.style.setProperty(
    "--fontsize",
    fontSize + "px"
  );

  document.documentElement.style.setProperty(
    "--fontcolor",
    fontColor
  );
});
