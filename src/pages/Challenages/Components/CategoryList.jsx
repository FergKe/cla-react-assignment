import categoriesArray from "../../../data/categoriesArray"
import Category from "./Category"

export default function CategoryList () { 

    return (
        <div className="flex flex-row gap-3 mb-6">
            {categoriesArray.map((c) => <Category categoryName={c} />)}
            
        </div>
    )
}