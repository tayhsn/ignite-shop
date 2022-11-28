import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import Stripe from 'stripe';

import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Handbag, Trash } from 'phosphor-react';
import { MouseEvent, ReactElement } from 'react';
import { HeaderWithCart } from '../components/HeaderWithCart';
import { CartItem, useCart } from '../contexts/CartContext';
import { stripe } from '../lib/stripe';
import {
   HomeContainer,
   Product,
   ProductFooterDetails,
} from '../styles/pages/home';

interface HomeProps {
   products: CartItem[];
}

export default function Home({ products }: HomeProps) {
   const { addToCart, removeFromCart, checkIfAlreadyExists } = useCart();

   const [sliderRef] = useKeenSlider({
      slides: {
         perView: 2.6,
         spacing: 48,
      },
      rubberband: false,
      breakpoints: {
         '(max-width: 1366px)': {
            slides: {
               perView: 2.1,
               spacing: 24,
            },
         },
         '(max-width: 768px)': {
            slides: {
               perView: 1.1,
               spacing: 12,
            },
         },
      },
   });

   const handleAddToCart = (
      event: MouseEvent<HTMLButtonElement>,
      product: CartItem
   ) => {
      event.preventDefault();

      addToCart(product);
   };

   const handleRemoveFromCart = (
      event: MouseEvent<HTMLButtonElement>,
      product: CartItem
   ) => {
      event.preventDefault();

      removeFromCart(product);
   };

   return (
      <>
         <Head>
            <title>Home | Ignite Shop</title>
         </Head>

         <HomeContainer ref={sliderRef} className='keen-slider'>
            {products.map((product) => (
               <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  prefetch={false}
               >
                  <Product className='keen-slider__slide'>
                     <Image
                        src={product.imageUrl}
                        width={520}
                        height={400}
                        alt=''
                     />

                     <ProductFooterDetails>
                        <span>
                           <strong>{product.name}</strong>
                           <strong>{product.price}</strong>
                        </span>

                        {checkIfAlreadyExists(product.id) ? (
                           <button
                              onClick={(event) =>
                                 handleRemoveFromCart(event, product)
                              }
                              aria-label='Remover produto da sacola'
                           >
                              <Trash size={24} />
                           </button>
                        ) : (
                           <button
                              onClick={(event) =>
                                 handleAddToCart(event, product)
                              }
                              aria-label='Adicionar produto na sacola'
                           >
                              <Handbag size={24} />
                           </button>
                        )}
                     </ProductFooterDetails>
                  </Product>
               </Link>
            ))}
         </HomeContainer>
      </>
   );
}

export const getStaticProps: GetStaticProps = async () => {
   const response = await stripe.products.list({
      expand: ['data.default_price'],
   });

   const products = response.data.map((product) => {
      const price = product.default_price as Stripe.Price;

      const formattedPrice = new Intl.NumberFormat('pt-BR', {
         style: 'currency',
         currency: 'BRL',
      }).format(price.unit_amount / 100);

      return {
         id: product.id,
         name: product.name,
         imageUrl: product.images[0],
         price: formattedPrice,
         priceNumber: price.unit_amount,
         defaultPriceId: price.id,
      };
   });

   return {
      props: {
         products,
      },
      revalidate: 60 * 60 * 2, // 60sec * 60min = 1hour * 2 = 2 hours
   };
};

Home.getLayout = function getLayout(page: ReactElement) {
   return (
      <>
         <HeaderWithCart />

         {page}
      </>
   );
};
