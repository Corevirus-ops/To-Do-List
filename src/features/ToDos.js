import NewToDos from './NewToDos';
import AddToDos from './AddToDos';
import DisplayToDos from './DisplayToDos';
import { useState } from "react";
import './toDo.css';

export default function ToDos() {
    const [userInput, setUserInput] = useState('');




    return (
        <div className='toDos flex flex-settings flex-column'>
        <section className='newToDos flex flex-settings'>
        <NewToDos userInput={userInput} setUserInput={setUserInput}/>
        <AddToDos userInput={userInput}  setUserInput={setUserInput} />
        </section>
        <br/>
        <DisplayToDos  userInput={userInput} setUserInput={setUserInput}  />
        </div>
    )
}