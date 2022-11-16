import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { Handbag, X } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import { HeaderButtonContainer } from '../Header/styles'
import { SelectedItem } from './components/SelectedItem'
import { Content, Overlay } from './styles'

export const Cart = () => {
  const { cartItemsTotal, cartItems } = useCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const handleBuyProduct = async () => {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      // ferramenta de observabilidade (datadog/sentry)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <HeaderButtonContainer>
          <Handbag size={24} />
          {cartItemsTotal > 0 ? <span>{cartItemsTotal}</span> : <></>}
        </HeaderButtonContainer>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Close>
            <X size={24} color="8D8D99" weight="bold" />
          </Dialog.Close>

          <Dialog.Title>Sacola de compras</Dialog.Title>

          <div>
            {cartItems.map((product) => (
              <SelectedItem key={product.id} product={product} />
            ))}
          </div>

          <Dialog.Description>
            <table>
              <tr>
                <td>Quantidade</td>
                <td>3 itens</td>
              </tr>
              <tr>
                <td>Valor total</td>
                <td>R$ 270,00</td>
              </tr>
            </table>

            <button
              disabled={isCreatingCheckoutSession}
              onClick={handleBuyProduct}
            >
              Finalizar compra
            </button>
          </Dialog.Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
