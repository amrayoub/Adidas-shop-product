import Link from 'next/link'
import { Flex, SimpleGrid, Heading, Text, Image, Center, Box } from '@chakra-ui/react'

import { Product } from '../../utils/types'

interface ProductListProps {
  products: Array<Product>
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Flex
        direction="column"
        data-testid={product.id}
        position="relative"
        width={{ base: '100%', md: '380px' }}
        mb={10}
        cursor="pointer"
        transition="all 0.6s linear"
        _after={{
          position: 'absolute',
          zIndex: '-1',
          width: '100%',
          height: '100%',
          content: `''`,
          boxShadow: '0px 0px 0px 2px black',
          opacity: 0,
          transition: 'opacity 0.3s linear',
        }}
        sx={{
          '&:hover::after': {
            opacity: 1,
          },
        }}
      >
        <Box overflow="hidden">
          <Image
            alt={product.name}
            src={product.imgUrl}
            height={{ base: '100vw', md: '380px' }}
            transform={'scale(1)'}
            _hover={{ transform: 'scale(1.1)' }}
            transition={'transform 0.3s ease'}
          />
        </Box>
        <Flex p={2} mb={2} direction="column">
          <Heading mt={2}>{product.name}</Heading>
          <Text textTransform="uppercase" fontSize="sm" fontWeight="200">
            {product.description}
          </Text>
        </Flex>

        <Text
          fontSize={{ base: 'xl', md: 'lg' }}
          rounded="md"
          position="absolute"
          top={3}
          right={3}
          px={2}
          bg="white"
        >
          {product.currency} {''}
          {product.price}
        </Text>
      </Flex>
    </Link>
  )
}

const ProductList = ({ products }: ProductListProps) => {
  if (!products) return null

  return (
    <Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 3, '2xl': 4 }} spacing={1}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Center>
  )
}

export { ProductList }
