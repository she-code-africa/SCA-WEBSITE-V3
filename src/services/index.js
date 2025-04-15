import api from "../utils/api";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getEvents() {
  const events = await api.get(`${baseUrl}/events`);
  return events;
}

export async function getChapters(page) {
  const chapters = await axios.get(
    `${baseUrl}/chapters/member-chapters?page=${page}&limit=12`
  );

  return chapters.data;
}

export async function getChapter(chapterId) {
  // `${baseUrl}/chapters/categories/${categoryId}/member-chapters/${chapterId}`;
  const token = JSON.parse(localStorage.getItem("userDetails"))?.token;
  const chapters = await api.get(
    `${baseUrl}/chapters/member-chapters/${chapterId}`
  );
  return chapters;
}

export async function getReach() {
  const reach = await api.get(`${baseUrl}/reach`);
  return reach;
}

export async function getTestimonials() {
  const testimonials = await api.get(`${baseUrl}/testimonials`);
  return testimonials;
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

export async function getInitiatives() {
  const initiatives = await api.get(`${baseUrl}/initiatives`);
  return initiatives;
}

export async function getPrograms() {
  const programs = await api.get(`${baseUrl}/programs/member-programs`);
  return programs;
}

export async function getReports() {
  const programs = await api.get(`${baseUrl}/reports`);
  return programs;
}

export async function getJobs() {
  const jobs = await api.get(`${baseUrl}/job/postings`);
  return jobs;
}

export async function getJob(id) {
  const jobs = await api.get(`${baseUrl}/job/postings/${id}`);
  return jobs;
}

export async function getProgramsCategories() {
  const programsCategories = await api.get(`${baseUrl}/programs/categories`);
  return programsCategories;
}

export async function getCompanyCategory() {
  const companyCategory = await api.get(`${baseUrl}/company/category`);
  return companyCategory;
}

export async function getJobTypes() {
  const jobTypes = await api.get(`${baseUrl}/job/types`);
  return jobTypes;
}

export async function getJobCategory() {
  const jobCategory = await api.get(`${baseUrl}/job/category`);
  return jobCategory;
}

export async function getAllCourses() {
  const courses = await api.get(`${baseUrl}/courses`);
  return courses;
}

export async function getAllSchools() {
  const schools = await api.get(`${baseUrl}/schools`);
  return schools;
}

export async function getASchoolBySlugOrId(id) {
  const school = await api.get(`${baseUrl}/schools/${id}`);
  return school;
}

// mutations

export async function mutateEnquires(enquiryData) {
  const enquiresResonse = await api.post(`${baseUrl}/enquiry`, enquiryData);
  return enquiresResonse;
}

export async function mutateRegisterOrganization(formdata) {
  const registrationDetails = await api.post(
    `${baseUrl}/company/register`,
    formdata
  );
  return registrationDetails;
}

export async function mutateOrganizationLogin(formData) {
  const loginDetails = await api.post(`${baseUrl}/company/login`, formData);
  return loginDetails;
}

export async function mutateVolunteer(payload) {
  const enquiresResonse = await api.post(
    `${baseUrl}/volunteer-request`,
    payload
  );
  return enquiresResonse;
}

export async function mutateTalent(payload) {
  return await api.post(`${baseUrl}/talent-request`, payload);
}

export async function mutatePostJobs(payload) {
  const token = JSON.parse(localStorage.getItem("userDetails"))?.token;
  return await api.post(`${baseUrl}/job/postings`, payload, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export async function mutateEditCompany(payload) {
  const userData = JSON.parse(localStorage.getItem("userDetails"));
  return await api.put(`${baseUrl}/company/${userData?.userId}`, payload, {
    headers: {
      authorization: `Bearer ${userData?.token}`,
    },
  });
}
