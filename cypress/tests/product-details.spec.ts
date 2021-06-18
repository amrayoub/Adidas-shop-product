import { generateProducts } from '../data/product'

describe('<ProductDetails />', () => {
  const product = generateProducts()[0]
  const productReview = {
    productId: product.id,
    locale: 'EN-us',
    rating: 5,
    text: 'Lovely product, with a soft inside! Fit well and delivery was fast',
  }

  it('should show specific product', () => {
    cy.visit(`/product/${product.id}`)

    cy.findByTestId(`${product.id}`).within(() => {
      cy.contains(`${product.price}`).should('exist')
      cy.findByText(`${product.name}`).should('exist')
      cy.findByText(`${product.description}`).should('exist')
    })
  })

  it('should show no product review', () => {
    cy.intercept('GET', `/api/reviews/${product.id}`, [])
    cy.visit(`/product/${product.id}`)

    cy.findByText('product reviews', { exact: false }).should('exist')
    cy.findByText('add review', { exact: false }).should('exist')
    cy.findByText('no reviews for this product yet.', { exact: false }).should('exist')
  })

  it('should show 1 product review', () => {
    cy.intercept('GET', `/api/reviews/${product.id}`, [productReview])
    cy.visit(`/product/${product.id}`)

    cy.findByText('Lovely product, with a soft inside! Fit well and delivery was fast', {
      exact: false,
    }).should('exist')
  })

  it('should show 2 products review', () => {
    const secondProductReview = {
      productId: product.id,
      locale: 'EN-us',
      rating: 2,
      text: 'Not so good, to be honest.',
    }

    cy.intercept('GET', `/api/reviews/${product.id}`, [productReview, secondProductReview])
    cy.visit(`/product/${product.id}`)

    cy.findByText('lovely product, with a soft inside! Fit well and delivery was fast', {
      exact: false,
    }).should('exist')
    cy.findByText('Not so good, to be honest', {
      exact: false,
    }).should('exist')
  })
})
