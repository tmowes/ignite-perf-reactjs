import { Flex } from '@chakra-ui/react'

import { ProductItem } from '../ProductItem'
import { SearchResultsProps } from './types'

export const SearchResults = (props: SearchResultsProps) => {
  const { results } = props

  return (
    <Flex direction="column">
      {results.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Flex>
  )
}
