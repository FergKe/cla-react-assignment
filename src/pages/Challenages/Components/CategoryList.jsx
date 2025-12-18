
import Category from "./Category"
import useCategorySelection from "../../../Stores/useCategorySelection"
import {  useState } from "react"

export default function CategoryList () {
    const [active, setActive] = useState("All");

    const resetList = useCategorySelection((state) => state.resetList)
    const list = useCategorySelection((state) => state.unchangedList)
    const getCategories = list.map((item) => item.category);
    const categories = [...new Set(getCategories)];

    return (
        <div className="flex flex-row gap-3 mb-6">
            <button onClick={() => {
                resetList();
                setActive("All")
                
                }}
                className={` ${active === "All" ? "bg-cla-primary text-white" : "bg-slate-200"} h-7 px-3 rounded-full hover:bg-cla-primary hover:text-white transition-all hover:-translate-y-1`}>All</button>
            {categories.map((c) => <Category categoryName={c} setActive={setActive} active={active} />)}
            
        </div>
    )
}