import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../../assets/logo.svg';
import { Cart } from '../Cart';

import { HeaderContainer } from './styles';

export const HeaderWithCart = () => {
   return (
      <HeaderContainer>
         <Link href='/' aria-label='Volte para a página inicial'>
            <Image src={logoImg} alt='' />
         </Link>

         <Cart />
      </HeaderContainer>
   );
};
