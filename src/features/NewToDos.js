

export default function NewToDos({userInput, setUserInput}) {

    return (
        <div className="userInput">
        <label htmlFor="userInput">New To Do</label>
        <input id="userInput" type="text" min={1} value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        </div>
    )

}