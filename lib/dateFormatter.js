export function formatDate(dateJSON) {
  const monthStrings = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  let year = new Date(dateJSON).getFullYear();
  let day = new Date(dateJSON).getDate();
  let month = monthStrings[new Date(dateJSON).getMonth()];

  return `${month} ${day}, ${year}`;
}
