import NewToDos from './NewToDos';
import AddToDos from './AddToDos';
import DisplayToDos from './DisplayToDos';
import { useEffect, useState } from "react"

export default function ToDos() {
    const [userInput, setUserInput] = useState('')
    const [toDos, setToDos] = useState( JSON.parse(localStorage.getItem('toDos')) || [])

    useEffect(() => {
        console.log(toDos)
        localStorage.setItem('toDos', JSON.stringify(toDos));

    }, [toDos])

    return (
        <>
        <NewToDos userInput={userInput} setUserInput={setUserInput}/>
        <AddToDos userInput={userInput} setToDos={setToDos} setUserInput={setUserInput} />
        <DisplayToDos toDos={toDos} setToDos={setToDos} userInput={userInput} setUserInput={setUserInput}  />
        </>
    )
}