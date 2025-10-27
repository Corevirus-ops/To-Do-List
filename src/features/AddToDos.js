import {useDispatch, useSelector } from "react-redux";
import { addToDo, getToDos} from "./toDoSlice";

export default function AddToDos({userInput, setUserInput}) {
const state = useSelector(getToDos)
const dispatch = useDispatch();

function addItemToList() {
    if (state.some(item => item.name === userInput)) {
    
    alert('Item already exist')
    } else {
        dispatch(addToDo({name: userInput}))
        setUserInput('')
    }
}


console.log(state)

 


    return (
        <>
        <button type="button" onClick={addItemToList} >+</button>
        </>
    )
}