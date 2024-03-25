import dayjs from "dayjs";

export function formatTimeStamp(timestamp) {
  return dayjs(timestamp?.toDate()).format("DD/MM/YYYY");
}
