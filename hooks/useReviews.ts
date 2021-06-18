import { useQuery } from 'react-query'
import { QueryCacheKey } from '../utils/enums'
import { Review } from '../utils/types'

type useReviewsParams = {
  productId: string
}

export const useReviews = ({ productId }: useReviewsParams) =>
  useQuery<Review[], Error>(
    [QueryCacheKey.ProductDetail, { id: productId }],
    async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_INTERNAl_REVIEW_API}/reviews/${productId}`,
        {
          headers: {
            'Accept-language': 'en-US',
          },
        },
      )

      if (res.status != 200) {
        throw new Error('Failed to fetch!')
      }

      const reviews = await res.json()
      return reviews
    },
    {
      cacheTime: 5 * 60 * 1000,
      keepPreviousData: true,
    },
  )
