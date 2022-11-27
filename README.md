# Ignite Shop 2.0

> Ecommerce com gerenciamento pelo Stripe.

## 📲 [Link do deploy](https://ignite-shop-five.vercel.app/)

![Capa](./public/Capa.png)

## 📑 Sobre o projeto

Esta aplicação é projeto do módulo de "Fundamentos de Next.js" do curso de especialização Ignite.

-  **Ignite Shop** é projeto desenvolvido durante a prática guiada e implementa as funcionalidades deste [layout](<https://www.figma.com/file/MjcXVLgQxiPU8s2LuKwstR/Ignite-Shop-(Copy)>).

-  **Ignite Shop 2.0** é o desafio prático que adiciona as funcionalidades deste [layout](<https://www.figma.com/file/DdDCcDXklWykjkW3AkL6UZ/Ignite-Shop-2.0-(Copy)?node-id=0%3A1>).

## ✍🏻 Funcionalidades

Esta aplicação simula uma loja cujo gerenciamento de produtos e pedidos é feito pela biblioteca **Stripe**.

### Ignite Shop

-  Implementa carrossel para exibir os produtos
-  Implementa página de detalhes do produto
   -  Botão de comprar redireciona para conclusão de compra no Stripe
-  Implementa página de sucesso caso o usuário tenha concluído a compra

### Ignite Shop 2.0

-  Adiciona modal do carrinho no Header
-  Adiciona sidebar do carrinho que exibe os produtos, podendo removê-lo do carrinho
-  Adiciona opção de adicionar ou remover o produto do carrinho na thumbnail da Home e na página de detalhes do produto

## 🧑🏻‍💻 Para testar

-  Finalize o pedido normalmente, e use os seguintes dados para pagamento:

```
Número do cartão: 4242 4242 4242 4242
Validade: qualquer data futura no formato > 12/34
CVV: qualquer combinação de 3 digitos > 123
```

## 🧠 Aprendizados

-  Conceitos de Server-Side Renderig (SSR) e Static Site Generation (SSG)
-  Uso da biblioteca de estilização Stitches

## 🛠 Tecnologias utilizadas

-  Typescript
-  Next.js
-  Stripe
-  Stitches
-  Axios
-  Keen-slider
