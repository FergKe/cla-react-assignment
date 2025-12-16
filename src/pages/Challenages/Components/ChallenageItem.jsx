import { BsCheck2Circle } from "react-icons/bs";
import { FaRegHourglass } from "react-icons/fa";

export default function ChallenageItem ({item}) {
    const iconSelection = (status) => {
        if (status === "Attempted") {
            return (
                <div className="flex items-center justify-center">
                    <FaRegHourglass className="size-5" color="orange" />

                </div>
            )
        } else {
            return (
                <div className="flex items-center justify-center">
                    <BsCheck2Circle className="size-5" color="green" />
                </div>
            )
        }
    };

    const difficultyBox = (difficulty) => {

        if (difficulty === "Hard") {
            return (
                <p className="text-white bg-red-500 rounded-full py-1">{difficulty}</p>
            )
        } else if (difficulty === "Moderate") {
            return (
                <p className="text-white bg-orange-500 rounded-full py-1">{difficulty}</p>
            )
        } else {
            return (
                <p className="text-white bg-green-500 rounded-full py-1">{difficulty}</p>
            )
        }
    }

    return (
        <tr key={item.id} className="h-10 border-b-2">
            <td className="">
                    {iconSelection(item.status)}
            </td>
            <td className="font-noto text-center text-sm">
                {item.title}

            </td>
            <td className="font-noto text-center text-sm">
                {item.category}

            </td>
            <td className="font-noto text-center text-sm py-2 flex justify-center">
                <div className="w-24">
                    {difficultyBox(item.difficulty)}

                </div>

            </td>
            <td className="font-noto text-center text-sm">
                {item.solutionRate}

            </td>
        </tr>
    )
}