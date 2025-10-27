export default function DisplayToDos({toDos, setToDos, userInput, setUserInput}) {

   
    function removeToDo(index) {
        setToDos(prevArray => 
            prevArray.filter((_, slot) => slot !== index)
        )
    }
    function editToDo(index) {
        setToDos(prevArray => {
            if (!prevArray.includes(userInput)) {
                const newArray = prevArray.map((item, i) => i === index ? userInput : item)
                setUserInput('')
                return newArray
            } else {
                alert("This item already exists!");
                return prevArray
            }
                }
                    )
                        }

    return (
        <>
        {toDos.map((element, index) => 
        <div key={index}>
            <input type="checkbox" />
        <button type="button" onClick={() => removeToDo(index)}>-</button>
        <button type="button" onClick={() => editToDo(index)}>Edit</button>
        <h3>{element}</h3>
        </div>
            
        ) }
        </>
    )

}