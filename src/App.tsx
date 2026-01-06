import './App.css'
import {AddTask} from "./components/AddTask.tsx";
import {Tasks} from "./components/Tasks.tsx";
import {useEffect, useState} from "react";
import {v4} from "uuid";
import {Title} from "./components/Title.tsx";

function App() {

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks') || '[]')
    );
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',
                {
                    method: 'GET',
                });
            const data = await response.json()
            setTasks(data)
        }
        fetchTasks()
    }, []);

    function onTaskClick(taskId: string) {
        const newTasks = tasks.map((task: { id: string; isCompleted: any; }) => {
            if (task.id === taskId) {
                return {...task, isCompleted: !task.isCompleted}
            }
            return task;
        })
        setTasks(newTasks)
    }

    function onDeleteTaskClick(taskId: string) {
        const newTasks = tasks.filter((tasks: { id: string; }) => tasks.id !== taskId)
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
        <div className={"w-screen bg-slate-500 flex justify-center p-6"}>
            <div className={"w-[500px] space-y-6"}>
                <Title>ToDo List Manager</Title>
                <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
                <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
            </div>
        </div>
    )
}

export default App
