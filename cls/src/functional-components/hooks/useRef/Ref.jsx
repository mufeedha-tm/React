// import { useEffect } from "react";
// import { useRef } from "react";
// import { useState } from "react";

// export default function RefExample() {
//  const [count,setCount] = useState(0);
//  const previousCount = useRef(0);

// useEffect(() =>{
//     previousCount.current = count;
// },[count]);

// return(
//     <div>
//         <p>Current Count : {count}</p>
//         <p>Previous Count : {previousCount.current}</p>

//         <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
// );
// }