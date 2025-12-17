import challenagesArray from '../../../data/challenagesArray'
import ChallenageItem from './ChallenageItem'

export default function ChallenagesList () {

    return (
        <div className='bg-cla-white flex-1 min-h-0 overflow-y-auto rounded-xl drop-shadow-md'>
            <table className='w-full border-collapse'>
                <thead>
                    <tr className='bg-slate-200 h-10 sticky top-0'>
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