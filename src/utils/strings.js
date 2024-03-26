import dayjs from "dayjs";

import advancedFormat from "dayjs/plugin/advancedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

export function formatTimeStamp(timestamp) {
  return dayjs(timestamp?.toDate()).format("DD/MM/YYYY");
}

export function formatTimeStampRelativeTime(timestamp) {
  return dayjs(timestamp?.toDate()).fromNow();
}
