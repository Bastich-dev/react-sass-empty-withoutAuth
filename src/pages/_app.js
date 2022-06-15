import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

import "../styles/global.scss";

function WepApp({ Component, pageProps }) {
  useEffect(() => {
    const google_tag_manager_id = process.env.NEXT_PUBLIC_GTM_ID;
    TagManager.initialize({ gtmId: google_tag_manager_id });
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default WepApp;
