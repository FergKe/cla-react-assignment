import leaderboardArray from "../../data/leaderboardArray"
import LeaderboardItem from "./Components/leaderboardItem"

export default function Leaderboard () {

    return (
        <section className="px-8 pt-6 flex-col ">
            <h3 className="text-3xl font-noto mb-3">LeaderBoard</h3>
            <div className='bg-cla-white flex-1 min-h-0 overflow-y-auto shadow-md rounded-xl'>
                <table className='w-full table-fixed'>
                    <thead>
                        <tr className='bg-slate-200 h-10 sticky top-0'>
                            <th className='font-noto text-center text-sm font-semibold'>Rank</th>
                            <th className='font-noto text-center text-sm font-semibold'>Name</th>
                            <th className='font-noto text-center text-sm font-semibold'>Score</th>
                            <th className='font-noto text-center text-sm font-semibold'>Solved Challenages</th>
                        </tr>
                    </thead>
                        <tbody className=''>
                            {leaderboardArray.map((item) => <LeaderboardItem item={item} key={item.rank} />)}
                        </tbody>
                </table>

            </div>
            
        </section>
    )
}