// Ravi Gohil14:53
// import { useState } from 'react';

// export default function Counter() {
//   const [counter, setCounter] = useState(5);

//   return (
//     <>
//       <span>{counter}</span>
//       <button onClick={() => {
//         setCounter(counter + 5);
//         setCounter(counter + 5);
//         alert(counter);
//         setCounter(counter + 5);
//         setCounter(counter + 5);
//       }}>Increment</button>
//     </>
//   )
// }
// 1: Alert with 5, 5
// 2: Alert with 15, 25
// 3: Alert with 5, 10
// 4: Error: Cannot update the same state multiple
// Ravi Gohil14:55
// import { useRef } from 'react';

// export default function Counter() {
//   let countRef = useRef(0);

//   function handleIncrement() {
//     countRef.current = countRef.current + 1;
//   }

//   return 
//   <>
//     <span>Count: {countRef.current}</span>
//     <button onClick={handleIncrement}>
//       Click me
//     </button>
//   </>
// }
// 1: Cannot read current property of undefined
// 2: Count: 1
// 3: null
// 4: Count: 0
// Ravi Gohil14:57
import { useRef } from 'react';

function MyCustomInput(props) {
  return <input {...props} />;
}

export default function MyCustomForm() {
  const inputRef = useRef(null);

  function handleInputFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyCustomInput ref={inputRef} />
      <button onClick={handleInputFocus}>
        Click Me
      </button>
    </>
  );
}
// 1: Input gets the focus
// 2: Warning: Function components cannot be given refs.
// 3: Cannot read current property of undefined
// 4: Warning: Missing ref on element
// TRooTech Business Solutions- Brijesh Satasiya- MERN Stack Developer
