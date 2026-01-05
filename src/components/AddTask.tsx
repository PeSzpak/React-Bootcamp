import {useState} from "react";

type AddTasksProps = {
    onAddTaskSubmit: (title: string, description: string) => void
}

export function AddTask({onAddTaskSubmit}: AddTasksProps) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" placeholder={"Digite o Titulo da tarefa"}
                   className="border bg-slate-50 border-slate-300 outline-slate-400 px-4 py-2 rounded-md color text-slate-500"
                   value={title}
                   onChange={(event) => setTitle(event.target.value)}/>
            <input type="text" placeholder={"Digite a descrição da tarefa"}
                   className="border bg-slate-50 border-slate-300 outline-slate-400 px-4 py-2 rounded-md text-slate-500"
                   value={description}
                   onChange={(event) => setDescription(event.target.value)}/>
            <button onClick={() => {
                if (title.trim() === '' || description.trim() === '') {
                    return alert('Por favor, preencha todos os campos');
                }
                onAddTaskSubmit(title, description);
                setTitle('');
                setDescription('');
            }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar
            </button>
        </div>
    )
}