import { Container, Text } from '@nextui-org/react'
import Link from 'next/link'

export function Header () {
  return (
    <header className='flex justify-between items-center p-4 max-w-xl m-auto'>
      <h1 className='font-bold '>
        next<span className='font-light'>xkcd</span>{' '}
      </h1>

      <nav>
        <ul className='flex flex-row gap-6 text-sm font-semibold'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
