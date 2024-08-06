import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { MotionYContainer } from '@components/Motion';
import { Typography } from '@material-tailwind/react';

const CookiePolicyPage = () => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <ScrollToTop />
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <section className="section">
          <div className="container">
            <div className="policy-box">
              <div className="policy-box-header">
                <div className="p-[30px]">
                  <Typography variant="h2" className="mb-2 text-5xl text-white">
                    Cookie Policy
                  </Typography>
                  <Typography className="text-white">
                    Last modified on <strong>November 15, 2021</strong>
                  </Typography>
                </div>
                <svg
                  className="MuiBox-root css-19uvnyd"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1920 100.1"
                >
                  <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
                </svg>
              </div>

              <div className="policy-box-body grid grid-cols-1 gap-10 p-[15px] md:grid-cols-4 md:p-[30px]">
                <div className="md:col-span-3">
                  <Typography className="mb-5 text-lg">
                    This Cookies Policy explains what Cookies are and how We use them. You should read this policy so
                    You can understand what type of cookies We use, or the information We collect using Cookies and how
                    that information is used.
                    <br />
                    <br />
                    Cookies do not typically contain any information that personally identifies a user, but personal
                    information that we store about You may be linked to the information stored in and obtained from
                    Cookies. For further information on how We use, store and keep your personal data secure, see our
                    Privacy Policy.
                    <br />
                    <br />
                    We do not store sensitive personal information, such as mailing addresses, account passwords etc. in
                    the Cookies We use.
                  </Typography>

                  <Typography variant="h3" className="mb-2 font-medium">
                    Interpretation and Definitions
                  </Typography>

                  <Typography variant="h4" className="mb-2 font-medium">
                    Interpretation
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    The words of which the initial letter is capitalized have meanings defined under the following
                    conditions. The following definitions shall have the same meaning regardless of whether they appear
                    in singular or in plural.
                  </Typography>

                  <Typography variant="h4" className="mb-2 font-medium">
                    Definitions
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    For the purposes of this Privacy Policy:
                    <ul className="list-disc pl-[40px]">
                      <li className="pb-2">
                        <strong>Account</strong> means a unique account created for You to access our Service or parts
                        of our Service.
                      </li>
                      <li className="pb-2">
                        <strong>Company</strong>{' '}
                        {`(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Mapilio, United Kingdom.`}
                      </li>
                      <li className="pb-2">
                        <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any
                        other device by a website, containing the details of Your browsing history on that website among
                        its many uses.
                      </li>
                      <li className="pb-2">
                        <strong>Country</strong> refers to: United Kingdom
                      </li>
                      <li className="pb-2">
                        <strong>Device</strong> means any device that can access the Service such as a computer, a
                        smartphone or a digital tablet.
                      </li>
                      <li className="pb-2">
                        <strong>Personal Data</strong> is any information that relates to an identified or identifiable
                        individual.
                      </li>
                      <li className="pb-2">
                        <strong>Service</strong> refers to the Website.
                      </li>
                      <li className="pb-2">
                        <strong>Service Provider</strong> means any natural or legal person who processes the data on
                        behalf of the Company. It refers to third-party companies or individuals employed by the Company
                        to facilitate the Service, to provide the Service on behalf of the Company, to perform services
                        related to the Service or to assist the Company in analyzing how the Service is used.
                      </li>
                      <li className="pb-2">
                        <strong>Usage Data</strong> refers to data collected automatically, either generated by the use
                        of the Service or from the Service infrastructure itself (for example, the duration of a page
                        visit).
                      </li>
                      <li className="pb-2">
                        <strong>Usage Data</strong> Website refers to mapilio, accessible from{' '}
                        <a href="https://streetview.vn" target="blank" className="font-medium text-blue-700">
                          https://streetview.vn
                        </a>
                      </li>
                      <li className="pb-2">
                        <strong>You</strong> means the individual accessing or using the Service, or the company, or
                        other legal entity on behalf of which such individual is accessing or using the Service, as
                        applicable.
                      </li>
                    </ul>
                  </Typography>

                  <Typography variant="h3" className="mb-2 font-medium">
                    The use of the Cookies
                  </Typography>

                  <Typography variant="h4" className="mb-2 font-medium">
                    Type of Cookies We Use
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    {`Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal
                    computer or mobile device when You go offline, while Session Cookies are deleted as soon as You
                    close your web browser.`}
                    <br />
                    <br />
                    We use both session and persistent Cookies for the purposes set out below:
                    <ul className="list-disc pl-[40px]">
                      <li className="pb-2">
                        <strong>Necessary / Essential Cookies</strong>
                        <br />
                        Type: Session Cookies
                        <br />
                        Administered by: Us
                        <br />
                        Purpose: These Cookies are essential to provide You with services available through the Website
                        and to enable You to use some of its features. They help to authenticate users and prevent
                        fraudulent use of user accounts. Without these Cookies, the services that You have asked for
                        cannot be provided, and We only use these Cookies to provide You with those services.
                      </li>
                      <li className="pb-2">
                        <strong>Functionality Cookies</strong>
                        <br />
                        Type: Persistent Cookies
                        <br />
                        Administered by: Us
                        <br />
                        Purpose: These Cookies allow us to remember choices You make when You use the Website, such as
                        remembering your login details or language preference. The purpose of these Cookies is to
                        provide You with a more personal experience and to avoid You having to re-enter your preferences
                        every time You use the Website.
                      </li>
                    </ul>
                  </Typography>

                  <Typography variant="h4" className="mb-2 font-medium">
                    Your Choices Regarding Cookies
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies
                    in your browser and then delete the Cookies saved in your browser associated with this website. You
                    may use this option for preventing the use of Cookies at any time.
                    <br />
                    <br />
                    If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website
                    and some features may not function properly.
                    <br />
                    <br />
                    {`If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.`}
                  </Typography>

                  <Typography variant="h3" className="mb-2 font-medium">
                    Contact Us
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    If you have any questions about this Privacy Policy, You can contact us:
                    <ul className="list-disc pl-[40px]">
                      <li className="pb-2">By email: info@mapilio.com</li>
                    </ul>
                  </Typography>
                </div>

                <div className="md:col-span-1">
                  <div className="policy-box-contact">
                    <Typography className="mb-1 text-sm font-semibold">
                      How can you contact us about this notice?
                    </Typography>
                    <Typography className="mb-1 text-sm">
                      If you have any questions or concerns about the privacy policy please contact us.
                    </Typography>
                    <Typography className="mb-1 text-sm font-medium">
                      info@mapilio.com
                      <br />
                      73 High Street Andover SP10 1LP
                      <br />
                      United Kingdom
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MotionYContainer>
    </Base>
  );
};

export default CookiePolicyPage;
