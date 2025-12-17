import useCategorySelection from "../../../Stores/useCategorySelection";

export default function Catagory ({categoryName}) {
    const changeCategory = useCategorySelection((state) => state.changeCategory)

    return (
        <button
        onClick={() => changeCategory(categoryName)}
        className="h-7 px-3 bg-slate-200 rounded-full hover:bg-cla-primary hover:text-white transition-all hover:-translate-y-1">{categoryName}</button>
    )
}