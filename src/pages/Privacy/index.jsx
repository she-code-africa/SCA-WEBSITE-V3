import React from 'react'
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from '../../components/Footer';

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
        <meta property="og:description" content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa." />
        <meta name="twitter:title" content="Privacy Policy" />
        <meta name="twitter:description" content="We are a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa." />
      </Helmet>
      <Header />
      <section className="container mx-auto px-4" aria-labelledby="policy-heading">
        <div className="container mx-auto text-center">
          <h1 className="text-primary-color font-weight-bolder md:text-4xl text-2xl my-2" id="policy-heading">PRIVACY POLICY</h1>
        </div>
        <div className="w-11/12 mx-auto my-10">
          <div className="privacy-intro">
            <p>
              She Code Africa (We) are committed to protecting and respecting your privacy. This policy (together with our Website Terms and Conditions and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or
              that you provide to us, will be collected and processed by us. You may carefully take a look at the following to understand how we would use/treat your personal data.

            </p>
            <p>Our data use and protection policy is in consonance with The General Data Protection Regulation (EU) 2016/679 (GDPR) and the Nigeria Data Protection Regulation 2019. (NITDA Regulations)
            </p>
            <p>The data controller is She Code Africa.</p>
            <p>You reserve every right to make a complaint at any time to the National Information Technology Development Agency (NITDA). However, we would appreciate the chance to deal with your concerns before you approach NITDA, so please do well to contact
              us in the first instance.
            </p>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl"><span className="sub_ol">1.</span> INFORMATION WE MAY COLLECT FROM YOU:</h3>
            <p>We may collect and process the following data about you:</p>
            <ol className="list-decimal pl-10">
              <li>
                <b>Contact Data:</b> This is information such as your name, email address and telephone number which we collect when you contact us by email, subscribe to any of our newsletters, use our services, including news or which we collect
                via our interaction with you (for example from business cards).

              </li>
              <li>
                <b>Profile Data: </b> This is information such as the organization you work for, your job title and role, the country you are based in and your area of expertise which we collect when we come in contact with you.

              </li>
              <li>
                <b>Application Information: </b>This is information such as your country of citizenship, past and present employment details, home address and contact details and education history, which we collect when you apply to attend our
                training courses or apply for any of our services which at the time of drafting this policy may not be in existence.


              </li>
              <li>
                Information that you provide by filling in forms on our sites. This includes information provided at the time of registering to use our Sites, subscribing to any of our Services, posting material or requesting further services. We may also ask you for
                information when you report a problem with any of our services.

              </li>
              <li>
                If you contact us, we may keep a record of that correspondence.

              </li>
              <li>We may also ask you to complete feedback questionnaires or surveys that we use for research purposes, although you do not have to respond to them.
              </li>
              <li>Details of the Services that you use on our sites.
              </li>
              <li>Details of your visits to our sites including, but not limited to, traffic data, location data, weblogs and other communication data and the resources that you access.
              </li>
            </ol>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl"><span className="sub_ol">2.</span> IP ADDRESSES:</h3>
            <p>We may collect information about your computer, including your IP address, operating system and browser type, for system administration and to report aggregate information to our advertisers. This is statistical data about our users' browsing
              actions and patterns, and does not identify any individual.
            </p>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl"><span className="sub_ol">3.</span>WHERE WE STORE YOUR PERSONAL DATA:

            </h3>
            <p>In view of our coverage, the data that we collect from you may not be stored in just a country. It could be stored in more than one country of Africa. It may not be processed by staff of She Code Africa operating only in Africa. By submitting
              your personal data, you agree to this transfer, storing or processing, provided such transfer, storing or processing comply with the NITDA Regulations 2019 and such other regulations as shall from time to time be released by the relevant
              authorities. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.

            </p>
            <p>Where we have given you (or where you have chosen) a password which enables you to access certain parts of our sites, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
            </p>
            <p>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our sites; any transmission
              is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.
            </p>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl"><span className="sub_ol">4.</span>USES MADE OF THE INFORMATION:
            </h3>
            <p>We use information held about you in the following ways:</p>
            <ol className="list-decimal pl-10">
              <li>
                <b>Administration: </b> We may use the personal information we collect about you to contact you in response to your queries and to provide you with the services you have subscribed to. For example, newsletters or news alerts or
                brokering contacts through She Code Africa.

              </li>
              <li>
                <b>Consider Applications: </b> We may use the personal information we collect about you to consider your applications/submissions on She Code Africa.

              </li>
              <li>
                <b>Communications: </b>We may use personal information we collect about you to contact you by e-mail, post or telephone with information about the organisation and events that might be of interest to you. You can opt out of receiving
                these communications at any point by contacting info@shecodeafrica.org.


              </li>
              <li>
                <b>Internal Statistical Analysis: </b>We may use the personal information we collect about you to facilitate internal statistical analysis, for example to determine the number of people using a particular service from a specific
                country or region. We have a policy of anonymizing the information where possible.


              </li>
              <li>
                <b>Optimization: </b>To ensure that news and content from our sites are presented in the most effective manner for you and for your computer.


              </li>
              <li>
                To carry out our obligations to perform the services arising from any agreements entered into between you and us or to allow you to participate in interactive features of our service, when you choose to do so.
              </li>
              <li>
                To notify you about changes to our services.
              </li>
              <li>
                <b>We will only use your personal data when the law allows us to. Most commonly, we will use
                  your personal data in the following circumstances::
                </b>
                <ol>
                  <li>Where we need to perform a contract we are about to enter into or have entered into with you.
                  </li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal or regulatory obligation.
                  </li>
                </ol>
              </li>
            </ol>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl">
              <span className="sub_ol">5.</span>DISCLOSURE OF YOUR INFORMATION:
            </h3>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
            <p>We may disclose your personal information to any member of our community.
            </p>
            <p>We may disclose your personal information to third parties:
            </p>
            <ol className="list-decimal pl-10">
              <li>If the organisation is transferred to a third party, in which case personal data held by it about its partners will be one of the transferred assets.</li>
              <li>If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our website Terms and Conditions and other agreements; or to protect the rights, property,
                or safety of the organisation, our partners, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and risk reduction.
              </li>
              <li>When explicitly agreed by you as part of our Services.</li>
              <li>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </li>
            </ol>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl">
              <span className="sub_ol">6.</span>ACCESS TO INFORMATION:
            </h3>

            <p>You have the right to:</p>
            <ol className="list-decimal pl-10">
              <li>Request access to your personal data. This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.
              </li>
              <li>Request erasure of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to hold same. You also have the right to ask us to delete or remove your personal data
                where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note,
                however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.
              </li>
              <li>Request restriction of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios: (a) if you want us to establish the data’s accuracy; (b) where our use
                of the data is unlawful but you do not want us to erase it; (c) where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or (d) you have objected to our use
                of your data but we need to verify whether we have overriding legitimate grounds to use it.
              </li>
              <li>Request the transfer of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only
                applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.
              </li>
              <li>Withdraw consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent,
                we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.
              </li>
            </ol>

            <p>In case of any questions regarding our privacy practices, if you would like to execute your rights or would like to submit a complaint please contact info@shecodeafrica.org.
            </p>
            <p>We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data
              is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
            </p>
            <p>We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you
              updated.
            </p>
          </div>

          <div className="donation-faq">
            <h3 className="text-primary-color font-weight-bolder text-2xl">
              <span className="sub_ol">6.</span>CHANGES TO OUR PRIVACY POLICY:
            </h3>
            <p>
              Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Privacy