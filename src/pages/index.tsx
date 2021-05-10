import { FormEvent, useState } from 'react'

import { Button, Flex, Input, Text } from '@chakra-ui/react'

import * as C from '~/components'
import { localApi } from '~/services'

export default function Dashboard() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()

    if (!search.trim()) return

    const { data } = await localApi.get('products', {
      params: {
        q: search,
      },
    })

    setResults(data)

    console.log({ data })
  }

  return (
    <>
      <C.MetaTags />
      <Flex w="100vw" h="100vh" direction="column">
        <Flex
          as="form"
          align="center"
          onSubmit={handleSearch}
          maxW="720px"
          mx="auto"
          my="8"
        >
          <Text>Search</Text>
          <Input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            mx="4"
          />
          <Button type="submit" colorScheme="blackAlpha">
            Buscar
          </Button>
        </Flex>
        <C.SearchResults results={results} />
      </Flex>
    </>
  )
}
