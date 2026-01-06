import {useNavigate, useSearchParams} from "react-router-dom";
import {ChevronLeftIcon} from "lucide-react";

export function TasksPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const title = searchParams.get('title')
    const description = searchParams.get('description')
    return <div className="h-screen w-screen bg-slate-500 p-6">
        <div className="flex justify-center relative">
            <button onClick={() => navigate(-1) } className="absolute left-0 top-0 bottom-0 mb-6">
                <ChevronLeftIcon/>
            </button>
            <h1 className="text-3xl text-slate-100 font-bold text-center ">Task Details</h1>
        </div>
        <div className="w-full max-w-md mx-auto bg-slate-200 p-6 rounded-md space-y-4 text-slate-100">
            <div className="flex flex-col w-full gap-4 text-slate-200 rounded-md p-4">
                <h1 className="text-2xl text-slate-600 font-bold text-center ">{title}</h1>
                <p className="text-slate-600 text-xl">{description}</p>
            </div>
        </div>
    </div>;
}

