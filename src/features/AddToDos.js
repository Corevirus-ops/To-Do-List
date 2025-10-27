

export default function AddToDos({userInput, setToDos, setUserInput}) {
    function addToDo() {


        setToDos(prevArray => 
           prevArray.includes(userInput) ?
        prevArray
        :   [...prevArray, userInput]
        )
           setUserInput('');
    }
 


    return (
        <>
        <button type="button" onClick={addToDo} >+</button>
        </>
    )
}