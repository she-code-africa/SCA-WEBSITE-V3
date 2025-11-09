import { Link } from "react-router-dom";

export const paths = {
  home: "/",
  about: "/about",
  team: "/team",
  engineering: "/school-of-engineering",
  products: "/school-of-products",
  appliedSkills: "/school-of-applied-skills",
  stemSchool: "/stem-school",
  initiatives: "/initiatives",
  chapters: "/chapters",
  donate_partner: "/donate-partner",
  donate: "/donate",
  partner: "/partner",
  events: "/events",
  view_event: "/view/events/:id",
  jobs: "/jobs",
  programs: "/programs",
  register_org: "/jobs/register/org-details",
  login_org: "/jobs/org/login",
  forgot_password_org: "/jobs/forgot-password",
  post_job: "/jobs/post/new",
  view_job: "/view/jobs/:id",
  profile: "/jobs/:username",
  editProfile: "/edit/jobs/:username",
  contribution1: "/programs/contributhon-1",
  contribution: "/programs/contributhon",
  bootcamp: "/programs/sca-cloud-school-bootcamp",
  codecamp: "/summer-code-camp-class-of-2020",
  terms: "/terms",
  faq: "/faq",
  codeOfConduct: "/code-of-conduct",
  privacy: "/privacy",
  volunteer: "/volunteer",
  hire: "/hire",
  leadChapter: "/chapters/form",
  community: "/community",
  contactUs: "/contact-us",
  chapterDetails: "chapters/:id",
};

export const apiConstants = {
  events: "events",
  reach: "reach",
  partners: "partners",
  teams: "teams",
  testimonials: "testimonials",
  chapters: "chapters",
  programs: "programs",
  programsCategories: "programsCategories",
  programSuccess: "program-success",
  initiatives: "getInitiatives",
  jobs: "jobs",
  job: "job",
  reports: "reports",
  companyCategory: "companyCategory",
  jobTypes: "jobTypes",
  jobCategory: "jobCategory",
  courses: "allCourses",
  academy: "academy",
  school: "school",
};

export const communityFaq = [
  {
    heading: "What is She Code Africa?",
    content:
      "She Code Africa is a community that is focused on celebrating and technically empowering young girls and women in technology across Africa. Our community consists of over 10000 members with active members across Nigeria, Ghana, Kenya, Zimbabwe, Uganda, South Africa, Cameroon, Cote D'Ivoire, Rwanda, Liberia and counting",
  },
  {
    heading: "Is She Code Africa a not-for-profit organisation?",
    content:
      "Yes, She Code Africa is a not-for-profit organisation. We do not earn profits for ourselves. All of the money earned by or donated to the community is used in pursuing the organization's objectives and keeping it running.",
  },
  {
    heading: "What is She Code Africa Mission?",
    content:
      "Our mission is to build a community that embodies Technical growth, networking, mentoring and visibility among all levels and career roles in Technology.",
  },
  {
    heading:
      "Does She Code Africa have a city chapter or campus chapter near me?",
    content:
      "She Code Africa currently has several chapters across several African countries, visit here to find a chapter in your locality.",
  },
  {
    heading: "Where can I find out more about your organization?",
    content: (
      <>
        Check out our{" "}
        <Link to={paths.about} style={{ color: "#6D033F" }}>
          About Us
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    heading: "Is SheCodeAfrica present on all social media platforms?",
    content: (
      <>
        Yes we are. You can find us on
        <a
          href="https://www.instagram.com/shecodeafrica"
          target="_blank"
          style={{ color: "#6D033F" }}
          rel="noreferrer"
        >
          {" "}
          Instagram,
        </a>
        <a
          href="https://twitter.com/SheCodeAfrica"
          target="_blank"
          style={{ color: "#6D033F" }}
          rel="noreferrer"
        >
          {" "}
          Twitter,
        </a>
        <a
          href="https://www.linkedin.com/company/she-code-africa"
          target="_blank"
          style={{ color: "#6D033F" }}
          rel="noreferrer"
        >
          {" "}
          LinkedIn,
        </a>
        <a
          href="https://facebook.com/SheCodeAfrica"
          target="_blank"
          style={{ color: "#6D033F" }}
          rel="noreferrer"
        >
          {" "}
          Facebook,
        </a>
        <a
          href="https://medium.com/shecodeafrica"
          target="_blank"
          style={{ color: "#6D033F" }}
          rel="noreferrer"
        >
          {" "}
          Medium
        </a>
        .
      </>
    ),
  },
];

export const partnershipFaq = [
  {
    heading: "I love what your organization does. How can I partner with SCA?",
    content: (
      <>
        Visit our{" "}
        <Link to={paths.donate_partner} style={{ color: "#6D033F" }}>
          partnership page
        </Link>{" "}
        to find out more about this
      </>
    ),
  },
  {
    heading: "Why should I partner with She Code Africa?",
    content:
      "Your organization would have the opportunity to reach more African women in tech through our large pool of 10,000+ and growing community members spread across 15+ African countries by any of the following: • Reach more African users virtually through our blog, email newsletter and social media channels.",
  },
  {
    heading: "How do I contact She Code Africa on sponsoring/partnering?",
    content: (
      <>
        You can reach us via{" "}
        <a href="mailto:info@shecodeafrica.org" style={{ color: "#6D033F" }}>
          info@shecodeafrica.org
        </a>
      </>
    ),
  },
];

export const membershipFaq = [
  {
    heading: "Who is an SCA member?",
    content:
      "Members of She Code Africa are part of a global community of over 10,000+ young girls and women professionals in tech dedicated to supporting one another in their career goals.",
  },
  {
    heading: "Who are our members?",
    content: (
      <>
        <ul className="list-disc">
          <li>Developers</li>
          <li>Designers</li>
          <li>Data Scientists.</li>
          <li>Founders</li>
          <li>Product Managers/Program Managers</li>
          <li>Technical Writers and several Others</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Why become a member of She Code Africa?",
    content:
      "Members of She Code Africa get access to all of our initiatives and programs that we offer to help achieve their respective career goals in each industry.",
  },
  {
    heading: "How do I become a member of She Code Africa?",
    content:
      "To be a member of She Code Africa, simply sign up to join our platform here . You can also become a member by attending a local SCA chapter event close to you.",
  },
  {
    heading: "What are the benefits of membership of She Code Africa?",
    content: (
      <>
        <ul className="list-disc">
          <li>
            Full access to coding &amp; tech resources -Tutorials, articles, and
            videos.
          </li>
          <li>
            Access to job opportunities and promotions to global conferences and
            tech events.
          </li>
          <li>
            The opportunity to network and connect with like minds in the same
            career field.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "How can I get involved in She Code Africa?",
    content: (
      <>
        You can join any She Code Africa city chapter or campus chapter nearest
        you. Each local community has regular events for women-in-tech to
        further enhance their technical skills and leadership skills. You can
        also follow us on
        <a
          href="https://www.instagram.com/shecodeafrica"
          target="_blank"
          style={{ color: "#6D033F" }}
          rel="noreferrer"
        >
          {" "}
          Instagram,
        </a>
        <a
          href="https://twitter.com/SheCodeAfrica"
          target="_blank"
          style={{ color: "#6D033F" }}
          rel="noreferrer"
        >
          {" "}
          Twitter,
        </a>
        <a
          href="https://www.linkedin.com/company/she-code-africa"
          target="_blank"
          style={{ color: "#6D033F" }}
          rel="noreferrer"
        >
          {" "}
          LinkedIn,
        </a>
        <a
          href="https://facebook.com/SheCodeAfrica"
          target="_blank"
          style={{ color: "#6D033F" }}
          rel="noreferrer"
        >
          {" "}
          Facebook,
        </a>
        <a
          href="https://medium.com/shecodeafrica"
          target="_blank"
          style={{ color: "#6D033F" }}
          rel="noreferrer"
        >
          {" "}
          Medium
        </a>
        .
      </>
    ),
  },
];

export const programsFaq = [
  {
    heading: "Can I attend an She Code Africa conference or event for free?",
    content: (
      <>
        Visit our events page to find out more about this Yes, our offline and
        online events are free. Check our past and present{" "}
        <Link to={paths.events} style={{ color: "#6D033F" }}>
          events page
        </Link>{" "}
        .
      </>
    ),
  },
  {
    heading: "How can I volunteer to be a mentor on your Mentorship Program?",
    content: (
      <>
        You can sign up to be a Mentor /mentee when applications for the next
        cohort roll out. Visit{" "}
        <Link to={paths.events} style={{ color: "#6D033F" }}>
          {" "}
          here{" "}
        </Link>
        to learn more about this program and when applications for a new cohort
        kicks off.
      </>
    ),
  },
];

export const jobsFaq = [
  {
    heading: "Can I post a job to your community?",
    content: (
      <>
        Yes you can, kindly visit our{" "}
        <Link to={paths.jobs} style={{ color: "#6D033F" }}>
          {" "}
          jobs page{" "}
        </Link>
        to register as an organization and post job opportunities.
      </>
    ),
  },
  {
    heading: "How can I apply for a job on the Jobs page?",
    content:
      "Click on view more of the particular job you are interested in and you will be redirected to the job’s main page.",
  },
  {
    heading: "How can I know if a job is still available?",
    content:
      "On the job’s main page you will see active which shows that particular role is still available.",
  },
];

export const accountInfo = [
  {
    heading: "DOM ACCOUNT WIRE TRANSFER  ",
    sub: "( USD TRANSACTIONS)",
    acct_details: {
      bank_name: "UNITED BANK FOR AFRICA PLC, NIGERIA",
      account_name: "SHE-CODE AFRICA WOMEN TECH INITIATIVE",
      account_number: "3003292380",
      routing_code: "UNAFNGLA",
    },
  },
  {
    heading: "DOM ACCOUNT WIRE TRANSFER ",
    sub: "( EUR TRANSACTIONS)",
    acct_details: {
      bank_name: "UNITED BANK FOR AFRICA PLC, NIGERIA",
      account_name: "SHE-CODE AFRICA WOMEN TECH INITIATIVE",
      account_number: "3003570329",
      routing_code: "UNAFNGLA",
    },
  },
  {
    heading: "NAIRA ACCOUNT WIRE TRANSFER ",
    sub: "( FOR NAIRA AND OR OTHER CURRENCY )",
    acct_details: {
      bank_name: "UNITED BANK FOR AFRICA PLC, NIGERIA",
      account_name: "SHE-CODE AFRICA WOMEN TECH INITIATIVE",
      account_number: "1023945387",
      routing_code: "UNAFNGLA",
    },
  },
];

export const homepageOurCommunityCards = [
  {
    heading: "Academy",
    textContent:
      "Kick off or scale your Tech career through any of our academy programs, fully tailored to meet you at your learning journey with the help of experts.",
    bgImage: "card-body-img-3",
    link: "/academy",
  },
  {
    heading: "Our Communities and Chapters",
    textContent:
      "Join Our community platform and get to connect with 25,000+ African women in tech from around the continent just like you.",
    bgImage: "card-body-img-4",
    link: paths.community,
  },
  {
    heading: "Our Events",
    textContent:
      "Get access to events and trainings that focus on empowering and increasing the participation of girls and women in technology across Africa.",
    bgImage: "card-body-img-1",
    link: paths.events,
  },
  {
    heading: "Our Initiative",
    textContent:
      " As a non-profit organization in the tech sector, we recognize the challenges and difficulties involved in launching or scaling a career in tech.",
    bgImage: "card-body-img-2",
    link: paths.initiatives,
  },
];

export const whoWeAreTexts = [
  {
    heading: "our vision",
    text: "An Africa where women are equally represented across all career roles in Technology",
  },

  {
    heading: "our mission",
    text: "To build a community that embodies technical growth, networking, mentorship and visibility amongst all level career roles in Technology.",
  },

  {
    heading: "our core values",
    text: "Team work, Community, Technical growth, Leadership, Visibility.",
  },
];

export const youtubeVideos = [
  {
    id: 0,
    description: "Nicole's story - Chasing your dreams in Tech",
    video: "https://www.youtube.com/embed/wBVYJWAH2B0",
  },
  {
    id: 1,
    description: "Ayodele's Story",
    video: "https://www.youtube.com/embed/uwpBqSkJTPg",
  },
  {
    id: 2,
    description: "Bami's Story",
    video: "https://www.youtube.com/embed/USWzE09j0M8",
  },
];

// inititiatives page

export const ourInitiatives = [
  {
    id: 1,
    title: "laptop scholarship",
    description:
      "At our Laptop Scholarship Initiative, we believe that every girl deserves the chance to succeed and we are committed to providing equal access to technology for all. We want to help alleviate that burden and ensure that every girl has the opportunity to achieve their tech dream.",
  },
  {
    id: 2,
    title: "data scholarship",
    description:
      "Our aim with the Data Scholarship Initiative is to ensure that women have equal access to the internet. We recognize that the cost of internet service can be a significant obstacle for women pursuing careers in the tech industry, and we want to help alleviate this burden. Our goal is to provide every woman with the opportunity to achieve her tech aspirations.",
  },
  {
    id: 3,
    title: "financial scholarship",
    description:
      "An opportunity for students to receive financial assistance to pursue their career in tech. We understand that the cost of paying for courses online and other expenses can be a significant barrier for many ladies, and our Financial Scholarship Initiative aims to break down that barrier and provide support to those who are passionate about learning and achieving success.",
  },
  {
    id: 4,
    title: "course scholarship",
    description:
      "An opportunity for students to receive financial assistance to pursue their career in tech. We understand that the cost of paying for courses online and other expenses can be a significant barrier for many ladies, and our Financial Scholarship Initiative aims to break down that barrier and provide support to those who are passionate about learning and achieving success.",
  },
];

export const whatsinStoreForYou = [
  {
    bg: "",
    text: "Find your people",
  },
  {
    bg: "",
    text: "A supportive community",
  },
  {
    bg: "",
    text: "Access mentorship and career support",
  },
  {
    bg: "",
    text: "Discover programs, scholarships, events and other opportunities",
  },
  {
    bg: "",
    text: "Connect with like-minded women across Africa",
  },
  {
    bg: "",
    text: "A chance to make a difference",
  },
];

export const impactStats = [
  {
    id: 1,
    number: "5k",
    description:
      "women and girls trained through our Academy and training programs",
  },
  {
    id: 2,
    number: "2674",
    description: "African countries represented & 40+ chapter locations",
  },
  {
    id: 3,
    number: "760k",
    description: "program beneficiaries and scholarship recipients. ",
  },
  {
    id: 4,
    number: "5M",
    description:
      "people Inspired by the Stories of African Girls and women in Tech",
  },
];

export const sponsorImpactStats = [
  {
    id: 1,
    number: "65000",
    description: "program beneficiaries and scholarship recipients. ",
  },
  {
    id: 2,
    number: "40000",
    description: "community members.",
  },
  {
    id: 3,
    number: "7000",
    description:
      "women and girls trained through our Academy and training programs.",
  },
  {
    id: 4,
    number: "5M",
    description: "people Inspired by the Stories of African Girls in Tech.",
  },
];

export const WaysPartnerCards = [
  {
    id: 1,
    title: "Program Support",
    description:
      "Help fund or co-create training programs, bootcamps, and scholarships that give women real skills to start tech careers.",
    bgColor: "bg-SCA-Bloom",
  },
  {
    id: 2,
    title: "Resource Contribution",
    description:
      "Donate laptops, internet access, or tech tools to help bridge the digital gap and give girls a fair chance to learn.",
    bgColor: "bg-SCA-Blush",
  },
  {
    id: 3,
    title: "Mentorship & Expertise",
    description:
      "Share your time, knowledge, and experience to guide women as they take their first steps in tech.",
    bgColor: "bg-SCA-Blush",
  },
  {
    id: 4,
    title: "Campaigns & Events",
    description:
      "Sponsor or co-host events & campaigns that inspire, connect, and celebrate African women in tech.",
    bgColor: "bg-SCA-Bloom",
  },
];

export const WhyPartnerCards = [
  {
    id: 1,
    title: "Shared Impact",
    description:
      "Every program is designed with community at its heart. Your support helps multiply that impact.",
    bgColor: "bg-SCA-Citrine",
    Color: "text-Primary-Magenta",
  },
  {
    id: 2,
    title: "Reach & Network",
    description:
      "A pan-African community of 40,000+ women and girls learning, mentoring, and leading in tech.",
    bgColor: "bg-SCA-Zesty",
    Color: "text-SCA-Forest",
  },
  {
    id: 3,
    title: "Sustainable Change",
    description:
      "Long-term pathways, skills, mentorship, and access that last a lifetime.",
    bgColor: "bg-SCA-Zesty",
    Color: "text-SCA-Forest",
  },
  {
    id: 4,
    title: "Continental Reach",
    description: "Access to talent and communities across 54 African countries",
    bgColor: "bg-SCA-Citrine",
    Color: "text-Primary-Magenta",
  },
];

export const ReachOutCard = [
  {
    id: 1,
    title: "For media",
    email: "media@shecodeafrica.org",
  },
  {
    id: 2,
    title: "For partnerships",
    email: "partnerships@shecodeafrica.org",
  },
  {
    id: 3,
    title: "For community",
    email: "community@shecodeafrica.org",
  },
  {
    id: 4,
    title: "For programs",
    email: "programs@shecodeafrica.org",
  },
];

export const volunteerCards = [
  {
    id: 1,
    title: "Mentor",
    description:
      "Guide and support women in their tech journey through one-on-one mentorship sessions.",
    skills: ["Tech expertise", "Communication", "Empathy", "Patience"],
  },
  {
    id: 2,
    title: "Event Organizer",
    description:
      "Plan and coordinate community events, meetups, hackathons, and conferences across Africa.",
    skills: ["Organization", "Logistics", "Communication", "Creativity"],
  },
  {
    id: 3,
    title: "Media & Content Creator",
    description:
      "Create educational content, blog posts, designs, and social media content to inspire, educate and promote She Code Africa’s mission.",
    skills: ["Tech expertise", "Communication", "Empathy", "Patience"],
  },
];
