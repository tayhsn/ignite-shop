import * as Dialog from '@radix-ui/react-dialog';
import { Handbag, X } from 'phosphor-react';
import { useCart } from '../../contexts/CartContext';
import { CartContent } from './CartContent';
import {
   CartButtonContainer,
   CartContainer,
   Close,
   Content,
   Overlay,
} from './styles';

export const Cart = () => {
   const { cartQuantity } = useCart();

   const cartHasContent = cartQuantity > 0;

   return (
      <Dialog.Root>
         <Dialog.Trigger asChild>
            <CartButtonContainer aria-label='Ver o carrinho'>
               <Handbag size={24} />
               {cartHasContent ? <span>{cartQuantity}</span> : <></>}
            </CartButtonContainer>
         </Dialog.Trigger>

         <Dialog.Portal>
            <Overlay />

            <Content aria-describedby={undefined}>
               <Close>
                  <X size={24} weight='bold' />
               </Close>

               <Dialog.Title>Sacola de compras</Dialog.Title>

               <CartContainer>
                  {cartHasContent ? (
                     <CartContent />
                  ) : (
                     <h3>A sacola está vazia!</h3>
                  )}
               </CartContainer>
            </Content>
         </Dialog.Portal>
      </Dialog.Root>
   );
};
