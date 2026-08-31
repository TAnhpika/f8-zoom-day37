import { memo } from "react";

const CounterDisplay = memo(({ count }) => {
    console.log("Render counter");
    
    return <div>Counter is ({count})</div>;
});

export default CounterDisplay;
