'use client'

import { useRouter } from 'next/navigation'
import { useState, FormEvent } from 'react'

export default function SearchBar() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        router.push(`result/${search}`)
        setSearch('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder='search'
                className='rounded-lg focus:outline-slate-500 px-2 py-1'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
        </form>
    )
}
