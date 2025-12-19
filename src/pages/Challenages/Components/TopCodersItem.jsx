


export default function TopCodersItems ({ item }) {

    return (
        <div className="h-14 flex flex-row items-center justify-between px-2 drop-shadow-lg bg-cla-white dark:bg-cla-primary rounded-lg">
            <div className="flex flex-row gap-2 items-center">
                <img src={item.avatar_url} alt="profile-pic" className="size-10 rounded-full overflow-hidden" />
                <p className="text-sm font-noto ">{item.first_name + " " + item.last_name}</p>
            </div>
            <p className="font-noto text-xs text-slate-600  dark:text-white">Score: {item.score}</p>

        </div>
    )
}