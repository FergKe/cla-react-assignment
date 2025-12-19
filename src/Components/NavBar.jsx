import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import arrow from '../assets/arrow.svg'
import { useState } from 'react'
import useDarkMode from '../Stores/useDarkMode'


export default function NavBar () {
    const isDarkMode = useDarkMode((state) => state.isDarkMode)
    const toggleDarkMode = useDarkMode((state) => state.toggleDarkMode)
    const [dropDown, setDropDown] = useState(false)

    return (
        <nav className="bg-slate-200 dark:bg-cla-nav-bg-dark dark:text-white px-8 h-12 flex flex-row items-center justify-between sticky top-0 z-50 transition-all">
            <div id='nav-left-side' className='flex flex-row gap-4 items-center'>
                <div className='flex flex-row gap-2 items-center'>
                    <img src={logo} alt="logo.svg" className='size-8' />
                    <p className='font-noto font-medium '>
                        CodeCla
                    </p>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <Link to='/challenages' className='font-medium font-noto hover:-translate-y-1 transition-transform'>Challenages</Link>
                    <Link to='/leaderboard' className='font-medium font-noto hover:-translate-y-1 transition-transform'>Leaderboard</Link>
                </div>
            </div>

            <div id='nav-right-side' className='flex flex-row items-center gap-2'>
                <div onClick={() => setDropDown(!dropDown)} className='bg-slate-500 size-8 rounded-full cursor-pointer'></div>
                <p onClick={() => setDropDown(!dropDown)} className='font-noto font-medium cursor-pointer'>Users Name</p>
                <p 
                    onClick={() => toggleDarkMode()}
                    className='text-xl cursor-pointer'
                >
                    {`${isDarkMode ? '☽' : '☀'}`}
                </p>

            </div>

            <div id="drop-down"
                className={`${dropDown ? "" : "hidden"} bg-white rounded-xl absolute top-[3.2rem] right-[10.3rem] w-48 px-2 py-2`}
                onMouseLeave={() => setDropDown(false)}
            >
                <ul>
                    <li className='py-1 hover:bg-cla-white px-4 rounded-xl'>
                        Profile
                    </li>
                    <li className='py-1 hover:bg-cla-white px-4 rounded-xl'>
                        Logout

                    </li>
                </ul>
            </div>


        </nav>
    )
}