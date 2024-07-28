import theme from '@config/theme.json';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import vi from '../lang/vi.json';
import en from '../lang/en.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'styles/style.scss';

const messages = {
  vi,
  en,
};

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter();

  // default theme setup

  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  const [fontcss, setFontcss] = useState();

  useEffect(() => {
    fetch(`https://fonts.googleapis.com/css2?family=${pf}${sf ? '&family=' + sf : ''}&display=swap`).then(res =>
      res.text().then(css => setFontcss(css)),
    );
  }, [pf, sf]);

  // google tag manager (gtm)
  // const tagManagerArgs = {
  //   gtmId: config.params.tag_manager_id,
  // };
  // useEffect(() => {
  //   setTimeout(() => {
  //     process.env.NODE_ENV === "production" &&
  //       config.params.tag_manager_id &&
  //       TagManager.initialize(tagManagerArgs);
  //   }, 5000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <Head>
        {/* google font css */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <style
          dangerouslySetInnerHTML={{
            __html: `${fontcss}`,
          }}
        />
        {/* responsive meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
};

export default App;
