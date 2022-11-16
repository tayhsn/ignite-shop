import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0 0 0 / 0.7)',
  backdropFilter: 'blur(4px)',
})

export const Content = styled(Dialog.Content, {
  width: '30rem',
  height: '100vh',

  button: {
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
})
