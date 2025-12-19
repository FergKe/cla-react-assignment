import trendingCategories from '../../../data/trendingCategories';

export default function TrendingCatagories () {

    return (
        <div className='flex flex-row flex-wrap gap-2 bg-cla-white dark:bg-cla-primary p-3 rounded-lg drop-shadow-md mb-6'>
            {trendingCategories.map((category) => 
                <div className='bg-slate-200 text-black h-8 px-3 flex flex-row gap-2 rounded-full items-center'>
                    <p>{category.category}</p>
                    <div className='bg-emerald-400 p-1 rounded-full text-white text-xs'>
                        <p>{category.count}</p>
                    </div>
                </div>
            )}
        </div>
    )
}