import { useFilter } from '@/context/searchContext'
import React from 'react'
const SearchBar = () => {
    const { search, setSearch } = useFilter()
    return (
        <input
            type="search"
            name='search bar'
            className="w-[300px] lg:w-[500px] outline-none border border-neutral-500 p-4 rounded-2xl"
            placeholder="search feed"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}

export default SearchBar
