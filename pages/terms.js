import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";

const terms = () => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="terms-page"
        className="bg-snow wide-70 inner-page-hero terms-section division"
      >
        <div className="container">
          {/* TERMS CONTENT */}
          <div className="row justify-content-center">
            <h1>Privacy Policy</h1>
            <p>
              <strong>Last Modified:</strong> May 25, 2025
            </p>

            <p>
              Scoreway built the <strong>Scoreway - UGC NET Coaching</strong>{" "}
              app as a Freemium app. This SERVICE is provided by Scoreway and is
              intended for use as is.
            </p>

            <p>
              This page is used to inform visitors regarding our policies with
              the collection, use, and disclosure of Personal Information if
              anyone decides to use our Service.
            </p>

            <p>
              By using our Service, you agree to the collection and use of
              information in accordance with this policy. The Personal
              Information we collect is used for providing and improving the
              Service. We will not use or share your information with anyone
              except as described in this Privacy Policy.
            </p>

            <p>
              The terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, unless otherwise defined.
            </p>

            <h2>Information Collection and Use</h2>
            <p>
              For a better experience while using our Service, we may require
              you to provide us with certain personally identifiable
              information. The information we request will be retained by us and
              used as described in this Privacy Policy.
            </p>

            <p>
              The app uses third-party services that may collect information
              used to identify you.
            </p>

            <p>
              Link to privacy policy of third-party service providers used by
              the app:
            </p>
            <ul>
              <li>
                <a href="" target="_blank">
                  Google Play Services
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  AdMob (for advertisements)
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Google Billing Library (for in-app purchases)
                </a>
              </li>
            </ul>

            <h2>Advertisements and In-App Purchases</h2>
            <p>
              The Scoreway app may display third-party advertisements to support
              our free content. Users have the option to remove ads by making a
              one-time in-app purchase. Payment processing is handled through
              Google Play’s billing services, and we do not store your payment
              information.
            </p>

            <h2>Log Data</h2>
            <p>
              In the event of an error in the app, we collect data and
              information (through third-party products) on your device called
              Log Data. This may include information such as your device's IP
              address, device name, operating system version, app configuration
              at the time of the error, time and date of use, and other
              statistics.
            </p>

            <h2>Service Providers</h2>
            <p>We may employ third-party companies and individuals to:</p>
            <ul>
              <li>Facilitate our Service</li>
              <li>Provide the Service on our behalf</li>
              <li>Perform Service-related tasks</li>
              <li>Assist in analyzing how our Service is used</li>
            </ul>
            <p>
              These third parties may have access to your Personal Information
              only to perform these tasks on our behalf. They are obligated not
              to disclose or use it for any other purpose.
            </p>

            <h2>Security</h2>
            <p>
              We value your trust in providing us your Personal Information, and
              we strive to use commercially acceptable means of protecting it.
              However, no method of transmission over the internet or method of
              electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2>Links to Other Sites</h2>
            <p>
              Our Service may contain links to external websites. If you click
              on a third-party link, you will be directed to that site. These
              external sites are not operated by us. We strongly recommend you
              review the Privacy Policy of these websites. We have no control
              over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites or services.
            </p>

            <h2>Children’s Privacy</h2>
            <p>
              Our Services are not directed to anyone under the age of 18. We do
              not knowingly collect personally identifiable information from
              children under 18. If we discover that a child under 18 has
              provided us with personal information, we delete it immediately.
              If you are a parent or guardian and you believe your child has
              provided us with personal information, please contact us.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. You are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the updated Privacy Policy on
              this page. These changes are effective immediately upon posting.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us:
            </p>
            <p>
              📧 <a href="mailto:hello@scoreway.in">hello@scoreway.in</a>
            </p>
            {/* END TERMS CONTENT */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END TERMS & PRIVACY */}
      {/* CALL TO ACTION-1
			============================================= */}
    </Layout>
  );
};

export default terms;
