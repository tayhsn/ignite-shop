import { styled } from '..'

export const Container = styled('div', {
  minHeight: '100vh',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
})

export const Header = styled('header', {
  width: '100%',
  maxWidth: 1180,

  margin: '0 auto',
  padding: '2rem 0',
})
