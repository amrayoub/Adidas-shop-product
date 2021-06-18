import { Flex, Image, Text, Heading } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link'

import { Product } from '../../utils/types'
import { BrandHeading } from '../../components/Heading/Heading'
interface ProductDetailsProps {
  product: Product
}

const ProductInfo = ({ product }: ProductDetailsProps) => {
  return (
    <Flex
      m={{ base: 5, md: 10 }}
      p={{ base: 1, md: 10 }}
      data-testid={product.id}
      align="space-between"
      justify="space-between"
      w="300px"
      zIndex={2}
      bg="white"
      direction="column"
    >
      <Flex direction="column">
        <Link href="/" passHref>
          <Flex align="center" cursor="pointer">
            <ArrowBackIcon w={4} h={4} />{' '}
            <Text fontSize="sm" ml={2}>
              Back
            </Text>
          </Flex>
        </Link>

        <BrandHeading mt={10} size="lg">
          {product.name}
        </BrandHeading>
        <Text>{product.description}</Text>
      </Flex>

      <Text width="max-content" fontSize="xl" fontWeight="bold">
        {product.currency} {product.price}
      </Text>
    </Flex>
  )
}

export { ProductInfo }
