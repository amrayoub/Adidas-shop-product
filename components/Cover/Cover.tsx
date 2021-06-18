import { ReactNode, CSSProperties } from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'

import { Product } from '../../utils/types'
import { BrandHeading } from '../../components/Heading/Heading'

const HomeCover = () => {
  const commonCoverStyle = {
    width: '100%',
    height: '300px',
  }

  return (
    <Flex
      as="header"
      style={{
        ...commonCoverStyle,
      }}
      position="relative"
      align="center"
      justify="center"
      mb={10}
    >
      <Box
        as="video"
        style={{
          objectFit: 'cover',
          ...commonCoverStyle,
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        }}
        playsInline
        autoPlay
        muted
        loop
        background="#cbd5d4"
        rounded={{ base: 'none', md: 'lg' }}
        title="Clouds of paint underwater"
        maxWidth="1530px"
      >
      </Box>

      <BrandHeading
        zIndex={2}
        color="white"
        textShadow=" -6px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
        ml={{ base: 4, md: 0 }}
        maxWidth={{ base: '200px', md: 'initial' }}
      >
        Adidas Shop
      </BrandHeading>
    </Flex>
  )
}

interface ProductDetailsCoverProps {
  children: ReactNode
  product: Product
}

const ProductDetailsCover = ({ product, children }: ProductDetailsCoverProps) => {
  const imageReplicaStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    filter: 'grayscale(1)',
    width: '200px',
    userSelect: 'none',
    WebkitUserDrag: 'none',
  } as CSSProperties

  return (
    <Flex overflow="hidden" position="relative">
      <Image
        display={{ base: 'none', xl: 'block' }}
        style={{ ...imageReplicaStyles, left: '30%' }}
        src={`${product.imgUrl}`}
      />
      <Image
        display={{ base: 'none', xl: 'block' }}
        style={{ ...imageReplicaStyles, left: '70%' }}
        src={`${product.imgUrl}`}
      />
      <Flex
        role="img"
        aria-label={product.name}
        width="full"
        height="400px"
        background={`url(${product.imgUrl}) no-repeat`}
        backgroundSize="500px"
        backgroundColor="#eceef0"
        backgroundPosition="center"
      >
        {children}
      </Flex>
    </Flex>
  )
}

export { HomeCover, ProductDetailsCover }
