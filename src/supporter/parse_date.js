export function parseDate(date) {
  const num = Date.parse(date);
  const dt = new Date(num);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${dt.getDate()} ${months[dt.getMonth()]} ${dt.getFullYear()}`;
}
