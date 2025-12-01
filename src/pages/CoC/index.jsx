// import React from "react";
// import { Helmet } from "react-helmet-async";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// const CodeOfConduct = () => {
//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Code of conduct</title>
//         <meta
//           name="description"
//           content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta property="og:title" content="Code of conduct" />
//         <meta
//           property="og:description"
//           content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
//         />
//         <meta name="twitter:title" content="Code of conduct" />
//         <meta
//           name="twitter:description"
//           content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
//         />
//       </Helmet>
//       <Header />
//       <section
//         className="container mx-auto px-4 pt-[100px] md:pt-[180px]"
//         aria-labelledby="terms-heading"
//       >
//         <div className="container mx-auto text-center">
//           <h1
//             className="text-primary-color font-weight-bolder md:text-4xl text-2xl my-2"
//             id="terms-heading"
//           >
//             CODE OF CONDUCT
//           </h1>
//           <small>
//             She Code Africa as a community is made up of both professionals and
//             volunteers from all over the world, working on every aspect of the
//             mission - including mentorship, technical, and networking.
//           </small>
//         </div>
//         <div className="w-11/12 mx-auto my-10">
//           <h3 className="text-primary-color font-weight-bolder text-2xl">
//             About SCA
//           </h3>
//           <div className="code-of-conduct">
//             <p>
//               <span className="font-weight-bolder">She Code Africa (SCA)</span>{" "}
//               is dedicated to providing a harassment-free experience for African
//               women and girls, regardless of gender, gender identity and
//               expression, sexual orientation, disability, physical appearance,
//               body size, age, or religion. We do not tolerate harassment of
//               participants in any form. This code of conduct applies to all She
//               Code Africa spaces, including Slack, both online and off. Anyone
//               who violates this code of conduct may be sanctioned or expelled
//               from these spaces at the discretion of the Community Managers.
//               Some She Code Africa spaces (such as specific Slack channels) may
//               have additional rules in place, which will be made clearly
//               available to members. Members are responsible for knowing and
//               abiding by these rules. We encourage all those who are members of
//               She Code Africa to help us create safe and positive community
//               experiences. Consequences for noncompliance with the Code of
//               Conduct may include a discussion with mediators, mediation with
//               the member you may have harmed, or as an absolute last resort, a
//               ban from the community.
//             </p>
//             <p>
//               If you believe someone is violating the code of conduct, we ask
//               that you report it by emailing&nbsp;
//               <strong className="font-weight-bolder">
//                 <a
//                   href="mailto:community@shecodeafrica.org"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="focus:outline-none focus:ring focus:ring-tutu"
//                 >
//                   community@shecodeafrica.org
//                 </a>
//               </strong>
//               . For more details please see our Reporting Guidelines .
//               <br />
//               1. Be friendly and patient.
//               <br />
//               2. Be welcoming. We strive to be a community that welcomes and
//               supports people of all backgrounds and identities.
//               <br />
//               3. Be careful in the words that you choose. We are a community of
//               professionals, and we conduct ourselves professionally. Be kind to
//               others. Do not insult or put down other community members.
//             </p>
//             <h3 className="text-primary-color font-weight-bolder text-2xl my-2">
//               Harassment includes:
//             </h3>
//             <ul className="pl-10">
//               <li>
//                 Offensive comments related to gender, gender identity and
//                 expression, sexual orientation, disability, mental illness,
//                 neuro(a)typicality, physical appearance, body size, age, or
//                 religion.
//               </li>
//               <li>
//                 Unwelcome comments regarding a person's lifestyle choices and
//                 practices, including those related to food, health, parenting,
//                 drugs, and employment.
//               </li>
//               <li>
//                 Deliberate misgendering or use of 'dead' or rejected names.
//               </li>
//               <li>
//                 Gratuitous or off-topic sexual images or behaviour in spaces
//                 where they're not appropriate.
//               </li>
//               <li>
//                 Physical contact and simulated physical contact (eg, textual
//                 descriptions like “hug” or “backrub”) without consent or after a
//                 request to stop.
//               </li>
//               <li>Threats of violence.</li>
//               <li>
//                 Incitement of violence towards any individual, including
//                 encouraging a person to commit suicide or to engage in
//                 self-harm.
//               </li>
//               <li>Deliberate intimidation.</li>
//               <li>Stalking or following.</li>
//               <li>
//                 Harassing photography or recording, including logging online
//                 activity for harassment purposes.
//               </li>
//               <li>Sustained disruption of discussion.</li>
//               <li>Unwelcome sexual attention.</li>
//               <li>
//                 Pattern of inappropriate social contact, such as
//                 requesting/assuming inappropriate levels of intimacy with others
//               </li>
//               <li>
//                 Continued one-on-one communication after requests to cease.
//               </li>
//               <li>
//                 Deliberate “outing” of any aspect of a person's identity without
//                 their consent except as necessary to protect vulnerable people
//                 from intentional abuse.
//               </li>
//               <li>Publication of non-harassing private communication.</li>
//               <li>
//                 Blogging, tweeting, or otherwise communicating with intent to
//                 harm someone's reputation, i.e., “making an example” of a member
//               </li>
//             </ul>
//             <strong>
//               She Code Africa prioritizes marginalized people's safety over
//               privileged people's comfort. Our moderators will not act on
//               complaints regarding:
//             </strong>
//             <ul className="pl-10">
//               <li>
//                 “Reverse”-isms, including “reverse sexism,” and “cisphobia.”
//               </li>
//               <li>
//                 Reasonable communication of boundaries, such as “leave me
//                 alone,” “go away,” or “I'm not discussing this with you.”
//               </li>
//               <li>
//                 Verbal communication in a tone you don't find pleasant (try
//                 focusing on responding to the content or disengaging instead)
//               </li>
//               <li>
//                 Criticizing sexist, cissexist, or otherwise oppressive behavior
//                 or assumptions
//               </li>
//             </ul>
//             <strong>
//               Appropriate behavior contributes to the health, safety, and
//               longevity of the She Code Africa community and includes:
//             </strong>
//             <ul className="pl-10">
//               <li>Participating authentically and empathetically</li>
//               <li>
//                 Representing She Code Africa in a positive, professional way
//               </li>
//               <li>Examining your biases often</li>
//               <li>Using welcoming and inclusive language</li>
//               <li>
//                 Exercising consideration and respect in your speech and actions
//               </li>
//               <li>
//                 Refraining from demeaning, discriminatory, or harassing behavior
//                 and speech
//               </li>
//               <li>
//                 Being mindful of your surroundings and of your fellow
//                 participants
//               </li>
//               <li>Considering what is best for the community</li>
//               <li>
//                 Alerting community managers if you notice a dangerous situation,
//                 someone in distress, or unresolved violations of this Code of
//                 Conduct
//               </li>
//               <li>
//                 Refraining from doing something you wouldn't do in another
//                 professional situation
//               </li>
//               <li>
//                 Remembering that community event venues may be shared with
//                 members of the public; being respectful to all patrons of these
//                 locations
//               </li>
//               <li>
//                 Keeping an open and curious mind without making assumptions
//                 about others
//               </li>
//               <li>
//                 Attempting collaboration before conflict . Gracefully accepting
//                 constructive criticism
//               </li>
//             </ul>
//             <h3 className="text-primary-color font-weight-bolder text-2xl my-2">
//               Enforcement:
//             </h3>
//             <ul className="pl-10">
//               <li>
//                 Members and participating guests asked to stop any harassing
//                 behavior are expected to comply immediately.
//               </li>
//               <li>
//                 If a participant violates the Code of Conduct, community
//                 managers or chapter leads may take any action they deem
//                 appropriate to maintaining a welcoming environment for all
//                 participants, up to and including expulsion from an event and/or
//                 the community and identification of the participant as a
//                 violator
//               </li>
//               <li>
//                 If a community manager is not present at an event, the event
//                 organizer should ask violators to leave and then report the
//                 situation to community managers for further deliberation
//               </li>
//               <li>
//                 Community managers and/or event organizers may take action to
//                 redress anything designed to, or with the clear impact of,
//                 disrupting or making an environment hostile for any participants
//               </li>
//               <li>
//                 We expect participants to respect the Code of Conduct in all She
//                 Code Africa communities and at all She Code Africa or She Code
//                 Africa-related events
//               </li>
//             </ul>
//             <h3 className="text-primary-color font-weight-bolder text-2xl my-2">
//               Reporting Guidelines
//             </h3>
//             <p>
//               If you believe someone is violating the code of conduct we ask
//               that you report it to She Code Africa by emailing
//               info@shecodeafrica.org, Contacting a Core Team member privately on
//               via email, by text or phone call, or in person communicating with
//               the event organizer (if you're at an event).{" "}
//               <strong>All reports will be kept confidential</strong>. In some
//               cases we may determine that a public statement will need to be
//               made. If that's the case, the identities of all victims and
//               reporters will remain confidential unless those individuals
//               instruct us otherwise
//             </p>
//             <h3 className="text-primary-color font-weight-bolder text-2xl my-2">
//               What happens after you file a report?
//             </h3>
//             <p>
//               You will receive an email from the She Code Africa acknowledging
//               receipt immediately. We promise to acknowledge receipt within 24
//               hours (and will aim for much quicker than that).
//               <br />
//               The working group will immediately meet to review the incident and
//               determine:
//             </p>
//             <ul className="pl-10">
//               <li>What happened.</li>
//               <li>
//                 Whether this event constitutes a code of conduct violation.
//               </li>
//               <li>Who the bad actor was.</li>
//               <li>
//                 Whether this is an ongoing situation, or if there is a threat to
//                 anyone's physical safety.
//               </li>
//             </ul>
//             <br />
//             <p>
//               If this is determined to be an ongoing incident or a threat to
//               physical safety, the working groups' immediate priority will be to
//               protect everyone involved. This means we may delay an "official"
//               response until we believe that the situation has ended and that
//               everyone is physically safe. Once the working group has a complete
//               account of the events they will make a decision as to how to
//               respond. Responses may include:
//             </p>
//             <ul className="pl-10">
//               <li>Nothing (if we determine no violation occurred).</li>
//               <li>
//                 A private reprimand from the working group to the individual(s)
//                 involved.
//               </li>
//               <li>A public reprimand.</li>
//               <li>
//                 An imposed vacation (i.e. asking someone to "take a week off"
//                 from mailing lists).
//               </li>
//               <li>
//                 A permanent or temporary ban from some or all SCA spaces
//                 (mailing lists)
//               </li>
//               <li>A request for a public or private apology.</li>
//             </ul>
//             <p>
//               We'll respond within one week to the person who filed the report
//               with either a resolution or an explanation of why the situation is
//               not yet resolved.
//             </p>
//             <p>
//               <em>
//                 Original source and credit: techtonica &amp; The Ada Initiative
//                 - Adapted by She Code Africa.
//               </em>
//             </p>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default CodeOfConduct;

import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CodeOfConduct = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Code of conduct</title>
        <meta
          name="description"
          content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Code of conduct" />
        <meta
          property="og:description"
          content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
        />
        <meta name="twitter:title" content="Code of conduct" />
        <meta
          name="twitter:description"
          content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
        />
      </Helmet>

      <Header />

      <section
        className="container mx-auto px-4 pt-[100px] md:pt-[180px]"
        aria-labelledby="terms-heading"
      >
        <div className="container mx-auto text-center">
          <h1
            className="text-primary-color font-weight-bolder md:text-4xl text-2xl my-2"
            id="terms-heading"
          >
            CODE OF CONDUCT
          </h1>
          <small>
            Our commitment to maintaining safe, inclusive, respectful, and
            empowering spaces for women and girls in tech across Africa.
          </small>
        </div>

        <div className="w-11/12 mx-auto my-10 code-of-conduct">
          {/* Commitment */}
          <h3 className="text-primary-color font-weight-bolder text-2xl my-4">
            Our Commitment
          </h3>
          <p>
            At <strong>She Code Africa (SCA)</strong>, we are committed to
            creating safe, inclusive, respectful, and empowering spaces—both
            online and offline—for women and girls in tech across Africa. This
            Code of Conduct outlines the behavioral expectations for everyone
            engaging with our community, programs, events, and partnerships.
          </p>

          <p>This applies to:</p>
          <ul className="list-disc pl-6">
            <li>Community members and volunteers</li>
            <li>Program participants, facilitators, and mentors</li>
            <li>Partners and sponsors</li>
            <li>Event attendees and guests</li>
            <li>Staff and board members</li>
          </ul>

          {/* Core Values */}
          <h3 className="text-primary-color font-weight-bolder text-2xl my-4">
            Our Core Values
          </h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Inclusivity:</strong> We celebrate diversity in all forms.
            </li>
            <li>
              <strong>Empowerment:</strong> We support each other to grow and
              lead.
            </li>
            <li>
              <strong>Respect:</strong> We treat everyone with dignity and
              fairness.
            </li>
            <li>
              <strong>Integrity:</strong> We uphold honesty and accountability.
            </li>
            <li>
              <strong>Collaboration:</strong> We co-create impact through
              teamwork.
            </li>
          </ul>

          {/* Expected Behavior */}
          <h3 className="text-primary-color font-weight-bolder text-2xl my-4">
            Expected Behavior
          </h3>
          <p>All participants and stakeholders are expected to:</p>
          <ul className="list-disc pl-6">
            <li>Foster an environment of respect and kindness.</li>
            <li>Use inclusive and non-discriminatory language.</li>
            <li>Provide constructive feedback.</li>
            <li>Respect privacy and boundaries.</li>
            <li>Speak up respectfully when witnessing harmful behavior.</li>
            <li>Represent SCA positively and professionally.</li>
          </ul>

          {/* Unacceptable Behavior */}
          <h3 className="text-primary-color font-weight-bolder text-2xl my-4">
            Unacceptable Behavior
          </h3>
          <p>We do not tolerate:</p>
          <ul className="list-disc pl-6">
            <li>
              Harassment of any kind—sexual, verbal, emotional, or physical.
            </li>
            <li>
              Discrimination based on race, orientation, religion, ability, or
              age.
            </li>
            <li>Demeaning, hostile, or disruptive behavior.</li>
            <li>Sharing personal information without consent.</li>
            <li>Unwanted or inappropriate advances.</li>
            <li>Manipulative or exploitative behavior.</li>
            <li>Misusing or misrepresenting the SCA brand.</li>
          </ul>

          {/* Digital Conduct */}
          <h3 className="text-primary-color font-weight-bolder text-2xl my-4">
            Digital Conduct
          </h3>
          <p>
            We expect respectful and mindful behavior across all digital
            platforms associated with She Code Africa:
          </p>
          <ul className="list-disc pl-6">
            <li>
              No unsolicited direct messaging or spamming within community
              platforms.
            </li>
            <li>
              Keep group chats and communication channels inclusive, safe, and
              relevant.
            </li>
            <li>
              Do not post or share offensive, inappropriate, or misleading
              content on any digital SCA-affiliated platform.
            </li>
            <li>
              Do not record or screenshot private discussions without explicit
              consent.
            </li>
          </ul>

          {/* Youth */}
          <h3 className="text-primary-color font-weight-bolder text-2xl my-4">
            Youth Participation (Under 18)
          </h3>
          <p>
            For minors (under 18 years of age) participating in any of our
            programs or community spaces:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Parental/guardian consent must be obtained during registration.
            </li>
            <li>
              All communication with minors must be respectful, educational, and
              strictly professional.
            </li>
            <li>
              Adults (including staff, volunteers, and mentors) must not engage
              in private or personal communication with minors unless relevant
              to program activities and with appropriate transparency{" "}
            </li>
          </ul>

          {/* Dress Code */}
          <h3 className="text-primary-color font-weight-bolder text-2xl my-4">
            Dress Code (For Events)
          </h3>
          <p>
            Our events do not enforce a specific dress code; however, attendees
            are encouraged to dress in a way that is:
          </p>
          <ul className="list-disc pl-6">
            <li>Respectful of others and the setting </li>
            <li>Comfortable and appropriate for learning and collaboration </li>
            <li>
              In line with cultural sensitivity and the inclusive tone of our
              spaces
            </li>
          </ul>

          {/* Leadership */}
          <h3 className="text-primary-color font-weight-bolder text-2xl my-4">
            For Mentors, Facilitators, Chapter Leads, Channel Leads &
            Ambassadors
          </h3>
          <p>
            If you hold a leadership, guidance, or ambassadorial role within
            SCA:
          </p>
          <ul className="list-disc pl-6">
            <li>
              You are a role model—act with integrity, inclusivity, and care at
              all times.
            </li>
            <li>
              Respect the trust placed in you by mentees, community members, and
              the wider team.
            </li>
            <li>
              Do not misuse your position for personal gain, favoritism, or
              inappropriate influence.
            </li>
            <li>
              Maintain professionalism and objectivity when resolving conflicts
              or supporting members.
            </li>
          </ul>

          {/* Reporting */}
          <h3 className="text-primary-color font-weight-bolder text-2xl my-4">
            Reporting a Violation
          </h3>
          <p>If you experience or witness inappropriate behavior: </p>
          <ul className="list-disc pl-6">
            <li>
              email us confidentially at{" "}
              <a
                href="mailto:community@shecodeafrica.org"
                className="text-primary-color underline font-semibold"
              >
                community@shecodeafrica.org
              </a>{" "}
            </li>
            <li>
              Alternatively, speak with a trusted community lead, chapter lead,
              or community admin.
            </li>
          </ul>
          <p>All reports are handled with care, discretion, and urgency.</p>

          {/* Consequences */}
          <h3 className="text-primary-color font-weight-bolder text-2xl my-4">
            Consequences of Violations
          </h3>
          <p>Based on the severity of the issue, consequences may include:</p>
          <ul className="list-disc pl-6">
            <li>Verbal or written warnings</li>
            <li>
              Temporary suspension from events, programs, or the community
            </li>
            <li>Permanent removal or ban</li>
            <li>Termination of partnerships or public affiliation</li>
            <li>
              Legal action in extreme cases (e.g., harassment, abuse,
              defamation)
            </li>
          </ul>

          {/* Partners */}
          <h3 className="text-primary-color font-weight-bolder text-2xl my-4">
            Partner & Sponsor Guidelines
          </h3>
          <p>
            SCA expects all partners and sponsors to reflect our values and
            maintain high ethical standards. Misconduct or misalignment with our
            code may result in partnership review, public dissociation, or
            formal termination.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CodeOfConduct;
