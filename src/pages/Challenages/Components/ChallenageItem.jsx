


export default function ChallenageItem ({item}) {


    return (
        <tr key={item.id} className="h-10 border-b-2">
            <td className="font-noto text-center text-sm">
                {item.status}

            </td>
            <td className="font-noto text-center text-sm">
                {item.title}

            </td>
            <td className="font-noto text-center text-sm">
                {item.category}

            </td>
            <td className="font-noto text-center text-sm">
                {item.difficulty}

            </td>
            <td className="font-noto text-center text-sm">
                {item.solutionRate}

            </td>
        </tr>
    )
}