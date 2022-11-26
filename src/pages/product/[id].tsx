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
   const isProductAlreadyInCart = checkIfAlreadyExists(product.id);

   const handleAddToCart = () => addToCart(product);

   const handleRemoveFromCart = () => removeFromCart(product.id);

   const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
   }).format(product.priceNumber / 100);

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

               {isProductAlreadyInCart ? (
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
