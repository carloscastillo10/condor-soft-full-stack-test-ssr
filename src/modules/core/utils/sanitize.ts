export function trimAndRemoveWhitespace(value: string) {
  return value.replace(/\s+/g, "").trim();
}

export function trimAndRemoveWhiteSpacesLeavingOnlyOne(value: string) {
  return value.replace(/\s+/g, " ").trim();
}
