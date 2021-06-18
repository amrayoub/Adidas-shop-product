import { Flex, Img } from '@chakra-ui/react'
import Link from 'next/link'

interface HeaderProps {
  showLogoCenter?: boolean
}

const Header = ({ showLogoCenter }: HeaderProps) => {
  return (
    <Flex
      height={20}
      align="center"
      justify={{ base: 'center', md: showLogoCenter ? 'center' : 'space-between' }}
    >
      <Link href="/">
        <Img cursor="pointer" alt="Adidas logo" width="70px" src={'/adidas-logo.svg'} />
      </Link>
    </Flex>
  )
}

export { Header }
