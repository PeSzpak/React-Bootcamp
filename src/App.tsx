import './App.css'
import {AddTask} from "./components/AddTask.tsx";
import {Tasks} from "./components/Tasks.tsx";
import {useState} from "react";
import {v4} from "uuid";


function App() {

    const [tasks, setTasks] = useState(
        [
            {
                id: '1',
                title: "Estudar Programação",
                description: "Estudar React e TypeScript",
                isCompleted: false,
            },
            {
                id: '2',
                title: "Fazer Exercícios",
                description: "Praticar exercícios de lógica de programação",
                isCompleted: true,
            },
            {
                id: '3',
                title: "Ler um Livro",
                description: "Ler um livro sobre desenvolvimento pessoal",
                isCompleted: false,

            }
        ]
    );

    function onTaskClick(taskId: string) {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {...task, isCompleted: !task.isCompleted}
            }
            return task;
        })
        setTasks(newTasks)
    }

    function onDeleteTaskClick(taskId: string) {
        const newTasks = tasks.filter(tasks => tasks.id !== taskId)
        setTasks(newTasks)
    }
     function onAddTaskSubmit(title: string, description: string) {
        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false,
        }
        setTasks([...tasks, newTask])
     }
    return (
        <div className={"w-screen h-screen bg-slate-500 flex justify-center p-6"}>
            <div className={"w-[500px] space-y-6"}>
                <h1 className={"text-3xl text-slate-100 text-center"}>
                    Gerenciador de Tarefas
                </h1>
                <AddTask onAddTaskSubmit={onAddTaskSubmit} />
                <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
            </div>
        </div>
    )
}

export default App
