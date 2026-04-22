import { decrement, increment, incrementByAmount } from "@/redux/counterSlice";
import type { AppDispatch, RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const [amount, setAmount] = useState<number>(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
      </div>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <button
        onClick={() => dispatch(incrementByAmount(amount))}
        style={{ marginLeft: "10px" }}
      >
        Add Amount
      </button>
    </div>
  );
};

export default Counter;
