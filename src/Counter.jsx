import {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [isShow,setIsShow]=useState(true);
    const increaseHandler = () => {
        // setCounter(counter + 1);
        setCounter((counter) => counter + 1)
    }
    const increaseHandler3 = () => {
        setCounter((counter) => counter + 1)
        setCounter((counter) => counter + 1)
        setCounter((counter) => counter + 1)
    }
    const stopHandler = () => {
        setCounter(0);
    }
    const showHandler = ()=>{
        setIsShow(true);
    }
    const hideHandler = ()=>{
        setIsShow(false);
    }

    return (
        <>
            <button  onClick={showHandler}>Show</button>
            <button onClick={hideHandler}>Hide</button>
            <h1>Counter</h1>
            {isShow && (
                <div>
                    <p>{counter}</p>
                    <button onClick={increaseHandler}>Increase 1</button>
                    <button onClick={increaseHandler3}>Increase 3</button>
                    <button onClick={stopHandler}>Remove</button>
                </div>
            )}

        </>
    );
};
export default Counter;