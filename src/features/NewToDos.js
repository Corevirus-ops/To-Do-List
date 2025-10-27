

export default function NewToDos({userInput, setUserInput}) {

    function setInput(target) {
        if (target.length > 20) return
        setUserInput(target)
    }

    return (
        <div className="userInput">
        <label htmlFor="userInput">New To Do</label>
        <input id="userInput" type="text" value={userInput} onChange={(e) => setInput(e.target.value)} />
        </div>
    )

}