import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { MotionYContainer } from '@components/Motion';
import { Typography } from '@material-tailwind/react';

const DataProcessingPage = () => {
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
                    Data Processing Agreement
                  </Typography>
                  <Typography className="text-white">DPA between Streetview and Users</Typography>
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
                  <Typography variant="h3" className="mb-2 font-medium">
                    Data Processing Agreement — Streetview
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    This Data Processing Agreement (“<strong>Agreement</strong>“) forms part of the Contract for
                    Services (“<strong>Principal Agreement</strong>“) between Streetview and Its Users. (together as the
                    “<strong>Parties</strong>”)
                  </Typography>

                  <Typography variant="h3" className="mb-2 font-medium">
                    WHEREAS
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    (A) The Company acts as a Data Controller.
                    <br />
                    <br />
                    (B) The Company wishes to subcontract certain Services, which imply the processing of personal data,
                    to the Data Processor.
                    <br />
                    <br />
                    (C) The Parties seek to implement a data processing agreement that complies with the requirements of
                    the current legal framework in relation to data processing and with the Regulation (EU) 2016/679 of
                    the European Parliament and of the Council of 27 April 2016 on the protection of natural persons
                    with regard to the processing of personal data and on the free movement of such data, and repealing
                    Directive 95/46/EC (General Data Protection Regulation).
                    <br />
                    <br />
                    (D) The Parties wish to lay down their rights and obligations.
                  </Typography>

                  <Typography variant="h3" className="mb-2 font-medium">
                    IT IS AGREED AS FOLLOWS:
                  </Typography>
                  <Typography variant="h4" className="mb-2 font-medium">
                    1. Definitions and Interpretation
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    1.1 Unless otherwise defined herein, capitalized terms and expressions used in this Agreement shall
                    have the following meaning:
                    <br />
                    <br />
                    1.1.1 “Agreement” means this Data Processing Agreement and all Schedules;
                    <br />
                    <br />
                    1.1.2 “Company Personal Data” means any Personal Data Processed by a Contracted Processor on behalf
                    of Company pursuant to or in connection with the Principal Agreement;
                    <br />
                    <br />
                    1.1.3 “Contracted Processor” means a Subprocessor;
                    <br />
                    <br />
                    1.1.4 “Data Protection Laws” means EU Data Protection Laws and, to the extent applicable, the data
                    protection or privacy laws of any other country;
                  </Typography>
                  <Typography variant="h4" className="mb-2 font-medium">
                    2. Processing of Company Personal Data
                  </Typography>
                  <Typography className="mb-5 text-lg">
                    2.1 Processor shall:
                    <br />
                    <br />
                    2.1.1 comply with all applicable Data Protection Laws in the Processing of Company Personal Data;
                    and
                    <br />
                    <br />
                    2.1.2 not Process Company Personal Data other than on the relevant Company’s documented
                    instructions.
                    <br />
                    <br />
                    2.2 The Company instructs Processor to process Company Personal Data.
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

export default DataProcessingPage;
