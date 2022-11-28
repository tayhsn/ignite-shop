import { styled } from '..';

export const ProductContainer = styled('main', {
   display: 'flex',
   gap: '4rem',

   margin: '0 auto',
   padding: '2rem',

   maxWidth: 1180,

   '@media screen and (max-width: 940px)': {
      flexDirection: 'column',
      alignItems: 'center',
   },
});

export const ImageContainer = styled('div', {
   width: '100%',
   maxWidth: 576,
   height: 656,
   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
   borderRadius: 8,
   padding: '0.25rem',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

   img: {
      objectFit: 'cover',
   },
});

export const ProductDetails = styled('div', {
   maxWidth: 576,

   display: 'flex',
   flexDirection: 'column',

   h1: {
      fontSize: '$2xl',
      color: '$gray300',
   },

   span: {
      marginTop: '1rem',
      display: 'block',
      fontSize: '$2xl',
      color: '$green300',
   },

   p: {
      marginTop: '2.5rem',
      fontSize: '$md',
      lineHeight: 1.6,
      color: '$gray300',
   },

   button: {
      marginTop: '2rem',
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
