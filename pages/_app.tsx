import '../styles/globals.css'
import React, { useEffect } from 'react'
import adobeLoader from "../adobeLoader";
import { AppProps } from 'next/app';

const MyApp = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  useEffect(() => {
    if (process.browser) adobeLoader(document);
  }, [])
  
  return (
    <>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
