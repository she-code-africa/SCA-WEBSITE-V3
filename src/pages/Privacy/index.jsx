import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Privacy Policy" />
        <meta
          property="og:description"
          content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
        />
        <meta name="twitter:title" content="Privacy Policy" />
        <meta
          name="twitter:description"
          content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa."
        />
      </Helmet>
      <Header />
      <section
        className="container mx-auto px-4 pt-[100px] md:pt-[180px]"
        aria-labelledby="policy-heading"
      >
        <div className="container mx-auto text-center">
          <h1
            className="text-primary-color font-weight-bolder md:text-4xl text-2xl my-2"
            id="policy-heading"
          >
            PRIVACY POLICY
          </h1>
        </div>
        <div className="w-11/12 mx-auto my-10">
          <div className="privacy-intro">
            <p>
              Your privacy matters to us. At She Code Africa (SCA), we are
              deeply committed to protecting your personal data and being
              transparent about how we collect, use, and share it. This Privacy
              Policy applies to all individuals interacting with SCA, whether as
              members, applicants, partners, program participants, event
              attendees, or site visitors.
            </p>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl uppercase">
              <span className="sub_ol">1.</span> What Information We Collect
            </h3>
            <p>
              We may collect the following categories of personal information:
            </p>{" "}
            <p className="my-4">
              <b>Directly from You:</b>
            </p>
            <ul className="list-disc pl-10">
              <li>Name, age, gender, and contact details</li>
              <li>Educational and professional background</li>
              <li>Location (city/country)</li>
              <li>Interests, skills, or program preferences</li>
              <li>Application responses for programs or opportunities</li>
              <li>Social media handles (when voluntarily submitted)</li>
              <li>Event or program feedback</li>
            </ul>
            <p className="my-4">
              <b>Automatically Collected:</b>
            </p>
            <ul className="list-disc pl-10">
              <li>Name, age, gender, and contact details</li>
              <li>Educational and professional background</li>
              <li>Location (city/country)</li>
              <li>Interests, skills, or program preferences</li>
              <li>Application responses for programs or opportunities</li>
              <li>Social media handles (when voluntarily submitted)</li>
              <li>Event or program feedback</li>
            </ul>
            <p className="mt-5">
              We do not collect sensitive information like passwords or
              financial details unless explicitly necessary (e.g., for grant
              disbursement or stipends—with secure handling protocols).
            </p>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl uppercase">
              <span className="sub_ol">2.</span>How We Use Your Information
            </h3>
            <p>We use your data to: </p>{" "}
            <ul className="list-disc pl-10">
              <li>
                Provide access to community platforms, events, or programs
              </li>
              <li>
                Process applications and match participants with relevant
                opportunities
              </li>
              <li>
                Communicate updates, offers, or announcements (via
                email/newsletter)
              </li>
              <li>
                Measure impact, track growth, and report anonymized data to
                funders
              </li>
              <li>Improve user experience across our website and platforms</li>
              <li>Promote stories of impact (with your consent)</li>
            </ul>
            <p className="my-4">
              <b>Data of Minors</b>
            </p>
            <p className="mt-5">
              We collect data from minors (under 18) only with verified
              parental/guardian consent. All such data is handled with added
              protection and confidentiality. No child’s personal information is
              shared publicly without explicit consent.{" "}
            </p>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl uppercase">
              <span className="sub_ol">3.</span>How We Protect Your Data
            </h3>
            <p className="mb-3">We take data security seriously:</p>{" "}
            <ul className="list-disc pl-10">
              <li>
                All data is stored securely using industry-standard encryption
                and password protection{" "}
              </li>
              <li>
                Access is restricted to authorized team members and
                collaborators
              </li>
              <li>
                We routinely review and audit our systems for vulnerabilities
              </li>
            </ul>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl uppercase">
              <span className="sub_ol">4.</span>Sharing Your Data
            </h3>
            <p>
              We do <b>not</b> sell or rent your personal data.
            </p>
            <p className="mt-3">We may share your data only:</p>{" "}
            <ul className="list-disc pl-10">
              <li>
                With trusted partners/co-facilitators when necessary to deliver
                a program or opportunity{" "}
              </li>
              <li>When required by law or government regulation</li>
              <li>
                With third-party tools (e.g., Google Forms, Airtable, Mailchimp)
                we use to manage our operations—always in accordance with their
                privacy standards{" "}
              </li>
            </ul>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl uppercase">
              <span className="sub_ol">5.</span>Communication Preferences
            </h3>
            <p className="mb-3">
              You can opt in or out of our mailing list or community channels at
              any time.
            </p>{" "}
            <ul className="list-disc pl-10">
              <li>
                Use the <b>unsubscribe link</b> in our newsletters
              </li>
              <li>
                Email us at{" "}
                <b>
                  <a href="mailto:community@shecodeafrica.org">
                    community@shecodeafrica.org
                  </a>
                </b>{" "}
                to update or remove your information
              </li>
            </ul>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl uppercase">
              <span className="sub_ol">6.</span>Your Rights
            </h3>
            <p>You have the right to:</p>
            <ol className="list-disc pl-10">
              <li>Access the data we hold about you</li>
              <li>Request correction of inaccurate or outdated info</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ol>

            <p className="mt-5">
              To exercise these rights, please email community@shecodeafrica.org
            </p>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl uppercase">
              <span className="sub_ol">7.</span>Cookies and Web Tools
            </h3>
            <p>Our website may use cookies to: </p>
            <ul className="list-disc pl-10">
              <li>Understand user behavior and improve content delivery</li>
              <li>Remember your preferences during repeat visits</li>
              <li>Analyze traffic via tools like Google Analytics</li>
            </ul>

            <p className="mt-5">
              You can control cookies through your browser settings.{" "}
            </p>
          </div>
          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl uppercase">
              <span className="sub_ol">8.</span>Policy Updates
            </h3>
            <p>
              This Privacy Policy may be updated from time to time. When we do,
              we’ll notify you through our platforms or email if the changes are
              significant.
            </p>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl uppercase">
              <span className="sub_ol">9.</span>Contact Us
            </h3>
            <p>For any questions or concerns about your data, reach out to:</p>

            <p className="mt-4">
              <b>Email:</b> community@shecodeafrica.org
            </p>
            <p>
              <b>Subject line: </b> Privacy Concern
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacy;
