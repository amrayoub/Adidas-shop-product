import { Skeleton, Center, Text, VStack, Flex, useToast, SimpleGrid } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

import { Product, Review } from '../../utils/types'
import { BrandHeading } from '../../components/Heading/Heading'
import { useReviews } from '../../hooks/useReviews'
import { useSendReview } from '../../hooks/useSendReview'
import { ProductReviewForm } from './ProductReviewForm'

interface ProductDetailsProps {
  product: Product
}

const ProductReviews = ({ product }: ProductDetailsProps) => {
  const toast = useToast()

  const { data, isLoading, isError, refetch } = useReviews({ productId: product.id })
  const mutation = useSendReview()

  const onSubmitReview = (rateValue: string, reviewValue: string) => {
    mutation.mutate(
      { productId: product.id, rating: rateValue, text: reviewValue },
      {
        onSuccess: () => {
          refetch()
          toast({
            title: `Review added with success`,
            status: 'success',
            isClosable: true,
          })
        },
        onError: () => {
          toast({
            title: mutation.error['message'],
            status: 'error',
            isClosable: true,
          })
        },
      },
    )
  }

  const ReviewHeader = ({ children }) => (
    <Center my={10} flexDirection="column">
      <BrandHeading mb={10} size="xl">
        Product Reviews
      </BrandHeading>

      {children}
    </Center>
  )

  const AddReview = () => (
    <Center my={10} flexDirection="column">
      <ProductReviewForm isLoading={mutation.isLoading} onSubmitReview={onSubmitReview} />
    </Center>
  )

  const Reviews = ({ reviews }) => (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 3, '2xl': 4 }} spacing={1}>
      {reviews.map((review: Review, index: number) => (
        <Flex
          key={review.text + index}
          p={5}
          border="1px solid"
          borderColor="gray.200"
          width="300px"
          direction="column"
        >
          <Flex>
            {new Array(review.rating).fill('').map((_, i) => (
              <StarIcon key={i} w={3} h={3} />
            ))}
          </Flex>

          <Text
            mt={2}
            maxWidth="300px"
            maxHeight="200px"
            overflowY={'scroll'}
            sx={{
              'scrollbar-width': 'none',
              '::-webkit-scrollbar': {
                width: 0,
              },
            }}
          >
            {review.text}
          </Text>
        </Flex>
      ))}
    </SimpleGrid>
  )

  if (isLoading) {
    return (
      <ReviewHeader>
        <VStack spacing={4}>
          <Skeleton width={{ base: '300px', md: '600px' }} height="110px" />
          <Skeleton width={{ base: '300px', md: '600px' }} height="110px" />
        </VStack>
      </ReviewHeader>
    )
  }

  if (isError) {
    return (
      <ReviewHeader>
        <Text>Something went wrong. Please try again.</Text>
      </ReviewHeader>
    )
  }

  if (!data.length) {
    return (
      <ReviewHeader>
        <Text>No reviews for this product yet.</Text>
        <AddReview />
      </ReviewHeader>
    )
  }

  return (
    <ReviewHeader>
      <Reviews reviews={data} />
      <AddReview />
    </ReviewHeader>
  )
}

export { ProductReviews }
