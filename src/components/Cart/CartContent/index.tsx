import axios from 'axios';
import Image from 'next/image';
import Router from 'next/router';
import { MouseEvent, useState } from 'react';
import { CartItem, useCart } from '../../../contexts/CartContext';
import { priceFormatter } from '../../../utils/formatter';
import {
   CartContentContainer,
   CartProduct,
   CartResume,
   Product,
   ProductImage,
   ProductInfo,
} from './styles';

export const CartContent = () => {
   const { cartItems, cartQuantity, totalPrice, removeFromCart } = useCart();
   const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
      useState(false);

   const handleBuyProduct = async () => {
      try {
         setIsCreatingCheckoutSession(true);

         const response = await axios
            .post('/api/checkout', {
               products: cartItems,
            })
            .then((res) => res.data);

         const { checkoutUrl } = response;
         Router.push(checkoutUrl);
      } catch (error) {
         setIsCreatingCheckoutSession(false);
         // ferramenta de observabilidade (datadog/sentry)
         console.log(`Error: ${error}`);
         alert(
            'Falha ao redirecionamento ao checkout. Tente novamente mais tarde!'
         );
      }
   };

   const handleRemoveFromCart = async (
      event: MouseEvent<HTMLButtonElement>,
      product: CartItem
   ) => {
      event.preventDefault();

      removeFromCart(product);
   };

   const formattedTotalPrice = priceFormatter(totalPrice);

   const cartIsNOTEmpty = cartQuantity > 0;

   return (
      <CartContentContainer>
         <CartProduct>
            {cartIsNOTEmpty ? (
               cartItems.map((product) => (
                  <Product key={product.id}>
                     <ProductImage>
                        <Image
                           src={product.imageUrl}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </ProductImage>

                     <ProductInfo>
                        <span>
                           <p>{product.name}</p>
                           <strong>{product.price}</strong>
                        </span>
                        <button
                           onClick={(event) =>
                              handleRemoveFromCart(event, product)
                           }
                           aria-label='Remover produto da sacola'
                        >
                           Remover
                        </button>
                     </ProductInfo>
                  </Product>
               ))
            ) : (
               <></>
            )}
         </CartProduct>

         <CartResume>
            <table>
               <tbody>
                  <tr>
                     <td>Quantidade</td>
                     <td>
                        {cartQuantity} ite{cartQuantity > 1 ? 'ns' : 'm'}
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <strong>Valor total</strong>
                     </td>
                     <td>
                        <strong>{formattedTotalPrice}</strong>
                     </td>
                  </tr>
               </tbody>
            </table>

            <button
               disabled={isCreatingCheckoutSession}
               onClick={handleBuyProduct}
               aria-label='Finalizar compra'
            >
               Finalizar compra
            </button>
         </CartResume>
      </CartContentContainer>
   );
};
