import React from 'react';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';
import { Typography, Button, Card, CardBody, Input, Textarea } from '@material-tailwind/react';
import { MotionYContainer } from '@components/Motion';
import { useRouter } from 'next/router';
import { paths } from 'constants/paths';

const ContactUsPage = () => {
  const { title } = config.site;
  const router = useRouter();

  return (
    <Base title={title}>
      <ScrollToTop />
      <MotionYContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <div className="container">
          <section className="section">
            <div className="grid grid-cols-1 justify-between md:grid-cols-2 md:gap-20">
              <div className="max-md:mb-10">
                <Typography variant="paragraph" className="text-lg font-medium text-gray-600">
                  CONTACT US
                </Typography>
                <Typography variant="h2" className="mb-5 text-5xl">
                  Get in touch
                </Typography>
                <Typography variant="paragraph" className="text-lg">
                  {`We'd love to talk about how we can help you.`}
                </Typography>
                <div className="mt-10 grid grid-cols-1 gap-4">
                  <div className="flex gap-2">
                    <Typography variant="paragraph" className="w-[90px] text-lg font-medium text-slate-900">
                      Address:
                    </Typography>
                    <Typography variant="paragraph" className="text-lg" style={{ width: 'calc(100% - 90px)' }}>
                      Tòa nhà Hoài Nam, 12/1 Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam
                    </Typography>
                  </div>

                  <div className="flex gap-2">
                    <Typography variant="paragraph" className="w-[90px] text-lg font-medium text-slate-900">
                      Email:
                    </Typography>
                    <Typography variant="paragraph" className="text-lg" style={{ width: 'calc(100% - 90px)' }}>
                      admin@openmap.vn
                    </Typography>
                  </div>
                </div>
              </div>

              <div>
                <Card color="white" style={{ boxShadow: '0 10px 40px 10px rgba(140,152,164, .18)' }}>
                  <CardBody>
                    <form className="mb-2 mt-8 w-full">
                      <div className="mb-1 grid grid-cols-2 gap-6">
                        <div className="col-span-2 md:col-span-1">
                          <Input
                            size="lg"
                            placeholder="First name"
                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                              className: 'hidden',
                            }}
                          />
                        </div>

                        <div className="col-span-2 md:col-span-1">
                          <Input
                            size="lg"
                            placeholder="Last name"
                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                              className: 'hidden',
                            }}
                          />
                        </div>

                        <div className="col-span-2">
                          <Input
                            size="lg"
                            type="email"
                            placeholder="Email"
                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                              className: 'hidden',
                            }}
                          />
                        </div>

                        <div className="col-span-2">
                          <Textarea
                            size="lg"
                            placeholder="Message"
                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                              className: 'hidden',
                            }}
                          />
                        </div>
                      </div>

                      <Button className="mt-6" fullWidth size="lg" color="blue">
                        Submit
                      </Button>
                      <Typography color="gray" className="mt-4 text-sm font-normal">
                        {`By clicking on "submit" you agree to our `}
                        <a href={paths.privacyPolicy} className="font-semibold text-slate-900">
                          Privacy Policy
                        </a>
                        {`, `}
                        <a href={paths.terms} className="font-semibold text-slate-900">
                          Terms Policy
                        </a>
                        {` and `}
                        <a href={paths.cookiePolicy} className="font-semibold text-slate-900">
                          Cookie Policy
                        </a>
                      </Typography>
                    </form>
                  </CardBody>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </MotionYContainer>
    </Base>
  );
};

export default ContactUsPage;
