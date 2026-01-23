import { compareAsc, isAfter, isThisYear, getYear } from "date-fns";

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
  const now = new Date();

  // 1️⃣ Filter only past events
  const pastEvents = events.filter((event) => {
    const eventDate = new Date(event.eventDate);
    return isAfter(now, eventDate); // today is after eventDate
  });

  // 2️⃣ Sort past events by date (oldest → newest)
  pastEvents.sort((a, b) =>
    compareAsc(new Date(a.eventDate), new Date(b.eventDate))
  );

  return pastEvents;
};

export const getEventYears = (events) => {
  const years = events.map((event) => {
    const date = new Date(event.eventDate);
    return date.getFullYear();
  });

  // Remove duplicates & sort descending
  return [...new Set(years)].sort((a, b) => b - a);
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

export function IsImageOk(img) {
  if (!img.complete) {
    return false;
  }
  if (img.naturalWidth === 0) {
    return false;
  }
  return true;
}

function checkUrl(url, callback) {
  fetch(url, { method: "head" }).then(function (status) {
    callback(status.ok);
  });
}

export function urlExists(url) {
  checkUrl(url, function (exists) {
    if (exists) {
      return true;
    } else {
      return false;
    }
  });
}
