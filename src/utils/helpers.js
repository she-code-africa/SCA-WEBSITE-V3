import { compareAsc, isAfter, isThisYear } from "date-fns";

export const sortUpcomingEventByDate = (events) => {
  const date = new Date();
  // filter to get only upcoming events
  const _events = events.filter(
    (event) => !isAfter(date, new Date(event.eventDate))
  );

  // sort upcoming events by date
  _events.sort((a, b) =>
    compareAsc(new Date(a.eventDate), new Date(b.eventDate))
  );

  return _events;
};

export const sortPastEventsByDate = (events) => {
  const date = new Date();
  const lastYear = date.getFullYear() - 1;
  // filter to get only past events
  const _events = events.filter((event) =>
    isAfter(date, new Date(event.eventDate))
  );

  const prevAndCurrentYear = _events.filter((event) => {
    // console.log(Number(getDateBreakdown(event.eventDate).year) >= lastYear);

    return (
      isThisYear(new Date(event.eventDate)) ||
      Number(getDateBreakdown(event.eventDate).year) >= lastYear
    );
  });

  // sort past events by date

  prevAndCurrentYear.sort((a, b) =>
    compareAsc(new Date(a.eventDate), new Date(b.eventDate))
  );

  return prevAndCurrentYear;
};

export const getDateBreakdown = (_date) => {
  const date = new Date(_date);
  const month = date.toLocaleString("default", { month: "short" });
  const longMonth = date.toLocaleString("default", { month: "long" });
  const numericMonth = date.toLocaleString("default", { month: "numeric" });
  let day = date.toLocaleString("default", { day: "numeric" });
  let year = date.toLocaleString("default", { year: "numeric" });
  let hour = date.toLocaleString("default", { hour: "numeric", hour12: true });
  let hour24 = date.toLocaleString("default", { hour: "numeric" });
  let minute = date.toLocaleString("default", { minute: "numeric" });
  let hoursAndMinutes = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return {
    month,
    longMonth,
    numericMonth,
    day,
    year,
    hour,
    hour24,
    minute,
    hoursAndMinutes,
  };
};
