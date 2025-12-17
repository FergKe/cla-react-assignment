import CategoryList from "./Components/CategoryList";
import ChallenagesList from "./Components/ChallenagesList";
import TopCodersList from "./Components/TopCodersList";
import TrendingCategories from "./Components/TrendingCategories";


export default function Challenages () {

    return (
        <section className="h-full min-h-0 px-8 flex flex-row gap-3">
            <div className="flex-1 min-h-0 pb-8 pt-6 flex flex-col">
                <h3 className="text-3xl font-noto mb-3">Challenages</h3>
                <p className="font-noto font-medium mb-3">Select catagory</p>
                <CategoryList />
                <ChallenagesList />
            </div>

            <aside className="w-96 h-screen">
                <h5 className="text-xl font-noto text-center mb-4">Trending catagories</h5>
                <TrendingCategories />

                <h5 className="text-xl font-noto text-center mb-4">Top Coders</h5>
                <TopCodersList />
                
            </aside>

        </section>
    )
}