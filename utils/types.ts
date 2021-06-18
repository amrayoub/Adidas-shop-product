export interface Product {
  currency: string
  price: number
  id: string
  name: string
  description: string
  imgUrl: string
}

export interface Review {
  productId: string
  locale: string
  rating: number
  text: string
}
