export function getHourAndMinuteFromDate(date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
