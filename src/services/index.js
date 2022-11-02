import api from '../utils/api';
const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getEvents () {
  const events = await api.get(`${baseUrl}/events`);
  return events;
}

export async function getChapters () {
  const chapters = await api.get(`${baseUrl}/chapters/member-chapters`);
  return chapters;
}

export async function getReach () {
  const reach = await api.get(`${baseUrl}/reach`);
  return reach;
}

export async function getPartners () {
  const partners = await api.get(`${baseUrl}/partners`);
  return partners;
}

export async function getTeams () {
  const teams = await api.get(`${baseUrl}/teams`);
  return teams;
}

export async function getPrograms () {
  const programs = await api.get(`${baseUrl}/programs/member-programs`);
  return programs;
}

