import { styled } from '@stitches/react';

export const CartContentContainer = styled('div', {
   width: '100%',
   minHeight: 'calc(100vh - 100px)',
   paddingBottom: 16,

   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   gap: 16,
});

export const CartProduct = styled('section', {
   minHeight: '22rem',

   overflow: 'auto',
   scrollbarColor: 'dark',

   display: 'flex',
   flexDirection: 'column',
   gap: 24,
});

export const Product = styled('div', {
   width: 'fit-content',
   height: '5.875rem',

   display: 'flex',
   gap: 20,
});

export const ProductImage = styled('div', {
   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

   borderRadius: 8,

   cursor: 'pointer',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

   img: {
      objectFit: 'cover',
   },
});

export const ProductInfo = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'space-around',

   gap: 8,

   span: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,

      fontSize: '$md',
   },

   button: {
      color: '$green500',
      background: 'transparent',
      border: 0,

      cursor: 'pointer',
      fontWeight: 'bold',
   },
});

export const CartResume = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   gap: '2rem',

   'table tbody': {
      width: '100%',

      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
   },

   tr: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
   },

   'tr:last-child td:first-child': {
      fontSize: '$md',
   },

   'tr:last-child td:last-child': {
      fontSize: '$xl',
   },

   button: {
      width: '100%',
      marginTop: 'auto',
      backgroundColor: '$green500',
      border: 0,
      color: '$white',
      borderRadius: 8,
      padding: '1.25rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '$md',

      '&:disabled': {
         opacity: 0.6,
         cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
         backgroundColor: '$green300',
      },
   },
});
