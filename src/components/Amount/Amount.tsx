import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";
import { RootState } from "../../redux/store";



const Counter: React.FC = () => {
    const amount = useSelector((state: RootState) => state.counter.amount);
    const dispatch = useDispatch();
    return(
        <>
        <p>Amount: {amount}</p>
        <button onClick={() => dispatch(increment())} >Increment</button>
        <button onClick={() => dispatch(decrement())} >Decrement</button>
        </>
    );
};

export default Counter;