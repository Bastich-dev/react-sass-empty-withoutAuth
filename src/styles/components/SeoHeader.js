import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Logo from "@/public/android-chrome-512x512.png";
import { CONST_BASE_URL, CONST_TITLE_APP } from "@utils/constants";

export default function Helmet({ title, description }) {
  const router = useRouter();

  const origin = CONST_BASE_URL;
  const prefix = CONST_TITLE_APP;

  const titlePage = prefix + (title ? " - " + title : "");
  const decriptionPage = description;
  const logo = Logo;

  return (
    <Head>
      <title>{titlePage}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="twitter:title" content={titlePage} />
      <meta property="og:title" content={titlePage} />

      <meta name="description" content={decriptionPage} />
      <meta name="twitter:description" content={decriptionPage} />
      <meta property="og:description" content={decriptionPage} />

      <meta property="og:site_name" content={prefix} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={origin + router.asPath} />
      <meta property="og:image" content={logo.src} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={logo.src} />
      <link rel="apple-touch-icon" href={logo.src} />
    </Head>
  );
}
