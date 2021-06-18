import products from '../../../cypress/fixtures/products.json'

export default function handler(req, res) {
  return res.status(200).json(products)
}
