import { Link } from "react-router-dom";
import MentorImg from "../images/volunteerImgs/mentor-image.png";
import EventOrganizerImg from "../images/volunteerImgs/event-organizer-image.png";
import ContentCreatorImg from "../images/volunteerImgs/content-creator-image.png";

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
    heading: "Who can join the She Code Africa community?",
    content:
      "Our community is open to girls or women of African descent who have an interest in technology or tech-related fields and are welcome to join! Whether you're a student, self-taught, early-career, or experienced professional you belong here.",
  },
  {
    heading: "Is the community only open to those in Africa?",
    content:
      "Our primary focus is on girls and women of African descent living in Africa, but you can join from anywhere in the world. We welcome African women based in the diaspora who want to stay connected to African tech ecosystems.",
  },
  {
    heading: "How can I join the community?",
    content: (
      <>
        Visit our{" "}
        <Link to={paths.community} style={{ color: "#6D033F" }}>
          Community
        </Link>{" "}
        page and complete the membership form. You’ll receive a welcome email
        with details on how to access our community spaces if your application
        is accepted. We receive a large volume of applications and do our best
        to review bi-weekly, a strong application gives you a higher chance of
        being accepted.
      </>
    ),
  },
  {
    heading: "Are there local SCA chapters?",
    content: (
      <>
        Yes! We have active chapters in several African countries and cities.
        You can find or apply to start a chapter at our.
        <a href="www.shecodeafrica.org/chapters" style={{ color: "#6D033F" }}>
          Chapters Page{" "}
        </a>{" "}
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
    heading: "How can my organization partner with She Code Africa? ",
    content:
      "We love working with partners who share our vision. Whether you're looking to sponsor a program, provide resources, or collaborate on an activity, reach out to us via partnerships@shecodeafrica.org with details about your proposal.",
  },
  {
    heading: "What types of partnership opportunities are available?",
    content: (
      <>
        <p>We offer partnership packages for:</p>

        <ul
          style={{
            listStyleType: "disc",
            listStylePosition: "inside",
            paddingLeft: 0,
            margin: 0,
            marginTop: "8px",
            color: "#6D033F",
          }}
        >
          <li>Program and event sponsorships</li>
          <li>Laptop and device scholarships</li>
          <li>Hiring Talent pipeline support</li>
          <li>Event collaborations</li>
          <li>Mentorship and training delivery</li>
          <li>Media partnership</li>
        </ul>

        <p>We also co-design custom programs with aligned partners.</p>
      </>
    ),
  },
  {
    heading: "Can I sponsor individual girls in the community?",
    content: (
      <>
        Yes, through our Academy program or initiatives like our Laptop
        Scholarship Program or event sponsorships. You can directly impact lives
        by funding tools or training for girls. Email{" "}
        <a
          href="mailto:partnerships@shecodeafrica.org"
          style={{ color: "#6D033F" }}
        >
          partnerships@shecodeafrica.org
        </a>{" "}
        for current sponsorship opportunities.
      </>
    ),
  },
];

export const membershipFaq = [
  {
    heading: "Who is an SCA Community Member?",
    content:
      "Members of She Code Africa are part of a global community of over 40,000+ young girls and women professionals in tech dedicated to supporting one another in their career goals.",
  },
  {
    heading: "What are the benefits of becoming a member",
    content:
      "As a member, you get access to a supportive community of women and girls learning, growing, and building together. You’ll receive updates on upcoming programs, early access to opportunities, and the chance to join a local chapter or start one in your area. Members also gain entry into free SCA events, workshops, and initiatives designed to help you learn, connect, and stay motivated on your tech journey.",
  },
  {
    heading: "Is SCA membership free?",
    content:
      "Yes! Our core community membership remains completely free and accessible to all women and girls across Africa.However, we are working on introducing an optional premium membership tier that will offer exclusive access to advanced opportunities, tools, resources, and perks for a nominal fee. This will be entirely optional and clearly communicated once launched.",
  },
  {
    heading: "Are there age limits to joining?",
    content:
      "While most of our programs target girls and women aged 16–45, the community itself is open to all women of African descent regardless of age.",
  },
  {
    heading: "Can men join?",
    content:
      "Our community and programs are centered around girls and women in tech. However, men who support our mission can collaborate through mentorship, partnerships, volunteering, or allyship training",
  },
  {
    heading: "How can I get involved in She Code Africa?",
    content: (
      <>
        You can join any She Code Africa city chapter or campus chapter nearest
        you. Each local community has regular events for women-in-tech to
        further enhance their technical skills and leadership skills. You can
        also follow us on{" "}
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
    heading: "What kinds of programs does SCA offer?",
    content: (
      <>
        <p>We run a variety of programs including:</p>

        <ul
          style={{
            listStyleType: "disc",
            listStylePosition: "inside",
            paddingLeft: 0,
            margin: 0,
            marginTop: "8px",
            color: "#6D033F",
          }}
        >
          <li>Beginner to advanced technical training</li>
          <li>Bootcamps (e.g., Mobile, Backend, Frontend)</li>
          <li>Career readiness and soft skills training</li>
          <li>Hackathons and demo days</li>
          <li>Mentorship and internship programs</li>
          <li>Conferences and community meetups</li>
        </ul>
      </>
    ),
  },
  {
    heading: "How can I find out about upcoming programs or events?",
    content: (
      <>
        Follow us on all social media platforms:
        <a
          href="https://instagram.com/shecodeafrica"
          target="_blank"
          style={{ color: "#6D033F" }}
          rel="noreferrer"
        >
          {" "}
          @shecodeafrica,
        </a>{" "}
        subscribe to our newsletter, or check our Events page regularly.
      </>
    ),
  },
  {
    heading: "Do you provide certificates?",
    content:
      "Yes, select programs come with certificates of participation or completion, typically based on your level of engagement or assessment results.",
  },
  {
    heading: "Do I need to pay for programs?",
    content: (
      <>
        <p>
          Most of our programs remain fully sponsored and free for participants.
          However, some select offerings, such as advanced tracks in the SCA
          Academy or specialized workshops/events, may require a participation
          fee.
        </p>
        <p style={{ marginTop: "6px" }}>
          All paid opportunities will be clearly marked, with transparent
          pricing and scholarship options where available. We aim to keep costs
          affordable and aligned with the value participants receive.
        </p>
      </>
    ),
  },
  {
    heading: "Can I attend SCA events in person?",
    content:
      "Yes! We host both virtual and in-person events across different cities. Stay tuned to our channels for announcements, venue details, and registration instructions.",
  },
];

export const jobsFaq = [
  {
    heading: "Is She Code Africa hiring?",
    content:
      "We post open roles on our Careers page and social media channels. Follow us for updates or sign up for job alerts through our newsletter.",
  },
  {
    heading: "Can I volunteer with SCA?",
    content: (
      <>
        Absolutely! Volunteers play a huge role in our programs, events, and
        operations. From mentorship to speaking opportunities to content
        creation, there are many ways to support. Visit{" "}
        <Link to={paths.volunteer} style={{ color: "#6D033F" }}>
          {" "}
          Volunteer page{" "}
        </Link>
        to express interest.
      </>
    ),
  },
  {
    heading: "Do you offer internships?",
    content:
      "We occasionally offer internal internships. Additionally, some of our programs connect participants to internship opportunities with our partners. These will always be listed across our platforms and community space when available.",
  },
  {
    heading: "Can SCA help me find a tech job?",
    content:
      "While we don’t operate as a recruiting agency, we regularly share opportunities with hiring partners and connect our most engaged members to internships, fellowships, and job opportunities.",
  },
  {
    heading:
      "I applied for a program but haven’t heard back. What should I do?",
    content:
      "We receive a high volume of applications and can only contact selected applicants for most programs. If you haven’t heard back after 4–6 weeks, it’s safe to assume your application was not selected this time. Don’t give up, there are always more opportunities ahead!",
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
    number: "7k",
    description:
      "women and girls trained through our Academy and training programs",
  },
  {
    id: 2,
    number: "40k",
    description: "community members",
  },
  {
    id: 3,
    number: "65k",
    description: "program beneficiaries and scholarship recipients. ",
  },
  {
    id: 4,
    number: "5M",
    description:
      "People Inspired by the Stories of African Girls and women in Tech",
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
