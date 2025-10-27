import {useDispatch, useSelector } from "react-redux";
import { getToDos, removeToDo, editToDoName, editToDoIsChecked} from "./toDoSlice";

export default function DisplayToDos({toDos, setToDos, userInput, setUserInput}) {
    const state = useSelector(getToDos);
    const dispatch = useDispatch();

    function removeToDoItem(name) {
        dispatch(removeToDo({name: name}))
    }

    function editToDoItemName(index) {
    if (state.some(item => item.name === userInput)) {
    
    alert('Item already exist')
    } else {
        dispatch(editToDoName({name: userInput, index: index}))
    }
    }



    return (
        <>
        {state.map((item, index) => 
        <div key={index}>
            <input type="checkbox" />
        <button type="button" onClick={() => removeToDoItem(item.name)}>-</button>
        <button type="button" onClick={() => editToDoItemName(index)}>Edit</button>
        <h3>{item.name}</h3>
        </div>
            
        ) }
        </>
    )

}