import * as Dialog from '@radix-ui/react-dialog';
import { Handbag, X } from 'phosphor-react';
import { useCart } from '../../contexts/CartContext';
import { HeaderButtonContainer } from '../Header/styles';
import { CartContent } from './CartContent';
import { Close, Content, Description, Overlay } from './styles';

export const Cart = () => {
   const { cartQuantity } = useCart();

   const cartHasContent = cartQuantity > 0;

   return (
      <Dialog.Root>
         <Dialog.Trigger asChild>
            <HeaderButtonContainer>
               <Handbag size={24} />
               {cartHasContent ? <span>{cartQuantity}</span> : <></>}
            </HeaderButtonContainer>
         </Dialog.Trigger>

         <Dialog.Portal>
            <Overlay />

            <Content aria-describedby={undefined}>
               <Close>
                  <X size={24} weight='bold' />
               </Close>

               <Dialog.Title>Sacola de compras</Dialog.Title>

               <Description>
                  {cartHasContent ? <CartContent /> : <>A sacola está vazia!</>}
               </Description>
            </Content>
         </Dialog.Portal>
      </Dialog.Root>
   );
};
