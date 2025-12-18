import useCategorySelection from "../../../Stores/useCategorySelection";

export default function Catagory ({ categoryName, active, setActive }) {
    const changeCategory = useCategorySelection((state) => state.changeCategory)

    return (
        <button
        onClick={() => {
            changeCategory(categoryName);
            setActive(categoryName);
        }}
        className={` ${active === categoryName ? "bg-cla-primary text-white" : "bg-slate-200"} h-7 px-3 rounded-full hover:bg-cla-primary hover:text-white transition-all hover:-translate-y-1`}>
            {categoryName}
        </button>
    )
}