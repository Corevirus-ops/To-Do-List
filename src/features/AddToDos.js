

export default function AddToDos({userInput, setToDos}) {
    function addToDo() {
        setToDos(prevArray => 
        [...prevArray, userInput]
        )
    }


    return (
        <>
        <button type="button" onClick={addToDo} >+</button>
        </>
    )
}