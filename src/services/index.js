import api from "../utils/api";
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

export async function getTestimonials () {
  const testimonials = await api.get(`${baseUrl}/testimonials`);
  return testimonials;
}

export async function getPartners () {
  const partners = await api.get(`${baseUrl}/partners`);
  return partners;
}

export async function getSuccessStories () {
  const partners = await api.get(`${baseUrl}/program-success`);
  return partners;
}

export async function getTeams () {
  const teams = await api.get(`${baseUrl}/teams/members`);
  return teams;
}

export async function getInitiatives () {
  const initiatives = await api.get(`${baseUrl}/initiatives`);
  return initiatives;
}

export async function getPrograms () {
  const programs = await api.get(`${baseUrl}/programs/member-programs`);
  return programs;
}

export async function getReports () {
  const programs = await api.get(`${baseUrl}/reports`);
  return programs;
}

export async function getJobs () {
  const jobs = await api.get(`${baseUrl}/job/postings`);
  return jobs;
}

export async function getJob (id) {
  const jobs = await api.get(`${baseUrl}/job/postings/${id}`);
  return jobs;
}

export async function getProgramsCategories () {
  const programsCategories = await api.get(`${baseUrl}/programs/categories`);
  return programsCategories;
}

export async function mutateEnquires (enquiryData) {
  const enquiresResonse = await api.post(`${baseUrl}/enquiry`, enquiryData);
  return enquiresResonse;
}
export async function mutateVolunteer (payload) {
  const enquiresResonse = await api.post(`${baseUrl}/volunteer-request`, payload);
  return enquiresResonse;
}


export async function mutateTalent (payload) {
  return await api.post(`${baseUrl}/talent-request`, payload);
}

