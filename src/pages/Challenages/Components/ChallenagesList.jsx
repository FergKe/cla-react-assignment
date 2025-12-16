import challenagesArray from '../../../data/challenagesArray'
import ChallenageItem from './challenageItem'

export default function ChallenagesList () {

    return (
        <div className='h-full flex-1 min-h-0 overflow-y-auto'>
            <table className='w-full border-collapse '>
                <thead>
                    <tr className='bg-slate-200 h-10'>
                        <th className='font-noto text-center text-sm font-semibold'>Status</th>
                        <th className='font-noto text-center text-sm font-semibold'>Title</th>
                        <th className='font-noto text-center text-sm font-semibold'>Catagory</th>
                        <th className='font-noto text-center text-sm font-semibold'>Difficulty</th>
                        <th className='font-noto text-center text-sm font-semibold'>Solution Rate</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {challenagesArray.map((challenage) => <ChallenageItem item={challenage} key={challenage.id} />)}
                </tbody>
            </table>
        </div>
    )
}