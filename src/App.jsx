// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import HelloWorldComponent from "./Hello-World-Component";


// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>

// //       <h1>Hello Rupesh! React is Running 🚀</h1>

// //       {/* 👉 Use your new component */}
// //       <Hello />

// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           Clicked {count} times
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>

// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
// import './App.css';
// import HelloWorldComponent from './Hello-world/hello-world-component';
// import ProfessionalForm from './Hello-world/ProfessionalForm';

// function App() {
//   return (
//     <div className="app-container">
//       <header className="app-header">
//         <HelloWorldComponent name="My React App" title="WelCome" />
//       </header>
//       <main className="app-main">
//         <ProfessionalForm 
//           title="Professional Registration Form"
//           onSubmit={(data) => console.log('Form Data:', data)}
//         />
//       </main>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import FlexBoxComponent from "./flex-box/flex-box-component";
import HelloWorldComponent from "./Hello-world/hello-world-component";
import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
import PostionComponent from "./positioning/position-component";
import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-excellence-component";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import ImpactOfGlanceComponent from "./temp-folder/temp";
import OurPromiseCompnent from "./our-promise/our-promise-component";


function App() {
  return (
    <div>
      {/* <HelloWorldComponent /> */}
      {/* <FlexBoxComponent /> */}
      {/* <LeadersTomorrowComponent /> */}
      {/* <SymbolOfExcellenceComponent /> */}
     {/* <PostionComponent/> */}
     {/* <TrustedbyComponent/> */}
     {/* <ImpactOfGlanceComponent/>  */}
     <OurPromiseCompnent/>
    </div>
  );
}

export default App;