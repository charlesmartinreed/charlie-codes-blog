export function generateSlug(title) {
  // apologies for the bad regex if you're reading this
  return title.toLowerCase().replace(/\W+/g, "$").split("$").join("-");
}
