import NewToDos from './NewToDos';
import AddToDos from './AddToDos';
//import DisplayToDos from './DisplayToDos';
import { useState } from "react"

export default function ToDos() {
    const [userInput, setUserInput] = useState('')




    return (
        <>
        <NewToDos userInput={userInput} setUserInput={setUserInput}/>
        <AddToDos userInput={userInput}  setUserInput={setUserInput} />

        </>
    )
}