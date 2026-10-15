import { format, formatDistanceToNow } from "date-fns";

export const formatDate = function (value: string | Date) {
  return format(new Date(value), "d MMM yyyy");
};

export const formatDateTime = function (value: string | Date) {
  return format(new Date(value), "d MMM yyyy · h:mma");
};

export const formatRelative = function (value: string | Date) {
  return formatDistanceToNow(new Date(value), { addSuffix: true });
};

export const formatCount = function (value: number) {
  return value.toLocaleString("en-US");
};

export const fullName = function (user: { first_name: string | null; last_name: string | null }) {
  return [user.first_name, user.last_name].filter(Boolean).join(" ");
};
