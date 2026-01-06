import {CheckIcon, ChevronRightIcon, TrashIcon} from "lucide-react";
import {useNavigate} from "react-router-dom";
import Button from "./Button.tsx";

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
    const navigate = useNavigate()

    function onSeeDetailsClick(task: tasks) {
        const query = new URLSearchParams()
        query.set('title', task.title)
        query.set('description', task.description)
        navigate(`/tasks?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
                            task.isCompleted && "line-through"
                        }`}
                    >
                        {task.isCompleted && <CheckIcon />}
                        {task.title}
                    </button>
                    <Button onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRightIcon/>
                    </Button>

                    <Button onClick={() => onDeleteTaskClick(task.id)}>
                        <TrashIcon/>
                    </Button>
                </li>
            ))}
        </ul>
    )
}
