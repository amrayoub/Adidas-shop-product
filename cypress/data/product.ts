import products from '../fixtures/products.json'

type generateProductsType = {
  quantity?: number
}

const generateProducts = ({ quantity }: generateProductsType = {}) => {
  const selectedProducts = products.slice(0, quantity)
  return selectedProducts
}

export { generateProducts }
