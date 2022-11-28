import { styled } from '..';

export const SuccessHeader = styled('header', {
   width: '100%',
   maxWidth: 1180,

   margin: '0 auto',
   padding: '2rem',

   display: 'flex',
   justifyContent: 'center',
});

export const SuccessContainer = styled('main', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   margin: '0 auto',
   height: 656,

   textAlign: 'center',

   padding: '2rem',

   h1: {
      fontSize: '$2xl',
      color: '$gray100',
   },

   div: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      marginBottom: '3rem',
   },

   p: {
      fontSize: '$xl',
      color: '$gray300',
      maxWidth: 560,
      marginTop: '2rem',
      lineHeight: 1.4,
   },

   a: {
      marginTop: '5rem',
      display: 'block',
      fontSize: '$lg',
      color: '$green500',
      textDecoration: 'none',
      fontWeight: 'bold',

      '&:hover': {
         color: '$green300',
      },
   },
});

export const ImageContainer = styled('div', {
   width: 140,
   height: 140,

   position: 'relative',
   zIndex: 1,

   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',

   padding: '0.25rem',
   margin: '0 -26px',

   background: 'linear-gradient(180deg, #1ea483 0%, #7465e4 100%)',
   borderRadius: '50%',
   boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',

   img: {
      objectFit: 'cover',
   },
});
