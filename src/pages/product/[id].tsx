import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Stripe from 'stripe';
import { useCart } from '../../contexts/CartContext';

import { stripe } from '../../lib/stripe';
import {
   ImageContainer,
   ProductContainer,
   ProductDetails,
} from '../../styles/pages/product';
import { priceFormatter } from '../../utils/formatter';

interface ProductProps {
   product: {
      id: string;
      name: string;
      description: string;
      imageUrl: string;
      price: string;
      priceNumber: number;
      defaultPriceId: string;
   };
}

export default function Product({ product }: ProductProps) {
   const { addToCart, checkIfAlreadyExists, removeFromCart } = useCart();
   const alreadyInCart = checkIfAlreadyExists(product.id);

   const handleAddToCart = () => addToCart(product);

   const handleRemoveFromCart = () => removeFromCart(product.id);

   const formattedPrice = priceFormatter(product.priceNumber / 100);

   return (
      <>
         <Head>
            <title>Sacola de compras | Ignite Shop</title>
         </Head>

         <ProductContainer>
            <ImageContainer>
               <Image src={product.imageUrl} width={520} height={480} alt='' />
            </ImageContainer>

            <ProductDetails>
               <h1>{product.name}</h1>
               <span>{formattedPrice}</span>

               <p>{product.description}</p>

               {alreadyInCart ? (
                  <button onClick={handleRemoveFromCart}>
                     Remover da sacola
                  </button>
               ) : (
                  <button onClick={handleAddToCart}>Adicionar a sacola</button>
               )}
            </ProductDetails>
         </ProductContainer>
      </>
   );
}

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [{ params: { id: 'prod_MioqvGStofInOA' } }],
      fallback: 'blocking',
   };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
   params,
}) => {
   const productId = params.id;

   const product = await stripe.products.retrieve(productId, {
      expand: ['default_price'],
   });

   const price = product.default_price as Stripe.Price;

   return {
      props: {
         product: {
            id: product.id,
            name: product.name,
            description: product.description,
            imageUrl: product.images[0],
            defaultPriceId: price.id,
            price: price.unit_amount,
         },
      },
      revalidate: 60 * 60 * 1, // 1 hour
   };
};
