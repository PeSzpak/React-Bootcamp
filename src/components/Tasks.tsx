import {ChevronRightIcon, TrashIcon} from "lucide-react";

type tasks =
    {
        id: string
        title: string
        description: string
        isCompleted: boolean
    }

type TasksProps = {
    tasks: tasks[]
    onTaskClick: (taskId: string) => void
    onDeleteTaskClick: (taskId: string) => void
}

export function Tasks({tasks, onTaskClick, onDeleteTaskClick}: TasksProps) {
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => onTaskClick(task.id)}
                            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md 
                            ${task.isCompleted ? 'line-through' : ''}`}>
                        {task.title}
                    </button>
                    <button className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon/>
                    </button>
                    <button onClick={() => onDeleteTaskClick(task.id)}
                            className="bg-slate-400 p-2 rounded-md text-white">
                        <TrashIcon/>
                    </button>
                </li>
            ))}
        </ul>
    )
}
