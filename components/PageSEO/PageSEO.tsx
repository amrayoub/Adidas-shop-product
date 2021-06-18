import { NextSeo } from 'next-seo'

import { Product } from '../../utils/types'

interface PageSEOProps {
  product: Product
}

const PageSEO = ({ product }: PageSEOProps) => {
  const productUrl = `https://adidas-product-review.vercel.app/product/${product.id}`
  return (
    <NextSeo
      title={`${product.id} - review`} // should be product.name but looks bad without proper data 🙈
      description={product.description}
      canonical={productUrl}
      openGraph={{
        url: productUrl,
        title: product.name,
        description: product.description,
        images: [
          {
            url: product.imgUrl,
            width: 800,
            height: 600,
            alt: product.name,
          },
        ],
        site_name: 'Adidas',
      }}
    />
  )
}

export { PageSEO }
