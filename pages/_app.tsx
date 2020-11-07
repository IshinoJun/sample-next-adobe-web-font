import '../styles/globals.css'
import React, { useEffect } from 'react'
import Adobe from "../adobe";
import { AppProps } from 'next/app';

const MyApp = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  useEffect(() => {
    if (process.browser) Adobe(document);
  }, [])
  
  return (
    <>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
