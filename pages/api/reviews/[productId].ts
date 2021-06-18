import reviews from '../../../cypress/fixtures/reviews.json'

export default async function handler(req, res) {
  const { productId } = req.query

  // Fake endpoints on prod just to return some data on Vercel version
  if (process.env.NODE_ENV === 'production') {
    if (req.method === 'POST') {
      return res.status(201).json(reviews[0])
    }

    return res.status(200).json(reviews)
  }

  if (req.method === 'POST') {
    return addReview(res, req, productId)
  }

  return getReview(res, productId)
}

const addReview = async (res, req, productId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EXTERNAl_REVIEW_API}/reviews/${productId}`,
    {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json',
        'Accept-language': 'en-US',
      },
    },
  )

  if (response.status != 201) {
    throw new Error('An error occurred: Failed to add review.')
  }

  const review = await response.json()
  return res.status(201).json(review)
}

const getReview = async (res, productId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EXTERNAl_REVIEW_API}/reviews/${productId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept-language': 'en-US',
      },
    },
  )

  if (!response.ok) {
    return res.status(500).json([])
  }

  const reviews = await response.json()
  return res.status(200).json(reviews)
}
