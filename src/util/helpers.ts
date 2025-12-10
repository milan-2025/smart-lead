export const formatUtcToReadableTime = (utcTimestamp: string): string => {
  const date = new Date(utcTimestamp);

  const options: Intl.DateTimeFormatOptions = {
    month: "long", // 'June'
    day: "numeric", // '20'
    hour: "numeric", // '3'
    minute: "2-digit", // '40'
    hour12: true, // 'AM/PM' format
    // The timezone is not explicitly set to 'local' here because
    // toLocaleString() defaults to the runtime's local timezone.
  };

  const formattedTime = date.toLocaleString("en-US", options);

  const dayOfMonth = date.getDate();
  const suffix = getDaySuffix(dayOfMonth);

  return formattedTime.replace(`${dayOfMonth}`, `${dayOfMonth}${suffix}`);
};

const getDaySuffix = (day: number): "st" | "nd" | "rd" | "th" => {
  if (day > 3 && day < 21) return "th"; // 11th, 12th, 13th...
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
