import './App.css'
import {AddTask} from "./components/AddTask.tsx";
import {Tasks} from "./components/Tasks.tsx";
import {useState} from "react";


function App() {

    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                title: "Estudar Programação",
                description: "Estudar React e TypeScript",
                isCompleted: false,
            },
            {
                id: 2,
                title: "Fazer Exercícios",
                description: "Praticar exercícios de lógica de programação",
                isCompleted: true,
            },
            {
                id: 3,
                title: "Ler um Livro",
                description: "Ler um livro sobre desenvolvimento pessoal",
                isCompleted: false,

            }
        ]
    );

    return (
        <div className={"w-screen h-screen bg-slate-500 flex justify-center p-6"}>
            <div className={"w-[500px] "}>
                <h1 className={"text-3xl text-slate-100 text-center"}>
                    Gerenciador de Tarefas
                </h1>
                <Tasks props={tasks} />
                <AddTask/>
            </div>
        </div>
    )
}

export default App
