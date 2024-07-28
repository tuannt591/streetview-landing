import config from '@config/config.json';
import Base from '@layouts/Baseof';
import ScrollToTop from '@partials/ScrollToTop';

const TermOfUsePage = () => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <ScrollToTop />
      <div className="container">Term of use page</div>
    </Base>
  );
};

export default TermOfUsePage;
