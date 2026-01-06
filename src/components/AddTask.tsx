import {useState, type SetStateAction} from "react";
import {Input} from "./Input.tsx";

type AddTasksProps = {
    onAddTaskSubmit: (title: string, description: string) => void
}

export function AddTask({onAddTaskSubmit}: AddTasksProps) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input
                type="text"
                placeholder={"Digite o Titulo da tarefa"}
                value={title}
                onChange={(event: { target: { value: SetStateAction<string>; }; }) => setTitle(event.target.value)}/>
            <Input
                type="text"
                placeholder={"Digite a descrição da tarefa"}
                value={description}
                onChange={(event: {
                    target: { value: SetStateAction<string>; };
                }) => setDescription(event.target.value)}/>
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