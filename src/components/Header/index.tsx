import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../../assets/logo.svg';
import { Cart } from '../Cart';
import { HeaderContainer } from './styles';

export const Header = () => {
   return (
      <HeaderContainer>
         <Link href='/'>
            <Image src={logoImg} alt='' />
         </Link>

         <Cart />
      </HeaderContainer>
   );
};
