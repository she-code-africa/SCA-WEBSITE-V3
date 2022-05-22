import api from '../utils/api';
const baseUrl = process.env.REACT_APP_BASE_URL;

export function getEvents () {
  const events = JSON.parse(localStorage.getItem('sca_events'));
  if (events) {
    return Promise.resolve(events);
  }
  return api.get(`${baseUrl}/events`).then((events) => {
    localStorage.setItem('sca_events', JSON.stringify(events))
    return events;
  });
}
