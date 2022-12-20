import React, { ReactNode } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) : ReactNode {
  
  return <div><Component {...pageProps} /></div> 
} 
    