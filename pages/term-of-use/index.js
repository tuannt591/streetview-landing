import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { MotionYContainer } from '@components/Motion';
import { Typography } from '@material-tailwind/react';

const TermOfUsePage = () => {
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
                    Terms and Conditions
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
                    Please read these terms and conditions carefully before using Our Service.
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
                    Acknowledgment
                  </Typography>

                  <Typography className="mb-5 text-lg">
                    These are the Terms and Conditions governing the use of this Service and the agreement that operates
                    between You and the Company. These Terms and Conditions set out the rights and obligations of all
                    users regarding the use of the Service.
                    <br />
                    <br />
                    Your access to and use of the Service is conditioned on Your acceptance of and compliance with these
                    Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access
                    or use the Service.
                    <br />
                    <br />
                    By accessing or using the Service You agree to be bound by these Terms and Conditions. If You
                    disagree with any part of these Terms and Conditions then You may not access the Service.
                    <br />
                    <br />
                    You represent that you are over the age of 18. The Company does not permit those under 18 to use the
                    Service.
                    <br />
                    <br />
                    Your access to and use of the Service is also conditioned on Your acceptance of and compliance with
                    the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the
                    collection, use and disclosure of Your personal information when You use the Application or the
                    Website and tells You about Your privacy rights and how the law protects You. Please read Our
                    Privacy Policy carefully before using Our Service.
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
                    User Accounts and Account Security
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    You will need to register for an account to access some of the Services. If you register for an
                    account, you must provide accurate account information and promptly update this information if it
                    changes. You may not permit others to access your account. You also must maintain the security of
                    your account and promptly notify us if you notice or suspect that someone other than you has
                    accessed your account without your permission. You are responsible for any activities on your
                    account unless unauthorized access is obtained solely because of a failure of our security measures.
                    We reserve the right to reclaim usernames, including on behalf of businesses or individuals that
                    hold legal claims, including trademark rights, in those usernames.
                  </Typography>

                  <Typography variant="h3" className="mb-2 font-medium">
                    User Content
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    {`a) Some of the services allow you and other users to create, post, store and share content, including images and image sequences, location and route information, videos, comments, messages, text, photos, videos, software, edits, poll responses, posts, votes, ratings, rankings, signals, and other materials (collectively, “User Content“). Except for the license you grant below, you do NOT retain all rights in and to your User Content, as between You and Mapilio.`}
                    <br />
                    <br />
                    {`b) Without limiting your rights and our obligations under data protection law, you grant service provider a nonexclusive, royalty-free, irrevocable, worldwide, fully paid, transferable and sublicensable license to use, reproduce, publish, create derivative works from, distribute, publicly perform and display your User Content, for the term of its protection by intellectual property rights, and any name, username or likeness provided in connection with your User Content, for a period of ninety-nine (99) years, in each case in all media formats and channels now known or later developed without compensation to you. When you post or otherwise share User Content on or through the Mapilio Services, you understand that your User Content and any associated information (such as your username, profile photo, and bio) may be visible to others. To the extent possible under applicable law, you waive any moral, neighboring or other rights you may have (including rights in the nature of attribution, integrity, privacy, paternity, and rights to object to derogatory treatment) in your User Content that would otherwise preclude us from exercising our rights under the license granted by you in this section.`}
                    <br />
                    <br />
                    {`c) You represent and warrant that your User Content, and our use of such content as permitted by these Terms, will not violate any rights of or cause injury to any person or entity. Although we have no obligation to post, screen, edit or monitor User Content, if we reasonably believe any User Content is in breach of these Terms, we may remove or refuse to display such User Content. We will attempt to notify you of the reason for our action unless we reasonably believe that notice would: (i) violate the law; (ii) pose a risk of liability for us or our affiliates; (iii) hinder an investigation; (iv) pose a risk to the operation of the Mapilio Services; or (v) harm any user or other party.`}
                    <br />
                    <br />
                    {`d) There is zero tolerance for objectionable content or abusive users on this platform. We cannot accept any inappropriate content or abusive behavior, and engaging in such actions may result in the immediate suspension or permanent deletion of your account.`}
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

export default TermOfUsePage;
