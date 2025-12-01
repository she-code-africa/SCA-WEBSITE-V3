// import React from "react";
// import { Helmet } from "react-helmet-async";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// const Terms = () => {
//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Terms and conditions</title>
//         <meta
//           name="description"
//           content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta property="og:title" content="Terms and conditions" />
//         <meta
//           property="og:description"
//           content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
//         />
//         <meta name="twitter:title" content="Terms and conditions" />
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
//         <div className="container mx-auto text-center ">
//           <h1
//             className="text-primary-color font-weight-bolder md:text-4xl text-2xl my-2"
//             id="terms-heading"
//           >
//             TERMS AND CONDITIONS
//           </h1>
//           <small>
//             Please, carefully read the terms below. For the purpose of this
//             document, She Code Africa will be represented with its abbreviation
//             (SCA).
//           </small>
//         </div>
//         <div className="w-11/12 mx-auto my-10">
//           <div className="donation-faq">
//             <h3 className="text-primary-color font-weight-bolder text-2xl">
//               <span className="sub_ol">1.0</span> General
//             </h3>
//             <div>
//               <p>
//                 <span className="sub_ol">1.1</span>
//                 <span>
//                   {" "}
//                   By proceeding with SCA on any matter, it is taken that you
//                   have read through, understood and given your consent to be
//                   bound by all terms set below.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">1.2</span>
//                 <span>
//                   {" "}
//                   These terms shall from time to time be reviewed subject to
//                   accruing issues and circumstances which may come into being.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">1.3</span>
//                 <span>
//                   {" "}
//                   SCA reserves the right to do with these terms as it wishes.
//                 </span>
//               </p>
//             </div>
//           </div>
//           <div className="donation-faq">
//             <h3 className="text-primary-color font-weight-bolder text-2xl">
//               <span className="sub_ol">2.0</span> Specific Terms
//             </h3>
//             <div>
//               <p>
//                 <span className="sub_ol">2.1</span>
//                 <span>
//                   “Donation” means any such money as may be given in
//                   contribution to SCA to further its objectives.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">2.2</span>
//                 <span>
//                   “Legal Member” means any young girl or woman who may at
//                   anytime become a part of SCA network or team.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">2.3</span>
//                 <span>
//                   {" "}
//                   “Volunteer” means any young girl or woman who may upon
//                   successful application begin to offer her services to SCA at
//                   no binding fees.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">2.4</span>
//                 <span>
//                   {" "}
//                   “Partner/Donor” means any legal entity that may at anytime
//                   come in contact with SCA for an official purpose.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">2.5</span>
//                 <span>
//                   {" "}
//                   “Agreement” means any legally binding arrangement between SCA
//                   and a partner/donor for a course.
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div className="donation-faq">
//             <h3 className="text-primary-color font-weight-bolder text-2xl">
//               <span className="sub_ol">3.0</span> Donation
//             </h3>
//             <div>
//               <p>
//                 <span className="sub_ol">3.1</span>
//                 <span>
//                   Donations do not form a contract for future or successive
//                   legal relationships or transactions.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">3.2</span>
//                 <span>
//                   SCA reserves the right to use every donation at its
//                   discretion, subject to its organizational objectives.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">3.3</span>
//                 <span>
//                   Any personal details received by SCA pursuant to any
//                   charitable donation, shall be kept confidential and private.
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div className="donation-faq">
//             <h3 className="text-primary-color font-weight-bolder text-2xl">
//               <span className="sub_ol">4.0</span> Legal Member
//             </h3>
//             <div>
//               <p>
//                 <span className="sub_ol">4.1</span>
//                 <span>
//                   A legal member is any lady who via SCA’s membership
//                   application form puts in an application, and upon review of
//                   such application is accepted.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">4.2</span>
//                 <span>
//                   A legal member shall for the purpose of her membership to any
//                   of SCA’s platforms, projects or programmes, be subject to all
//                   SCA’s rules and regulations until at any such time when her
//                   membership may terminate.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">4.3</span>
//                 <span>
//                   Where a legal member is assigned a position, she shall subject
//                   to SCA’s guidelines for such position carry out her functions
//                   for the sole purpose of furthering SCA’s legal objectives.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">4.4</span>
//                 <span>
//                   {" "}
//                   A legal member may at anytime communicate in writing to SCA of
//                   her decision to have her membership terminated.
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div className="donation-faq">
//             <h3 className="text-primary-color font-weight-bolder text-2xl">
//               <span className="sub_ol">5.0</span> Volunteer
//             </h3>
//             <div>
//               <p>
//                 <span className="sub_ol">5.1</span>
//                 <span>
//                   A person shall be deemed a volunteer upon a written
//                   application and a written confirmation of satisfaction with
//                   such application by SCA.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">5.2</span>
//                 <span> SCA volunteers are not entitled to salaries.</span>
//               </p>
//               <p>
//                 <span className="sub_ol">5.3</span>
//                 <span>
//                   A volunteer’s offer of engagement may be reviewed upon such
//                   time as may be agreed by SCA and the volunteer.
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div className="donation-faq">
//             <h3 className="text-primary-color font-weight-bolder text-2xl">
//               <span className="sub_ol">6.0</span>Partner/Donor
//             </h3>
//             <div>
//               <p>
//                 <span className="sub_ol">6.1</span>
//                 <span>
//                   Partnership between SCA and any legal entity shall be deemed
//                   as commenced upon a written agreement executed by both
//                   parties.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">6.2</span>
//                 <span>
//                   {" "}
//                   A partner/donor who at anytime comes into a legal relationship
//                   with SCA, shall be bound by all SCA’s Terms and Conditions.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">6.3</span>
//                 <span>
//                   All partners/donors are to the extent of the agreements
//                   entered into with SCA, bound.
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div className="donation-faq">
//             <h3 className="text-primary-color font-weight-bolder text-2xl">
//               <span className="sub_ol">7.0</span> Agreement
//             </h3>
//             <div>
//               <p>
//                 <span className="sub_ol">7.1</span>
//                 <span>
//                   All formal partnerships between SCA and other legal entities
//                   shall be deemed to have commenced ONLY by a written agreement
//                   executed by representatives or agents of each party.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">7.2</span>
//                 <span>
//                   Each party to an agreement shall reserve the right to have in
//                   its possession a copy of the executed agreement.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">7.3</span>
//                 <span>
//                   Disputes arising from any agreement between SCA and other
//                   legal entities shall be settled amicably.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">7.4</span>
//                 <span>
//                   Where amicable settlement fails, the matter shall be settled
//                   by an independent arbitrator who shall be chosen by the
//                   parties in dispute.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">7.5</span>
//                 <span>
//                   Where settlement by an independent arbitrator fails, the
//                   matter shall be settled by a court in the State where such
//                   issue(s) arose.
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div className="donation-faq">
//             <h3 className="text-primary-color font-weight-bolder text-2xl">
//               <span className="sub_ol">8.0</span> Confidentiality
//             </h3>
//             <div>
//               <p>
//                 <span className="sub_ol">8.1</span>
//                 <span>
//                   SCA holds in high esteem the information of its legal members
//                   and partners/donors, and is committed to preserving same even
//                   in the event of a termination of membership or partnership.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">8.2</span>
//                 <span>
//                   All information collected from legal members or
//                   partners/donors shall be handled with privacy, except where a
//                   legal member or partner/donor says otherwise.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">8.3</span>
//                 <span>
//                   {" "}
//                   Where the information of a legal member or partner/donor is
//                   required to be public, SCA will specifically request the
//                   approval of the legal member or partner/donor before any such
//                   information is made public.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">8.4</span>
//                 <span>
//                   In a case where a legal member’s or partner’s/donor’s
//                   information is already public, SCA is not bound to request an
//                   approval before further making public such information.
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div className="donation-faq">
//             <h3 className="text-primary-color font-weight-bolder text-2xl">
//               <span className="sub_ol">9.0</span>Limitation of Liability
//             </h3>
//             <div>
//               <p>
//                 <span className="sub_ol">9.1</span>
//                 <span>
//                   Where a legal member is in contact with any SCA partner/donor
//                   for a project that will solely benefit her, SCA is not bound
//                   to indemnify the legal member in the event anything goes
//                   wrong.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">9.2</span>
//                 <span>
//                   Where a legal member is acting on behalf of SCA and out of
//                   negligence causes any damage, SCA will not be bound to
//                   indemnify the member.
//                 </span>
//               </p>
//               <p>
//                 <span className="sub_ol">9.3</span>
//                 <span>
//                   {" "}
//                   Nothing in this agreement shall exclude or restrict SCA’s
//                   liability for death or personal injury resulting from the
//                   negligence of SCA or its agents.
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Terms;

import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Terms = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terms and conditions</title>
        <meta
          name="description"
          content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Terms and conditions" />
        <meta
          property="og:description"
          content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
        />
        <meta name="twitter:title" content="Terms and conditions" />
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
        <div className="container mx-auto text-center ">
          <h1
            className="text-primary-color font-weight-bolder md:text-4xl text-2xl my-2"
            id="terms-heading"
          >
            TERMS AND CONDITIONS
          </h1>
          <small>
            Please, carefully read the terms below. For the purpose of this
            document, She Code Africa will be represented with its abbreviation
            (SCA).
          </small>
        </div>

        <div className="w-11/12 mx-auto my-10 space-y-10">
          <div>
            <p>
              Welcome to She Code Africa (SCA)! These Terms and Conditions
              ("Terms") govern your use of our website, services, programs, and
              community platforms. By engaging with us, whether as a visitor,
              member, participant, partner, volunteer, sponsor or collaborator,
              you agree to follow these Terms. Please read them carefully.
            </p>
            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Who We Are
            </h2>
            <p className="my-4">
              She Code Africa is a nonprofit organization on a mission to equip
              African girls and women with access to technology and digital
              skills training, bridging the gender gap and fostering economic
              independence. Our platforms include:
            </p>
            <ul className="list-disc ml-6">
              <li>
                Our website (
                <a
                  href="http://www.shecodeafrica.org"
                  className="font-semibold"
                >
                  www.shecodeafrica.org
                </a>
                )
              </li>
              <li>Community spaces (Slack, WhatsApp, Substack.)</li>
              <li>Events and programs (physical and virtual)</li>
              <li>Social media channels</li>
              <li>SCA internal tools and application portals</li>
            </ul>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Eligibility
            </h2>
            <p className="my-4">
              To participate in most of our programs and community activities,
              you must:
            </p>
            <ul className="list-disc ml-6">
              <li>Identify as an African girl or woman</li>
              <li>Be aged 13 and above (minors require guardian consent)</li>
              <li>Abide by our Code of Conduct</li>
            </ul>
            <p className="mt-4">
              Some programs may have additional eligibility requirements, which
              will be clearly stated in application guidelines.
            </p>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Use of Our Platforms
            </h2>
            <ul className="list-disc ml-6">
              <li>You agree to provide truthful, accurate information.</li>
              <li>
                You agree not to use our platforms for unlawful, misleading, or
                harmful purposes.
              </li>
              <li>
                You must not impersonate any person or organization or
                misrepresent your affiliation with SCA.
              </li>
              <li>
                You may not use automated tools (bots/scrapers) to extract data
                from our platforms without permission.
              </li>
            </ul>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Program Participation
            </h2>
            <ul className="list-disc ml-6">
              <li>
                Actively engage in sessions and assignments (unless otherwise
                stated)
              </li>
              <li>
                Maintain respectful conduct toward facilitators, mentors, and
                peers
              </li>
              <li>Not plagiarize or misrepresent your work</li>
              <li>
                Follow any additional program-specific terms provided during
                onboarding
              </li>
            </ul>
            <p className="mt-4">
              Failure to comply may result in suspension or removal from the
              program.
            </p>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Intellectual Property
            </h2>
            <p className="my-4">
              All materials created or published by She Code Africa—such as
              logos, branding, curricula, resources, documentation, media, and
              designs—are protected under copyright laws.
            </p>
            <p className="my-4">You may:</p>
            <ul className="list-disc ml-6">
              <li>
                Share resources publicly available on our site for personal,
                non-commercial use with proper attribution.
              </li>
            </ul>
            <p className="my-4">You may not:</p>
            <ul className="list-disc ml-6">
              <li>
                Use our content or brand assets for commercial or promotional
                purposes without written consent.
              </li>
              <li>Copy or distribute training materials without permission.</li>
            </ul>
            <p className="mt-4">
              Content created by participants during programs (e.g., projects,
              portfolios) belongs to the participant, but SCA may request
              permission to showcase such work for impact reporting or
              promotion.
            </p>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Partnerships and Collaborations
            </h2>
            <ul className="list-disc ml-6">
              <li>Respect SCA’s values and Code of Conduct</li>
              <li>Share accurate, timely information</li>
              <li>
                Not exploit or misuse our community or brand for self-promotion
                or political gain
              </li>
              <li>
                Deliver any agreed support (e.g., resources, funding,
                mentorship) transparently
              </li>
            </ul>
            <p className="my-4">
              Violation of terms may lead to termination of partnership and/or
              legal action.
            </p>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Account Access and Termination
            </h2>
            <ul className="list-disc ml-6">
              <li>
                Suspend or remove access for violations of our Code of Conduct
                or these Terms
              </li>
              <li>Moderate or remove inappropriate content</li>
              <li>
                Discontinue services temporarily or permanently with notice
              </li>
            </ul>
            <p className="my-4">
              You may request to delete your account or data at any time via
              community@shecodeafrica.org.
            </p>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Disclaimers
            </h2>
            <ul className="list-disc ml-6">
              <li>
                We do not guarantee job placements or financial compensation
                through our programs.
              </li>
              <li>
                We are not responsible for the accuracy of external content
                linked on our platforms.
              </li>
              <li>
                We are not liable for personal losses or damages resulting from
                your participation, except where caused by our own negligence or
                misconduct.
              </li>
            </ul>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Event Participation
            </h2>
            <ul className="list-disc ml-6">
              <li>
                You grant us permission to use event photos/videos that may
                include your image for promotion (unless you opt out in
                advance).
              </li>
              <li>
                You are responsible for your personal belongings at physical
                events.
              </li>
              <li>
                You may be asked to sign an attendance or consent form at
                registration.
              </li>
            </ul>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Communication
            </h2>
              <p className="my-4">
              By interacting with us, you agree to receive occasional
              communications related to:
            </p>
            <ul className="list-disc ml-6">
              <li>Program or event updates</li>
              <li>Community news or impact stories</li>
              <li>Feedback and reporting requests</li>
            </ul>
            <p className="mt-4">
              You can unsubscribe at any time via the email footer or by
              contacting us.
            </p>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Governing Law
            </h2>
            <p className="my-4">
              These Terms are governed by the laws of the Federal Republic of
              Nigeria, and any legal disputes shall be resolved in a competent
              court within Lagos, Nigeria, unless otherwise agreed.
            </p>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Updates to These Terms
            </h2>
            <p className="my-4">
              We may update these Terms from time to time. Any significant
              changes will be communicated through email, community channels, or
              a notice on our website.
            </p>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Licensing & Usage Rights
            </h2>
            <h3 className="font-semibold mt-4">a. SCA-Created Content</h3>
            <p className="my-4">
              All She Code Africa materials—curriculum, brand assets, toolkits,
              recorded sessions, templates, designs, digital media, and
              documentation—are protected by copyright and trademark laws. These
              are licensed for:
            </p>
            <ul className="list-disc ml-6">
              <li>Personal, non-commercial use only</li>
              <li>Non-exclusive and non-transferable access</li>
              <li>Reuse or distribution only with written approval from SCA</li>
            </ul>
            <p className="mt-4">
              Any reproduction, adaptation, translation, or commercial
              exploitation of our materials without express permission is
              strictly prohibited.
            </p>

            <h3 className="font-semibold mt-4">
              b. Participant-Created Content
            </h3>
            <p className="my-4">
              You own the rights to the original content you create during your
              involvement in our programs or community (e.g., projects, personal
              stories, designs, code).
            </p>
            <p className="my-4">
              By participating, you grant She Code Africa a non-exclusive,
              royalty-free, worldwide license to use your submitted or
              co-created content for:
            </p>
            <ul className="list-disc ml-6">
              <li>Promotional purposes</li>
              <li>Fundraising and reporting to donors</li>
              <li>
                Public awareness campaigns and storytelling (with credit to you)
              </li>
            </ul>
            <p className="mt-4">
              You may revoke this license at any time by contacting us in
              writing, unless your content is already in published use.
            </p>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Liability Waiver
            </h2>
            <h3 className="font-semibold mt-4">General Waiver</h3>
            <p className="my-4">
              You voluntarily assume all risks related to your participation.
              She Code Africa is not liable for any indirect, incidental, or
              consequential losses—such as data loss, missed opportunities, or
              emotional distress—unless directly caused by our gross negligence
              or intentional misconduct.
            </p>

            <h3 className="font-semibold mt-4">Event-Related Waiver</h3>
            <p className="my-4">
              For in-person events, workshops, or field experiences:
            </p>
            <ul className="list-disc ml-6">
              <li>
                You are responsible for your own safety, transportation, and
                personal belongings.
              </li>
              <li>
                SCA is not responsible for accidents, injuries, or property loss
                unless caused by negligence from our team.
              </li>
              <li>
                Any third-party services or products offered during events are
                not directly covered under our liability.
              </li>
            </ul>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Technology & Internet Use
            </h2>
            <p className="my-4">
              If using your own device or network for a virtual event or
              program:
            </p>
            <ul className="list-disc ml-6">
              <li>You are responsible for securing your data and device.</li>
              <li>
                SCA will not be held liable for device damage, malware, or data
                exposure occurring on your end during participation.
              </li>
            </ul>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              Force Majeure
            </h2>
            <p className="my-4">
              We are not responsible for delays, cancellations, or disruptions
              due to events outside our control (e.g., natural disasters,
              internet outages, government restrictions, strikes).
            </p>

            <h2 className="text-primary-color text-2xl font-bold mt-6">
              📬 Contact Us
            </h2>
            <p className="mt-4">
              <b>Email:</b>{" "}
              info@shecodeafrica.org
            </p>
            <p>
              <b>Subject: </b>{" "}
              Terms and Conditions Inquiry
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Terms;
