import './App.css'
import {AddTask} from "./components/AddTask.tsx";
import {Tasks} from "./components/tasks.tsx";


function App() {

    return (
        <>
                <h1>
                    Gerenciador de Tarefas
                </h1>
            <AddTask />
            <Tasks />
        </>
    )
}

export default App
