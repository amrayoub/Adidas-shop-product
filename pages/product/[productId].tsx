import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { GetStaticProps, GetStaticPropsContext } from 'next'

import { Header } from '../../components/Header/Header'
import { ProductInfo } from '../../components/ProductInfo/ProductInfo'
import { ProductDetailsCover } from '../../components/Cover/Cover'
import { PageSEO } from '../../components/PageSEO/PageSEO'
import { ProductReviews } from '../../components/ProductReviews/ProductReviews'
import { Product } from '../../utils/types'

interface ProductDetailsProps {
  product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false })

  if (!product) return null

  return (
    <Flex direction="column">
      <PageSEO product={product} />
      <Header showLogoCenter />
      <ProductDetailsCover product={product}>
        {!isSmallScreen && <ProductInfo product={product} />}
      </ProductDetailsCover>
      {isSmallScreen && <ProductInfo product={product} />}
      <ProductReviews product={product} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const productId = ctx.params.productId
  const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API}/product/${productId}`)
  const product = (await res.json()) as Array<Product>

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: { product },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // I added this here for a silly check in case the API doesnt list the product as available anymore.
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API}/product`)
  const products = (await res.json()) as Array<Product>

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }))

  return { paths, fallback: false }
}

export default ProductDetails
