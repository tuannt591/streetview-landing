import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';

const PrivacyPolicyPage = () => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <ScrollToTop />
      <div className="container">Privacy policy</div>
    </Base>
  );
};

export default PrivacyPolicyPage;
