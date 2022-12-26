// JavaScript for handling the color picker and copy button
const colorInput = document.getElementById('color-input');
const copyButton = document.getElementById('copy-button');
const hexText = document.getElementById('hex-text');

colorInput.addEventListener('input', () => {
  // Update the HEX value display when the color picker value changes
  hexText.textContent = colorInput.value;
});

copyButton.addEventListener('click', () => {
  // Copy the HEX value to the clipboard when the copy button is clicked
  navigator.clipboard.writeText(hexText.textContent).then(() => {
    // Display a "Copied!" message if the copy was successful
    hexText.textContent = 'Copied!';
    setTimeout(() => {
      // Reset the HEX value display after 2 seconds
      hexText.textContent = colorInput.value;
    }, 2000);
  });
});
