import NewToDos from './NewToDos';
import AddToDos from './AddToDos';
import { useEffect, useState } from "react"

export default function ToDos() {
    const [userInput, setUserInput] = useState('')
    const [toDos, setToDos] = useState([])

    useEffect(() => {
        console.log(toDos)

    }, [toDos])

    return (
        <>
        <h1>The Word is here</h1>
        <NewToDos userInput={userInput} setUserInput={setUserInput}/>
        <AddToDos userInput={userInput} setToDos={setToDos} setUserInput={setUserInput} />
        </>
    )
}