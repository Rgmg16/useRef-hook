// Use of useRef to access DOM elements
// Example 1

// import React, {useRef} from 'react'
// function AccessDom() {
// const inputRef = useRef();
// const focusInput = () => {
// inputRef.current.focus();
// };
// return (
// <div>
// <input ref={inputRef} type="text" />
// <button onClick={focusInput}>Focus the input</button>
// </div>
// );
// }
// export default AccessDom

// Example 2

// import React, {useRef} from 'react'
// function AccessDomTwo() {
// const divRef = useRef();
// const toggleColor = () => {
// const currentColor = divRef.current.style.backgroundColor;
// divRef.current.style.backgroundColor = currentColor === 'green' ? 'navy' : 'green';
// };
// return (
// <div>
// <div ref={divRef} style={{ backgroundColor: 'green', height: '50px', width: '50px'
// }}></div>
// <button onClick={toggleColor}>Toggle color</button>
// </div>
// );
// }
// export default AccessDomTwo

// Storage of mutable values
// Example 1

// import React from 'react'
// import { useRef } from 'react';
// function Count() {
// const countRef = useRef(0);
// const handle = () => {
// countRef.current++;
// console.log(`Clicked ${countRef.current} times`);
// alert(`Clicked ${countRef.current} times`);
// };
// console.log('I rendered!');
// return (
// <div>
// <button onClick={handle}>Click me</button>
// </div>
// )
// }
// export default Count

// Example 2:Usage in a timer

import React, {useRef, useEffect} from 'react'
function Timer() {
const timerIdRef = useRef();
useEffect(() => {
timerIdRef.current = setInterval(() => {
console.log('Timer tick');
}, 1000);
return () => {
clearInterval(timerIdRef.current);
};
}, []);
return (
<div>
Check your console for timer ticks every second.

</div>
);
}
export default Timer