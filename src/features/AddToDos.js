

export default function AddToDos({userInput, setToDos, setUserInput}) {
    function addToDo() {

//prevents re-adding a duplicate to do.
setToDos(prevArray => {
  if (prevArray.includes(userInput)) {
    alert("This item already exists!");
    return prevArray;
  }
  setUserInput('');
  return [...prevArray, userInput];
});
           
    }
 


    return (
        <>
        <button type="button" onClick={addToDo} >+</button>
        </>
    )
}