const trimAndRemoveWhitespace = (value: string) =>
  value.replace(/\s+/g, "").trim();
const trimAndRemoveWhiteSpacesLeavingOnlyOne = (value: string) =>
  value.replace(/\s+/g, " ").trim();

export { trimAndRemoveWhiteSpacesLeavingOnlyOne, trimAndRemoveWhitespace };
