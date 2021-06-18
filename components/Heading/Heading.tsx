import { ReactNode, PropsWithChildren } from 'react'
import { Heading, HeadingProps } from '@chakra-ui/react'

interface BrandHeadingProps extends PropsWithChildren<HeadingProps> {
  children: ReactNode
}

const BrandHeading = ({ children, ...chakraProps }: BrandHeadingProps) => {
  return (
    <Heading
      size="3xl"
      textTransform="uppercase"
      letterSpacing="tight"
      fontStyle="italic"
      {...chakraProps}
    >
      {children}
    </Heading>
  )
}

export { BrandHeading }
