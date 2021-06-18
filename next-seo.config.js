const title = 'Review'
const description = 'Find your favorite Adidas product and review it'

const SEO = {
  title,
  description,
  canonical: 'https://adidas-product-review.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://adidas-product-review.vercel.app',
    title,
    description,
    images: [
      {
        url: 'https://adidas-product-review.vercel.app/images/og.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@jeanbauerr',
    site: '@jeanbauerr',
    cardType: 'summary_large_image',
  },
}

export default SEO
