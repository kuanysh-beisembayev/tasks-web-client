import {
  parseISO,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import { NewTask } from "../types";

export const createNewTask = (): NewTask => {
  return {
    name: "",
    description: "",
  };
};

export const formatDateString = (dateString: string) => {
  const date = parseISO(dateString);
  const minuteDifference = differenceInMinutes(new Date(), date);

  if (minuteDifference < 1) {
    return "just now";
  }

  if (minuteDifference < 60) {
    return `${minuteDifference} minute(s) ago`;
  }

  const hourDifference = differenceInHours(new Date(), date);

  if (hourDifference < 24) {
    return `${hourDifference} hour(s) ago`;
  }

  const dayDifference = differenceInDays(new Date(), date);
  return `${dayDifference} day(s) ago`;
};
