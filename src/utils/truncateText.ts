export function truncateText(text: string, maxLength: number): string {
  if (text && text.length > maxLength) {
    if (typeof text === "string") {
      return text.substring(0, maxLength) + "...";
    }
  }
  return text;
}
