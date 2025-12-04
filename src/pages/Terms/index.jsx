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
            <p className="my-4">
              By using our website or joining our community:
            </p>
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
            <p className="my-4">
              When enrolled in any SCA-led program, you agree to:
            </p>
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
            <p className="my-4">
              All partnerships must be formalized with a signed agreement.
              Partner organizations agree to:
            </p>
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
            <p className="my-4">We reserve the right to:</p>
            <ul className="list-disc ml-6">
              <li>
                Suspend or remove access to our community platforms, programs,
                or tools for violations of our Code of Conduct or these Terms{" "}
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
            <p className="my-4">
              By registering for or attending an event hosted by SCA:
            </p>

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
                You may be asked to sign an attendance or consent form at the
                point of entry or registration.
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
              contacting us directly.
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
            <p className="my-4">Unless explicitly stated otherwise:</p>
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
              However, by participating, you grant She Code Africa a
              non-exclusive, royalty-free, worldwide license to use your
              submitted or co-created content (e.g., testimonials, photos,
              videos, project showcases) for:
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
            <p className="my-4">
              By participating in any She Code Africa program, event, or
              platform—either virtually or in person—you acknowledge and agree
              that:
            </p>

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
                unless caused by negligence from our team or representatives.
              </li>
              <li>
                Any third-party services or products offered during events
                (e.g., venues, catering, partner-led workshops) are not directly
                covered under our liability.
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
            <p className="my-4">Questions or concerns? Reach out at:</p>
            <p className="mt-4">
              <b>Email:</b> info@shecodeafrica.org
            </p>
            <p>
              <b>Subject: </b> Terms and Conditions Inquiry
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Terms;
