import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0.25rem',
  cursor: 'pointer',
  minWidth: 540,

  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const ProductFooterDetails = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '2rem',

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0,0,0,0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  strong: {
    fontSize: '$lg',
    color: '$gray100',
  },

  span: {
    fontWeight: 'bold',

    display: 'flex',
    flexDirection: 'column',
    gap: '4px',

    'strong:first-child': {
      fontSize: '$lg',
      color: '$white',
    },

    'strong:last-child': {
      fontSize: '$xl',
      color: '$green300',
    },
  },

  button: {
    width: '3rem',
    height: '3rem',

    border: 0,
    borderRadius: 6,

    background: '$green500',
    color: '$white',

    cursor: 'pointer',

    '&:hover': {
      background: '$green300',
    },
  },
})
