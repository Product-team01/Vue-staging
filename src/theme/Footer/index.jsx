import React from 'react';
import Footer from '@theme-original/Footer';

import { useLocation } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function FooterWrapper(props) {
  const { pathname } = useLocation();

  return (
    <>
      <Footer {...props} />

      <Head>
        {/**
         * Doing it this way because importing css in docusaurus
         * reorders the css clases that messes up the docsly styling
         */}
        <link rel="stylesheet" href="/assets/css/docsly.min.css" />
      </Head>

    </>
  );
}
