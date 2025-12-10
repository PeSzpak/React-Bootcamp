import './App.css'
import {Tasks} from "./components/tasks.tsx";
import {AddTask} from "./components/AddTask.tsx";

function App() {

    return (
        <>
            <h1 className={}>Gerenciador de Tarefas</h1>
            <Tasks />
            <AddTask />
        </>
    )
}

export default App
