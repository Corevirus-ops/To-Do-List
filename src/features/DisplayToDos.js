
export default function DisplayToDos({toDos, setToDos}) {
    function removeToDo(index) {
        setToDos(prevArray => 
            prevArray.filter((_, slot) => slot !== index)
        )

    }

    return (
        <>
        {toDos.map((element, index) => 
        <>
        <button type="button" onClick={() => removeToDo(index)}>-</button>
        <h3 key={index}>{element}</h3>
        </>
            
        ) }
        </>
    )

}