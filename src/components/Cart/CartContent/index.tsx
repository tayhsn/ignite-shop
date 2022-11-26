import axios from 'axios';
import Image from 'next/image';
import { MouseEvent, useState } from 'react';
import { useCart } from '../../../contexts/CartContext';
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
         const response = await axios.post('/api/checkout', {
            products: cartItems,
         });
         const { checkoutUrl } = response.data;
         window.location.href = checkoutUrl;
      } catch (error) {
         setIsCreatingCheckoutSession(false);
         // ferramenta de observabilidade (datadog/sentry)
         alert('Falha ao redirecionar ao checkout!');
      }
   };

   const handleRemoveFromCart = async (
      event: MouseEvent<HTMLButtonElement>,
      productId: string
   ) => {
      event.preventDefault();

      removeFromCart(productId);
   };

   const formattedTotalPrice = priceFormatter(totalPrice);

   const cartIsNOTEmpty = cartQuantity > 0;

   return (
      <CartContentContainer>
         <CartProduct>
            {cartIsNOTEmpty ? (
               cartItems.map((product) => (
                  <Product>
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
                              handleRemoveFromCart(event, product.id)
                           }
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
                     <td>{cartQuantity} itens</td>
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
            >
               Finalizar compra
            </button>
         </CartResume>
      </CartContentContainer>
   );
};
