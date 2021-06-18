import { ReactNode, PropsWithChildren } from 'react'
import { Button, ButtonProps, Img } from '@chakra-ui/react'

interface BrandButtonProps extends PropsWithChildren<ButtonProps> {
  children: ReactNode
}

const BrandButton = ({ children, ...chakraProps }: BrandButtonProps) => {
  const pseudoElementsStyle = {
    content: `''`,
    display: 'block',
    position: 'absolute',
  }

  return (
    <Button
      bg="black"
      color="white"
      fontWeight={700}
      height="50px"
      px={5}
      width="300px"
      rounded="none"
      letterSpacing={'2px'}
      textTransform="uppercase"
      fontSize="md"
      display="flex"
      justifyContent="space-between"
      position="relative"
      _hover={{
        color: 'gray.300',
      }}
      rightIcon={
        <Img
          color="white"
          width={6}
          height={6}
          src="/icons/arrow-right-long.svg"
          alt="arrow right"
        />
      }
      _after={{
        ...pseudoElementsStyle,
        borderRight: '1px solid black',
        borderTop: '1px solid black',
        right: '-3px',
        top: '3px',
        height: '100%',
        width: '3px',
      }}
      _before={{
        ...pseudoElementsStyle,
        borderLeft: '1px solid black',
        borderBottom: '1px solid black',
        bottom: '-3px',
        left: '3px',
        height: '3px',
        width: '100%',
      }}
      {...chakraProps}
    >
      {children}
    </Button>
  )
}

export { BrandButton }
