import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import arrow from '../assets/arrow.svg'


export default function NavBar () {

    return (
        <nav className="bg-slate-200 px-8 h-12 flex flex-row items-center justify-between sticky top-0">
            <div id='nav-left-side' className='flex flex-row gap-4 items-center'>
                <div className='flex flex-row gap-2 items-center'>
                    <img src={logo} alt="logo.svg" className='size-8' />
                    <p className='font-noto font-medium '>
                        CodeCla
                    </p>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <Link to='/challenages' className='font-medium font-noto hover:-translate-y-1 transition-all'>Challenages</Link>
                    <Link to='/leaderboard' className='font-medium font-noto hover:-translate-y-1 transition-all'>Leaderboard</Link>
                </div>
            </div>

            <div id='nav-right-side' className='flex flex-row items-center gap-2'>
                <div className='bg-slate-500 size-8 rounded-full'></div>
                <p className='font-noto font-medium'>Users Name</p>
                <img src={arrow} alt="" className='size-6 rotate-180' />

            </div>


        </nav>
    )
}