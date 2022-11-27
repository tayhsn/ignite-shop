import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartProvider } from '../contexts/CartContext';

import { NextPage } from 'next';
import { ReactNode } from 'react';

globalStyles();

export type NextPageLayout<P = {}, IP = P> = NextPage<P, IP> & {
   getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsLayout = AppProps & {
   Component: NextPageLayout;
};

export default function App({ Component, pageProps }: AppPropsLayout) {
   return (
      <CartProvider>
         <ToastContainer />

         {Component.getLayout(<Component {...pageProps} />)}
      </CartProvider>
   );
}
