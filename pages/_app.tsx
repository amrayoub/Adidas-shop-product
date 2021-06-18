import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { AnimateSharedLayout } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

const queryClient = new QueryClient()

const theme = extendTheme({
  fonts: {
    heading: 'Ropa Sans,Helvetica, Arial, sans-serif',
    body: 'Ropa Sans,Helvetica, Arial, sans-serif',
  },
})

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimateSharedLayout>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </AnimateSharedLayout>
    </ChakraProvider>
  )
}

export default App
