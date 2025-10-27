import NewToDos from './NewToDos';
import AddToDos from './AddToDos';
import DisplayToDos from './DisplayToDos';
import { useState, useEffect } from "react";
import { useSelector} from 'react-redux';
import { getToDos } from './toDoSlice';
import './toDo.css';

export default function ToDos() {
    const [userInput, setUserInput] = useState('');
    const state = useSelector(getToDos);

    useEffect(() => {
        localStorage.setItem('initialState', JSON.stringify(state));
    }, [state])




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