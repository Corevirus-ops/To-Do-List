
import {createSlice} from '@reduxjs/toolkit';

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        toDo: []
    },
    reducers: {
        addToDo: (state, action) => {
                state.toDo.push(            
            {   name: action.payload.name,
                isChecked: false,
            }) 

        },
        removeToDo: (state, action) => {
            state.toDo = state.toDo.filter(item => item.name !== action.payload.name);
        },
        editToDoName: (state, action) => {
            state.toDo[action.payload.index].name = action.payload.name
        },
        editToDoIsChecked: (state, action) => {
            state.toDo = state.toDo.map(item => item.name === action.payload.index? {
                isChecked: action.payload.checked,

            } : item);
        }
    }
})


export const {addToDo, removeToDo, editToDoName, editToDoIsChecked} = toDoSlice.actions;
export const getToDos = (state) => state.toDo.toDo;
export default toDoSlice.reducer; 