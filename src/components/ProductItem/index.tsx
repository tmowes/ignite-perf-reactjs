import { memo } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { ProductItemProps } from './types'

const ProductComponent = (props: ProductItemProps) => {
  const { product } = props

  return (
    <Flex align="center" maxW="1200px" mx="auto">
      <Text>{product.title}</Text>
      <Text mx="2">-</Text>
      <Text>{product.price}</Text>
    </Flex>
  )
}

export const ProductItem = memo(ProductComponent, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product)
)
