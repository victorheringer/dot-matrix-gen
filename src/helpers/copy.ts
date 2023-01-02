export function copyTextToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
