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
   right: '-100%',
   padding: '24px',
   width: '100%',
   maxWidth: '480px',
   height: '100%',
   maxHeight: '100vh',
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

export const Description = styled('main', {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   width: '24rem',
   minHeight: 'calc(100vh - 80px)',
   padding: '2rem 0',

   p: {
      fontSize: '$lg',
   },
});
