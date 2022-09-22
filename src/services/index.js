import api from '../utils/api';
const baseUrl = process.env.REACT_APP_BASE_URL;

export function getEvents () {
  return api.get(`${baseUrl}/events`).then((events) => {
    return events;
  });
}

export function getChapters () {
  return api.get(`${baseUrl}/chapters`).then((chapters) => {
    return chapters;
  });
}

export function getReach () {
  return api.get(`${baseUrl}/reach`).then((reach) => {
    return reach;
  });
}

export function getPartners () {
  return api.get(`${baseUrl}/partners`).then((partners) => {
    return partners;
  });
}

export function getTeams () {
  return api.get(`${baseUrl}/teams`).then((teams) => {
    return teams;
  });
}

