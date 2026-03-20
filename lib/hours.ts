const TIMEZONE = "America/Chicago";

/** Daily hours: 6:00 AM – 11:00 PM (demo schedule). */
const OPEN_MINUTE = 6 * 60;
const CLOSE_MINUTE = 23 * 60;

export const OPENING_TIME_DISPLAY = "6:00 AM";
export const CLOSING_TIME_DISPLAY = "11:00 PM";

function getNowMinutesDallas(): number {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  const parts = formatter.formatToParts(new Date());
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return hour * 60 + minute;
}

export function isStoreOpenNow(): boolean {
  const minutes = getNowMinutesDallas();
  return minutes >= OPEN_MINUTE && minutes < CLOSE_MINUTE;
}
