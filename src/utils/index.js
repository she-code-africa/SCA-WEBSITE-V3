import { Link } from "react-router-dom";
import programImage from "../images/academy/cloud-program.svg";
import onlineCourseImage from "../images/academy/online-course.svg";
import ghanaImage from "../images/events-page/ghanaevent.png";
import secondEventImage from "../images/events-page/secondevent.png";

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
  donate: "/donate-partner",
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
};

export const partners = [
  {
    src: "https://shecodeafrica.org/images/lag.edu.png",
    alt: "Lagos State Ministry",
  },
  {
    src: "https://shecodeafrica.org/images/Layer-5.png",
    alt: "Layer 5",
  },
  {
    src: "https://shecodeafrica.org/images/deimos.png",
    alt: "Deimos",
  },
  {
    src: "https://shecodeafrica.org/images/cloudbees.png",
    alt: "Cloud Bees",
  },
  {
    src: "https://shecodeafrica.org/images/chimoney.png",
    alt: "Lagos State Ministry",
  },
];

export const past_events = [
  {
    id: "3trs99",
    name: "SCA Mentoring Program (Cohort 6) - Mentee Application",
    image:
      "https://res.cloudinary.com/dgrj9yagf/image/upload/v1656600385/iwihjs3uzbq60z2wzw4q.png",
    details:
      "Get to work with dedicated mentors and a detailed learning curriculum for 3 months virtually on any of these tracks; Software Engineering , Product or Data. Sign up below",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSchPy0bAK62PYaxJRLV3H5Lo8v725ik-qNTtw3RtkZ20MB5FQ/closedform",
  },
  {
    id: "jkhai00",
    name: "She Code Africa: Chapter Fest",
    image:
      "https://res.cloudinary.com/dgrj9yagf/image/upload/v1656713776/tpv0i98w1eomn1xjxxb4.jpg",
    details:
      "The Chapters Program of She Code Africa is organizing this event to highlight the different areas in tech and we help women and girls through the chapters program.",
    url: "https://www.youtube.com/watch?v=goMZWDd9nuE",
  },
  {
    id: "g1jyu129",
    name: "Laptop Scholarship Fund - Q2 Applications",
    image:
      "https://res.cloudinary.com/dgrj9yagf/image/upload/v1656600419/bjs58rng7vs88naifter.png",
    details:
      "Apply to benefit from our She Code Africa Laptop scholarship initiative; Every quarter for 2022 we plan to give out brand new laptops to ladies in tech within the She Code Africa community, who cannot afford to own one. Deadline for Q2 application ends June 18th 2022",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSchPy0bAK62PYaxJRLV3H5Lo8v725ik-qNTtw3RtkZ20MB5FQ/closedform",
  },
];

export const jobs = [
  {
    title: "Senior Site Reliability Engineer, Wikimedia Cloud Services",
    company: "Wikimedia Foundation",
    job_type: "Full Time",
    location: "San Francisco, CA, USA",
    summary:
      "Summary The Wikimedia Foundation is looking for a Senior Site Reliability Engineer to join our team, reporting to the Our small team is passionate about enabling the creation of new and exciting data products. As part of the larger Platform Engineering team, we are responsible for the Data Platform that enables teams across the foundation to build data pipelines. We are looking for a software engineer to help us bring the Platform Engineering team to the next level. We use open-source tools as much as possible, and always open source our own work. Java, Go, Python and Scala make up most of our code, but we value using the right tool for the job. Our world is vast and can be complicated, so we value communication, enthusiasm, and an eagerness to learn. You are responsible for: ",
    published_date: "January 17th, 2022",
    id: "6242ec23f661290004e178e4",
    status: "Active",
    link: "https://grnh.se/c00eac431us",
    deadline: "April 29th, 2022",
    currency: "USD",
    field: "Software Engineering",
    salary_range: "1500 - 2000",
    minimum_experience: "8 Years",
  },
  {
    title:
      "Engineering Manager, Site Reliability Engineering (Service Operations)",
    location: "Remote",
    summary:
      "Engineering Manager, Site Reliability Engineering (Service Operations) Summary The Wikimedia Foundation is looking f...",
    published_date: "January 17th, 2022",
    id: "6242ec23f6612178jdwd4",
    status: "Inactive",
  },
];

export const aboutus = [
  {
    header: "10000+",
    content: "Community Members",
  },
  {
    header: "15+",
    content: "African Countries with Members",
  },
  {
    header: "32+",
    content: "Chapter Locations",
  },
];
export const openSource = [
  {
    header: "3",
    content: "Countries",
  },
  {
    header: "4",
    content: "Sponsors",
  },
  {
    header: "24",
    content: "Open Source organization",
  },
  {
    header: "333",
    content: "Ladies",
  },
];

export const cloudP = [
  {
    header: "60",
    content: "Ladies",
  },
  {
    header: "7",
    content: "Countries",
  },
  {
    header: "1",
    content: "Sponsors",
  },
  {
    header: "1",
    content: "Partners",
  },
];

export const highSchoolP = [
  {
    header: "300",
    content: "Ladies",
  },
  {
    header: "26",
    content: "Countries",
  },
];

export const testimonials = [
  {
    img: "https://shecodeafrica.org/images/people.png",
    testimonial:
      "She Code Africa Mentor-ship Program was a huge part of my growth as a woman in tech. I am grateful to my mentor who stressed on understanding the basics of programming explaining the concepts in beginner friendly terms, my fellow mentees who I learnt so much from, to the founder fr this great initiative and to the team members making this possible. Thanks",
    name: "Ruth Ikegah",
  },
  {
    img: "https://shecodeafrica.org/images/people.png",
    testimonial:
      "She Code Africa Mentor-ship Program was a huge part of my growth as a woman in tech. I am grateful to my mentor who stressed on understanding the basics of programming explaining the concepts in beginner friendly terms, my fellow mentees who I learnt so much from, to the founder fr this great initiative and to the team members making this possible. Thanks",
    name: "Ruth Ikegah",
  },
  {
    img: "https://shecodeafrica.org/images/people.png",
    testimonial:
      "She Code Africa Mentor-ship Program was a huge part of my growth as a woman in tech. I am grateful to my mentor who stressed on understanding the basics of programming explaining the concepts in beginner friendly terms, my fellow mentees who I learnt so much from, to the founder fr this great initiative and to the team members making this possible. Thanks",
    name: "Ruth Ikegah",
  },
  {
    img: "https://shecodeafrica.org/images/people.png",
    testimonial:
      "She Code Africa Mentor-ship Program was a huge part of my growth as a woman in tech. I am grateful to my mentor who stressed on understanding the basics of programming explaining the concepts in beginner friendly terms, my fellow mentees who I learnt so much from, to the founder fr this great initiative and to the team members making this possible. Thanks",
    name: "Ruth Ikegah",
  },
];

export const successStories = [
  {
    img: "https://shecodeafrica.org/images/people.png",
    name: "Ruth Ikegah",
    role: "WOSCA OS Challenge Participant",
    story:
      " Ruth Ikegah submitted her first open-source contribution during WOSCA’s practical session in June when we launched the initiative. She recorded a total of 10 pull request during WOSCA's OS Challenge in the subsequent month and is now a GitHub star due to her contributions so far.",
  },
  {
    img: "https://shecodeafrica.org/images/people.png",
    name: "Ruth Ikegah",
    role: "WOSCA OS Challenge Participant",
    story:
      " Ruth Ikegah submitted her first open-source contribution during WOSCA’s practical session in June when we launched the initiative. She recorded a total of 10 pull request during WOSCA's OS Challenge in the subsequent month and is now a GitHub star due to her contributions so far.",
  },
  {
    img: "https://shecodeafrica.org/images/people.png",
    name: "Ruth Ikegah",
    role: "WOSCA OS Challenge Participant",
    story:
      " Ruth Ikegah submitted her first open-source contribution during WOSCA’s practical session in June when we launched the initiative. She recorded a total of 10 pull request during WOSCA's OS Challenge in the subsequent month and is now a GitHub star due to her contributions so far.",
  },
  {
    img: "https://res.cloudinary.com/she-code-africa/image/upload/v1633277235/enrqu4bacqho1xlhgfey.jpg",
    name: "Mark Waite",
    role: "Contributhon Mentor - Jenkins",
    story:
      "I enjoyed working with people on a different continent with different experiences than mine.  It was invigorating to see others learning and growing in their technical skills and experiences.  The participants were patient and understanding during this first session of those times when we didn’t know an answer.  They asked good questions and joined our sessions willingly.",
  },
];

export const team = [
  {
    name: "Ada Nduka Oyom",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1600811315/vqnzyumcxrqqyidh5fb1.jpg",
    role: "Founder",
    details:
      "As the founder, Ada oversees the teams in creating several technical learning & career opportunities for members as well as growing the community’s presence to chapters across Africa. She has been recognised as one of Ytech 100 honourees by the Future awards Africa 2019, Top 50 TechWomen of Lagos by TechCabal & most recently awarded as the role model award winner in the Booking.com Tech Playmaker awards 2020",
  },
  {
    name: "Omotola Eunice Omotayo",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1600961093/qfcunfgns8fuzobm0hve.png",
    role: "Lead, Community Manager",
    details:
      "As the lead for the Community Management team, Omotola brings in her expertise in overseeing the growth of community members through SCA programs and intiatives using educative contents and communication. She helps manages several operations alongside with the cross functional SCA Core team and builds a sense of community. She ensures her team continually serves as the tone, voice and human element behind the SCA brand.",
  },
  {
    name: "Zainab Daodu",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1600964119/mamibxraminn366jsn13.jpg",
    role: "Open Source Programs Manager",
    details:
      "Zainab's role at She Code Africa involves championing and initiating Open Source focused community engagements, programs, initiatives and projects in partnership with Open Source Community Africa (OSCA). Her goal is to drive the movement of women in Africa who are actively involved in Open Source, thereby promoting a more diverse, inclusive and innovative culture within the African open source ecosystem.",
  },
  {
    name: "Temilola Kutelu",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1612533512/ljkesmjtj6cx9v9up3vk.jpg",
    role: "Engineering Team Lead",
    details:
      "Temilola is a Software Engineer, Software Solutions Specialist & Business workflow process automation specialist. She leads the Engineering team at She Code Africa in building out the several internal and community facing technical projects for SCA including the organisation's website which has exposed her to building with new and diverse tools including Keystone JS, a node CMS framework-very interesting addition to her skill set.",
  },
  {
    name: "Eniola Ipoola",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1600969327/klnvcwc5dgg8n7oarymh.png",
    role: "Lead, Technical Facilitator",
    details:
      "Eniola leads the team of technical facilitators at She Code Africa, Asides her volunteer role at She Code Africa, She also works as an Android Developer at Law pavilion in Lagos, Nigeria.",
  },
  {
    name: "Goziem Onugha",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1612444028/r1sawki0hhxqz8wzhsom.jpg",
    role: "General Counsel",
    details:
      "Goziem is a Nigerian trained lawyer with interests in community development, especially as it relates to women. She earned her LL.B from Imo State University and B.L from the Nigerian Law School, Lagos. She is an executive at the Abuja Chapter of the Nigerian Bar Association. Her passion for African development motivates her to partake in programmes driven towards inspiring positive changes in Africa, hence, her involvement in a lot of development",
  },
];

export const summerGallery = [
  {
    url: "https://res.cloudinary.com/she-code-africa/image/upload/v1633706128/yitmdxqq74gi2nzemeoc.jpg",
  },
  {
    url: "https://res.cloudinary.com/she-code-africa/image/upload/v1633706128/yitmdxqq74gi2nzemeoc.jpg",
  },
  {
    url: "https://res.cloudinary.com/she-code-africa/image/upload/v1633706128/yitmdxqq74gi2nzemeoc.jpg",
  },
  {
    url: "https://res.cloudinary.com/she-code-africa/image/upload/v1633706128/yitmdxqq74gi2nzemeoc.jpg",
  },
];

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
        <Link to={paths.donate} style={{ color: "#6D033F" }}>
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
    heading: "DOM ACCOUNT WIRE TRANSFER (USD) ",
    sub: "(for USD TXNs)",
    acct_details: {
      bank_name: "UNITED BANK FOR AFRICA PLC, NIGERIA",
      account_name: "SHE-CODE AFRICA WOMEN TECH INITIATIVE",
      account_number: "3003292380",
      routing_code: "UNAFNGLA",
    },
  },
  {
    heading: "DOM ACCOUNT WIRE TRANSFER (EUR) ",
    sub: "(for USD TXNs)",
    acct_details: {
      bank_name: "UNITED BANK FOR AFRICA PLC, NIGERIA",
      account_name: "SHE-CODE AFRICA WOMEN TECH INITIATIVE",
      account_number: "3003570329",
      routing_code: "UNAFNGLA",
    },
  },
  {
    heading: "NAIRA ACCOUNT WIRE TRANSFER",
    sub: "for other naira and or other currencies TXN",
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
    heading: "Our Community",
    textContent:
      "Join over 10,000 Women in Tech across several African countries on our Slack community to network, stay updated, get help and grow in your career.",
    bgImage: "card-body-img-3",
    link: "/community"
  },
  {
    heading: "Our Communities and Chapters",
    textContent:
      "Join over 10,000 Women in Tech across several African countries on our Slack community to network, stay updated, get help and grow in your career.",
    bgImage: "card-body-img-4",
    link: paths.chapters
  },
  {
    heading: "Our Events",
    textContent:
      "Join over 10,000 Women in Tech across several African countries on our Slack community to network, stay updated, get help and grow in your career.",
    bgImage: "card-body-img-1",
    link: paths.events
  },
  {
    heading: "Our Initiative",
    textContent:
      "Join over 10,000 Women in Tech across several African countries on our Slack community to network, stay updated, get help and grow in your career.",
    bgImage: "card-body-img-2",
    link: paths.initiatives
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

// Accademy pages
export const programsList = [
  {
    id: 0,
    title: "Cloud Programs",
    description:
      "Our Cloud Programs offer a variety of learning initiatives And bootcamps targeted at getting more African women into the Cloud Engineering Space, starting with our cohortly 3-months Cloud School bootcamp",
    image: programImage,
  },
  {
    id: 1,
    title: "Cloud Programs",
    description:
      "Our Cloud Programs offer a variety of learning initiatives And bootcamps targeted at getting more African women into the Cloud Engineering Space, starting with our cohortly 3-months Cloud School bootcamp",
    image: programImage,
  },
];
export const onlineCoursesList = [
  {
    id: 0,
    description:
      "Master of Molecular Science & Software Engineering Online Degree Program",
    image: onlineCourseImage,
  },
  {
    id: 1,
    description:
      "Master of Molecular Science & Software Engineering Online Degree Program",
    image: onlineCourseImage,
  },
  {
    id: 2,
    description:
      "Master of Molecular Science & Software Engineering Online Degree Program",
    image: onlineCourseImage,
  },
  {
    id: 3,
    description:
      "Master of Molecular Science & Software Engineering Online Degree Program",
    image: onlineCourseImage,
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

// events page
export const upcomingEvents = [
  {
    id: 1,
    heading: "Community Connect",
    textContent:
      "Our Cloud Programs offer a variety of learning initiatives And bootcamps targeted at getting more African women into the Cloud Engineering Space, starting with our cohortly 3-months Cloud School bootcamp",
    pathname: "register now",
    eventImage: ghanaImage,
  },
  {
    id: 2,
    heading: "Cloud Programs",
    textContent:
      "Our Cloud Programs offer a variety of learning initiatives And bootcamps targeted at getting more African women into the Cloud Engineering Space, starting with our cohortly 3-months Cloud School bootcamp",
    eventImage: secondEventImage,
    pathname: "try your luck",
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
