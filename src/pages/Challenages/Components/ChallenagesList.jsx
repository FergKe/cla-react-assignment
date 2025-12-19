
import ChallenageItem from './ChallenageItem'
import useCategorySelection from '../../../Stores/useCategorySelection'

export default function ChallenagesList () {
    const list = useCategorySelection((state) => state.challenageList)

    return (
        <div className='flex-1 min-h-0 overflow-y-auto shadow-md rounded-xl'>
            <table className='w-full table-fixed'>
                <thead>
                    <tr className='bg-slate-200 dark:bg-cla-main-body h-10 sticky top-0 '>
                        <th className='font-noto text-center text-sm font-semibold transition-none'>Status</th>
                        <th className='font-noto text-center text-sm font-semibold transition-none'>Title</th>
                        <th className='font-noto text-center text-sm font-semibold transition-none'>Catagory</th>
                        <th className='font-noto text-center text-sm font-semibold transition-none'>Difficulty</th>
                        <th className='font-noto text-center text-sm font-semibold transition-none'>Solution Rate</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {list.map((challenage) => <ChallenageItem item={challenage} key={challenage.id} />)}
                </tbody>
            </table>
        </div>
    )
}