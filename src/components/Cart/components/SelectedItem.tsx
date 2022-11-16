import Image from 'next/image'

export const SelectedItem = ({ product }) => {
  return (
    <div>
      <Image src={product.imageUrl} width={520} height={480} alt="" />
    </div>
  )
}
