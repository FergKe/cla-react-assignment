

export default function LeaderboardItem ({ item }){
    return (
        <tr className="h-10 border-b-2 bg-cla-white dark:bg-cla-primary dark:border-white">
            <td className="font-noto text-center text-sm">
                {item.rank}
            </td>
            <td className="font-noto text-center text-sm">
                {item.first_name + " " + item.last_name}
            </td>
            <td className="font-noto text-center text-sm">
                {item.score}
            </td>
            <td className="font-noto text-center text-sm">
                {item.solved_challenges}
            </td>
        </tr>
    )
}