

export default function NewToDos({userInput, setUserInput}) {

    return (
        <>
        <label htmlFor="inputField">New To Do</label>
        <input id="inputField" type="text" min={1} value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        </>
    )

}