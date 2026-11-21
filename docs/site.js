const copyButton = document.querySelector("#copy-command");
const command = document.querySelector("#install-command");
const status = document.querySelector("#copy-status");

copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(command.textContent);
    copyButton.textContent = "Copied";
    status.textContent = "Install command copied.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(command);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "Copy selected text";
    status.textContent = "Command selected. Use your keyboard's copy shortcut.";
  }
});
