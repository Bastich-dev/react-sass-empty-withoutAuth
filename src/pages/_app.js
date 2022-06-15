import { useEffect } from "react";
import TagManager from "react-gtm-module";

function WepApp({ Component, pageProps }) {
  useEffect(() => {
    const google_tag_manager_id = process.env.NEXT_PUBLIC_GTM_ID;
    TagManager.initialize({ gtmId: google_tag_manager_id });
  }, []);

  return <Component {...pageProps} />;
}

export default WepApp;
