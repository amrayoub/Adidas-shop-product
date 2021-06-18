import { Flex } from '@chakra-ui/react'
import { GetStaticProps, GetStaticPropsContext } from 'next'

import { Header } from '../components/Header/Header'
import { HomeCover } from '../components/Cover/Cover'
import { ProductList } from '../components/ProductList/ProductList'
import { Product } from '../utils/types'

interface HomeProps {
  products: Array<Product>
}

const Home = (props: HomeProps) => {
  return (
    <Flex direction="column" px={{ base: 0, md: 10 }}>
      <Header showLogoCenter />
      <HomeCover />
      <ProductList products={props.products} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API}/product`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  const uniqueProducts = data.filter(
    (product: Product, index: number, arr: Array<Product>) =>
      arr.findIndex((t) => t.id === product.id) === index,
  )

  return {
    props: { products: uniqueProducts },
  }
}

export default Home
