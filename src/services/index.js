import api from "../utils/api";
const baseUrl = process.env.REACT_APP_BASE_URL;
// v3
const baseURL = process.env.REACT_APP_BASE_URL_V3;

export async function getEvents() {
  const events = await api.get(`${baseUrl}/events`);
  return events;
}

export async function getChapters() {
  const chapters = await api.get(`${baseUrl}/chapters/member-chapters`);
  return chapters;
}

export async function getReach() {
  const reach = await api.get(`${baseUrl}/reach`);
  return reach;
}

export async function getPartners() {
  const partners = await api.get(`${baseUrl}/partners`);
  return partners;
}

export async function getSuccessStories() {
  const partners = await api.get(`${baseUrl}/program-success`);
  return partners;
}

export async function getTeams() {
  const teams = await api.get(`${baseUrl}/teams/members`);
  return teams;
}

export async function getPrograms() {
  const programs = await api.get(`${baseUrl}/programs/member-programs`);
  return programs;
}

export async function getProgramsCategories() {
  const programsCategories = await api.get(`${baseUrl}/programs/categories`);
  return programsCategories;
}

export async function mutateEnquires(enquiryData) {
  const enquiresResonse = await api.post(`${baseUrl}/enquiry`, enquiryData);
  return enquiresResonse;
}

// V3 FETCHING
export const getAllPartners = async () => {
  const partnersData = await api.get(`${baseURL}/partners`);
  return partnersData;
};
