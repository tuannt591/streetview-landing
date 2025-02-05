import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { MotionYContainer } from '@components/Motion';
import { Typography } from '@material-tailwind/react';

const PrivacyPolicyPage = () => {
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
                    Privacy Policy
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
                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of
                    Your information when You use the Service and tells You about Your privacy rights and how the law
                    protects You. We use Your Personal data to provide and improve the Service. By using the Service,
                    You agree to the collection and use of information in accordance with this Privacy Policy.
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
                    Collecting and Using Your Personal Data
                  </Typography>

                  <Typography variant="h4" className="mb-2 font-medium">
                    Types of Data Collected
                  </Typography>

                  <Typography variant="h5" className="mb-2 font-medium">
                    Personal Data
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable
                    information that can be used to contact or identify You. Personally identifiable information may
                    include, but is not limited to:
                    <ul className="list-disc pl-[40px]">
                      <li className="pb-2">Email address</li>
                      <li className="pb-2">Phone number</li>
                      <li className="pb-2">Usage Data</li>
                    </ul>
                  </Typography>
                  <Typography variant="h5" className="mb-2 font-medium">
                    Usage Data
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    Usage Data is collected automatically when using the Service.
                    <br />
                    <br />
                    {`Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.`}
                    <br />
                    <br />
                    When You access the Service by or through a mobile device, We may collect certain information
                    automatically, including, but not limited to, the type of mobile device You use, Your mobile device
                    unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile
                    Internet browser You use, unique device identifiers and other diagnostic data.
                    <br />
                    <br />
                    We may also collect information that Your browser sends whenever You visit our Service or when You
                    access the Service by or through a mobile device.
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

export default PrivacyPolicyPage;
