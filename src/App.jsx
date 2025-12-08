// import "./App.css";
// import FlexBoxComponent from "./flex-box/flex-box-component";
// import FlexWrapComponent from "./flex-wrap/flex-wrap-component";
// import HelloWorldComponent from "./hello-world/hello-world-component";
// import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
// import OurPromisesComponent from "./our-promises/our-promises";
// import PositionExampleComponent from "./position-example/position-example-component";
// import PostionComponent from "./positioning/position-component";
// import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-excellence-component";
// import TrustedbyComponent from "./trusted-by/trusted-by-component";

// function App() {
//   return (
//     <div>
//       {/* <HelloWorldComponent /> */}
//       {/* <FlexBoxComponent /> */}
//       {/* <LeadersTomorrowComponent /> */}
//       {/* <SymbolOfExcellenceComponent /> */}
//       {/* <PostionComponent /> */}
//       {/* <TrustedbyComponent /> */}
//       {/* <FlexWrapComponent /> */}
//       {/* <OurPromisesComponent /> */}
//       {/* <PositionExampleComponent /> */}
//       <PropsPractice name="Sai" mobile="14234423243" />
//     </div>
//   );
// }

// export default App;



// import "./App.css";
// import FlexBoxComponent from "./flex-box/flex-box-component";
// import FlexWrapComponent from "./flex-wrap/flex-wrap-component";
// import HelloWorldComponent from "./hello-world/hello-world-component";
// import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
// import OurPromisesComponent from "./our-promises/our-promises";
// import PositionExampleComponent from "./position-example/position-example-component";
// import PostionComponent from "./positioning/position-component";
// import PropsPracticeTwo from "./props-practice-2/props-practice-2";
// import PropsPractice from "./props-practice/props-practice";
// import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-excellence-component";
// import TrustedbyComponent from "./trusted-by/trusted-by-component";

// function App() {
//   const arr1 = [
//     { name: "Hari", mobile: "1234" },
//     { name: "Ram", mobile: "5678" },
//   ];
//   return (
//     <div>
//       {/* <HelloWorldComponent /> */}
//       {/* <FlexBoxComponent /> */}
//       {/* <LeadersTomorrowComponent /> */}
//       {/* <SymbolOfExcellenceComponent /> */}
//       {/* <PostionComponent /> */}
//       {/* <TrustedbyComponent /> */}
//       {/* <FlexWrapComponent /> */}
//       {/* <OurPromisesComponent /> */}
//       {/* <PositionExampleComponent /> */}
//       {/* <PropsPractice name="Sai" mobile="14234423243" /> */}
//       <PropsPracticeTwo data={arr1} />
//     </div>
//   );
// }

// export default App;

import "./App.css";

import { Routes, Route } from "react-router-dom";
import HelloWorldComponent from "./hello-world/hello-world-component";
import OurPromisesComponent from "./our-promises/our-promises";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import PropsPractice from "./props-practice/props-practice";
import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-excellence-component";
import FourOFourComponent from "./404-component/404-component";
import UseStateComponent from "./usestate-1st/use-state-component";
import UsestateformComponent from "./use-state-form/use-state-form-component";
import AdditionOperationComponent from "./addition-operation-in-state/addition-operation-component";
import RegisterApp from "./pages/Register";
function App() {
  // const arr1 = [
  //   { name: "Ram", mobile: "1234" },
  //   { name: "Hari", mobile: "5678" },
  // ];
  const IndexPage = () => {
    return (
      <div
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          minHeight: "400px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>🏠 Home Page</h1>
        <p style={{ fontSize: "1.5rem", opacity: 0.9 }}>
          This is the index route for /leetcode
        </p>
      </div>
    );
  };
  return (
    <div>
      <Routes>
        {/* <Route path="/eshwar" element={<HelloWorldComponent />} />
        <Route path="/our-promise" element={<OurPromisesComponent />} />
        <Route path="/" element={<TrustedbyComponent />} /> */}

        {/* <Route path="/leetcode/*" element={<HelloWorldComponent />}>
          <Route index element={<IndexPage />} />
          <Route path="trusted-by" element={<TrustedbyComponent />} />
          <Route path="our-promise" element={<OurPromisesComponent />} />
        </Route> */}
        {/* <Route path="/leetcode/:id" element={<SymbolOfExcellenceComponent />} /> */}
        {/* <Route path="*" element={<FourOFourComponent />} /> */}
        {/* <Route path="/" element={<UseStateComponent />} /> */}
        {/* <Route path="/" element={<UsestateformComponent />} /> */}
        {/* <Route path="/" element={<AdditionOperationComponent />} /> */}
        <Route path="/" element={<RegisterApp />} />

        
        
      </Routes>
    </div>
  );
}

export default App;