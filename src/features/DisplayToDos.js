
export default function DisplayToDos({toDos, setToDos, userInput, setUserInput}) {
    function removeToDo(index) {
        setToDos(prevArray => 
            prevArray.filter((_, slot) => slot !== index)
        )

    }
            function editToDo(index) {
            setToDos(prevArray => {
                if (!prevArray.includes(userInput)) {
                    return prevArray.map((item, i) => i === index ? userInput : item)
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
        <>
        <button type="button" onClick={() => removeToDo(index)}>-</button>
        <button type="button" onClick={() => editToDo(index)}>Edit</button>
        <h3 key={index}>{element}</h3>
        </>
            
        ) }
        </>
    )

}