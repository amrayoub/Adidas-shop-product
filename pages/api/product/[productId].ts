import products from '../../../cypress/fixtures/products.json'

export default function handler(req, res) {
  const { productId } = req.query
  const product = products.find((product) => product.id === productId)
  return res.status(200).json(product)
}
