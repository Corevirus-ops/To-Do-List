import {useDispatch, useSelector } from "react-redux";
import { getToDos, removeToDo, editToDoName, editToDoIsChecked} from "./toDoSlice";

export default function DisplayToDos({userInput, setUserInput}) {
    const state = useSelector(getToDos);
    const dispatch = useDispatch();

    function removeToDoItem(name) {
        dispatch(removeToDo({name: name}))
    }

    function editToDoItemName(index) {
    if (state.some(item => item.name === userInput)) {
    
    alert('Item already exist')
    } else if (userInput) {
        dispatch(editToDoName({name: userInput, index: index}))
        setUserInput('')
    }
    }

    function editToDoItemIsChecked(index, target) {
        dispatch(editToDoIsChecked({index: index, isChecked: target}))
    }



    return (
        <div className="toDoList flex flex-settings flex-column">
        {state.map((item, index) => 
        <div key={index} className={item.isChecked ? 'flex completed' : 'toDoItemBox flex'} >
            <input className='toDoCheckBox' type="checkbox" checked={item.isChecked} onChange={(e) => editToDoItemIsChecked(index, e.target.checked)}/>
        <button className="btn btn-remove" type="button" onClick={() => removeToDoItem(item.name)}>-</button>
        <button className="btn btn-edit" type="button" onClick={() => editToDoItemName(index)}>Edit</button>
        <h3 className='toDoItemchecked' >{item.name}</h3>
        </div>
            
        ) }
        </div>
    )

}