const copyButton = document.querySelector("#copy-command");
const copyLabel = copyButton.querySelector("span");
const command = document.querySelector("#install-command");
const status = document.querySelector("#copy-status");
const agent = document.querySelector("#install-agent");
const installCommand = command.textContent.replace(/ -g -y$/, "");

function updateInstallCommand() {
  const selectedAgent = agent.selectedOptions[0];
  const scope = selectedAgent.hasAttribute("data-project-only") ? "-y" : "-g -y";
  command.textContent = [installCommand, agent.value, scope].filter(Boolean).join(" ");
}

updateInstallCommand();
document.querySelector("#install-actions").hidden = false;
agent.addEventListener("change", () => {
  updateInstallCommand();
  copyLabel.textContent = "Copy";
  status.textContent = "Install command updated.";
});
copyButton.addEventListener("click", async () => {
  const selectedCommand = command.textContent;
  try {
    await navigator.clipboard.writeText(selectedCommand);
    if (command.textContent !== selectedCommand) return;
    copyLabel.textContent = "Copied";
    status.textContent = "Install command copied.";
  } catch {
    if (command.textContent !== selectedCommand) return;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(command);
    selection.removeAllRanges();
    selection.addRange(range);
    copyLabel.textContent = "Copy selected";
    status.textContent = "Command selected. Use your keyboard's copy shortcut.";
  }
});
