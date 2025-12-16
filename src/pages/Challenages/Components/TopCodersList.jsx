import topCoders from "../../../data/topCoders";
import TopCodersItems from "./TopCodersItem";



export default function TopCodersList () {

    return (
        <div className="flex flex-col gap-2">
            {topCoders.map((item) => <TopCodersItems item={item} />)}
        </div>
    )
}