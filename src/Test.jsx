// import { useState } from "react";

// const Test = () => {

//     const [tasks, setTasks] = useState([
//         {
//         id: 1,
//         text: 'Doctor Appointment',
//         completed: true
//         },
//         {
//         id: 2,
//         text: 'Meeting at School',
//         completed: false
//         }
//         ]);
        
//         const [text, setText] = useState('');

//         function addTask(text) {
//             const newTask = {
//             id: Date.now(),
//             text,
//             completed: false
//             };
//             setTasks([…tasks, newTask]);
//             setText('');
//             }
//     return ( <>
//     <input
//         value={text}
//         onChange={e => setText(e.target.value)} 
//         />
//        <button onClick={() => addTask(text)}>Add</button> );
//        </>
// }
 
// export default Test;