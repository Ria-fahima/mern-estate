import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='shadow-md '>
        <div className='flex justify-between items-center max-w-6xl mx-auto 
        p-3'>
            <Link to="/">
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-red-800'>Real</span>
                    <span className='text-red-600'>Estate</span>
                </h1>
            </Link>
            <form className='bg-red-50 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder='Search...' 
                className='bg-transparent focus:outline-none
                w-24 sm:w-64'/>
                <FaSearch className='text-slate-500'/>
            </form>
            <ul className='flex gap-4 text-red-800'>
                <Link to='/'>
                    <li className='hidden sm:inline hover:underline cursor-pointer'>
                        Home
                    </li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline hover:underline cursor-pointer'>
                        About
                    </li>
                </Link>
                <Link to='/sign-in'>
                    <li className='hover:underline cursor-pointer'>
                        SignIn
                    </li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
