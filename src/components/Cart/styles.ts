import * as Dialog from '@radix-ui/react-dialog';
import { styled, keyframes } from '@stitches/react';

const fadeInAnimation = keyframes({
   '0%': { opacity: 0 },
   '100%': { opacity: 1 },
});

const fadeOutAnimation = keyframes({
   '0%': { opacity: 1 },
   '100%': { opacity: 0 },
});

export const CartButtonContainer = styled('button', {
   width: '3rem',
   height: '3rem',

   border: 0,
   borderRadius: 6,

   background: '$gray800',
   color: '$gray300',

   cursor: 'pointer',

   position: 'relative',

   span: {
      position: 'absolute',
      width: '1.75rem',
      height: '1.75rem',

      top: 'calc(-1.25rem / 2)',
      right: 'calc(-1.25rem / 2)',

      background: '$green500',
      color: '$gray100',

      border: '3px solid $gray900',
      borderRadius: 1000,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      fontWeight: 700,
   },
});

export const Overlay = styled(Dialog.Overlay, {
   position: 'fixed',
   inset: 0,
   background: 'rgba(0 0 0 / 0.7)',
   backdropFilter: 'blur(4px)',

   "&[data-state='open']": {
      animation: `${fadeInAnimation} 0.1s ease-in`,
   },

   "&[data-state='closed']": {
      animation: `${fadeOutAnimation} 0.1s ease-out`,
   },
});

export const Content = styled(Dialog.Content, {
   position: 'absolute',
   top: 0,

   padding: '24px',
   width: '100%',
   maxWidth: '480px',
   height: '100vh',

   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',

   background: '$gray800',
   zIndex: '2',

   "&[data-state='open']": {
      right: 0,
   },
});

export const Close = styled(Dialog.Close, {
   color: '#8D8D99',
   background: 'transparent',
   border: 0,

   position: 'absolute',
   left: 432,
   top: 24,

   cursor: 'pointer',
});

export const CartContainer = styled('main', {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   alignItems: 'center',

   width: '24rem',
   minHeight: 'calc(100vh - 80px)',
   padding: '2rem 0',
});
