type tasks =
    {
        id: number
        title: string
        description: string
        isCompleted: boolean
    }

export function Tasks({props}: { props: tasks[] }) {
    console.log({props});
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md">
            {props.map((task) => <li key={task.id } className={"bg-slate-400 text-white p-2 rounded-md"}>{task.title}</li>)}
        </ul>
    )
}