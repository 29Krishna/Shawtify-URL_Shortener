import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 h-25 bg-purple-700 text-white items-center">
        <Link href={"/"}><div className="logo text-4xl font-mono font-bold">
            Shawtify
        </div></Link>
        <ul className='flex space-x-4 justify-center items-center mr-12 gap-10'>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/about"}><li>About</li></Link>
            <Link href={"/shorten"}><li>Shorten</li></Link>
            <Link href={"/"}><li>Contact us</li></Link>
            <li className='flex space-x-4 justify-center items-center gap-5 '>
                <Link href={"/shorten"}><button className='rounded-lg bg-purple-400 shadow-lg font-bold p-2'>Try now</button></Link>
                <Link href={"/github"}><button className='rounded-lg bg-purple-400 shadow-lg font-bold p-2'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
