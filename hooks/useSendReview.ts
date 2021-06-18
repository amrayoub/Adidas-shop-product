import { useMutation } from 'react-query'

type useSendReviewsParams = {
  rating: string
  productId: string
  text: string
}

const postReview = async ({ rating, productId, text }: useSendReviewsParams) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_INTERNAl_REVIEW_API}/reviews/${productId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-language': 'en-US',
    },
    body: JSON.stringify({
      locale: 'EN-us',
      productId,
      rating: parseInt(rating),
      text,
    }),
  })

  if (res.status != 201) {
    throw new Error('Failed to post!')
  }

  return await res.json()
}

export const useSendReview = () => {
  return useMutation((review: useSendReviewsParams) => postReview(review))
}
