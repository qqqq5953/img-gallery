import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'

export default function Navbar() {
    return (
        <header className='bg-slate-800 '>
            <nav className='flex flex-col items-center justify-between gap-2 max-w-6xl mx-auto px-3 py-4 text-2xl sm:flex-row'>
                <h1 className='text-white'>
                    <Link href="/">Next Gallery</Link>
                </h1>
                <SearchBar />
            </nav>
        </header>
    )
}
