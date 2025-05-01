// truncateTextWords
export const truncateTextWords = (text, wordLimit = 2) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > wordLimit
    ? `${words.slice(0, wordLimit).join(" ")}...`
    : text;
};

//truncateTextSpells
export const truncateTextSpells = (text, charLimit = 20) => {
  if (!text) return "";
  return text.length > charLimit ? `${text.substring(0, charLimit)}...` : text;
};

export const formatTitleForURL = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading or trailing hyphens
};
