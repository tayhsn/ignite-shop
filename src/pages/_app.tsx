import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';

import { Container } from '../styles/pages/app';

import { CartProvider } from '../contexts/CartContext';
import { Header } from '../components/Header';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
   return (
      <CartProvider>
         <Container>
            <Header />
            <ToastContainer />

            <Component {...pageProps} />
         </Container>
      </CartProvider>
   );
}
