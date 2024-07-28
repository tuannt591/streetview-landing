import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';

const AboutUsPage = () => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <ScrollToTop />
      <div className="container">About us</div>
    </Base>
  );
};

export default AboutUsPage;
