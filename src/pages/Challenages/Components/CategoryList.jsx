import categoriesArray from "../../../data/categoriesArray"
import Category from "./Category"
import useCategorySelection from "../../../Stores/useCategorySelection"
import { useState } from "react"

export default function CategoryList () {
    const resetList = useCategorySelection((state) => state.resetList)

    const [active, setactive] = useState(false);

    const hanldeClick = () => {
        
    }

    return (
        <div className="flex flex-row gap-3 mb-6">
            <button onClick={() => resetList()} className="h-7 px-3 bg-slate-200 rounded-full hover:bg-cla-primary hover:text-white transition-all hover:-translate-y-1">All</button>
            {categoriesArray.map((c) => <Category categoryName={c} />)}
            
        </div>
    )
}