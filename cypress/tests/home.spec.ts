import { generateProducts } from '../data/product'

describe('<Home />', () => {
  it('should render initial home text', () => {
    cy.visit('/')
    cy.findByText(/adidas product review/i).should('exist')
  })

  it('should show all products', () => {
    const products = generateProducts()

    cy.visit('/')

    products.forEach((product) => {
      cy.findByTestId(`${product.id}`).should('exist')

      cy.findByTestId(`${product.id}`).within(() => {
        cy.findByAltText(`${product.name}`).should('exist')
        cy.findByRole('img').should('have.attr', 'src', product.imgUrl)

        cy.contains(`${product.price}`).should('exist')
        cy.findByText(`${product.name}`).should('exist')
        cy.findByText(`${product.description}`).should('exist')
      })
    })
  })
})
