const { withSentryConfig } = require('@sentry/nextjs')

const productLocalApi = 'http://localhost:3001'
const productProdApi = 'https://adidas-product-review.vercel.app/api'

// Proxy to local nextJS Dynamic API Routes to avoid CORS issues.
const externalReviewApi = 'http://localhost:3002'
const reviewLocalApi = 'http://localhost:3030/api'

const NEXT_PUBLIC_PRODUCT_API =
  process.env.NODE_ENV === 'development' ? productLocalApi : productProdApi
const NEXT_PUBLIC_EXTERNAl_REVIEW_API =
  process.env.NODE_ENV === 'development' ? externalReviewApi : productProdApi
const NEXT_PUBLIC_INTERNAl_REVIEW_API =
  process.env.NODE_ENV === 'development' ? reviewLocalApi : productProdApi

const moduleExports = {
  env: {
    NEXT_PUBLIC_PRODUCT_API,
    NEXT_PUBLIC_EXTERNAl_REVIEW_API,
    NEXT_PUBLIC_INTERNAl_REVIEW_API,
  },
}

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
