const copyButton = document.querySelector("#copy-command");
const command = document.querySelector("#install-command");
const status = document.querySelector("#copy-status");
const agent = document.querySelector("#install-agent");
const installCommand = command.textContent;

document.querySelector("#install-actions").hidden = false;
agent.addEventListener("change", () => {
  command.textContent = agent.value ? `${installCommand} ${agent.value}` : installCommand;
  copyButton.textContent = "Copy command";
  status.textContent = "Install command updated.";
});
copyButton.addEventListener("click", async () => {
  const selectedCommand = command.textContent;
  try {
    await navigator.clipboard.writeText(selectedCommand);
    if (command.textContent !== selectedCommand) return;
    copyButton.textContent = "Copied";
    status.textContent = "Install command copied.";
  } catch {
    if (command.textContent !== selectedCommand) return;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(command);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "Copy selected text";
    status.textContent = "Command selected. Use your keyboard's copy shortcut.";
  }
});
