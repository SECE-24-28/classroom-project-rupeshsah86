// import React from 'react';
// import PropTypes from 'prop-types';
// import { WelcomeContainer } from './hello-world-style';

// const HelloWorldComponent = ({ name = 'User', title = 'Welcome' }) => {
//   return (
//     <WelcomeContainer>
//       <h1 className="welcome-title">
//         {title}, {name}!
//       </h1>
//     </WelcomeContainer>
//   );
// };

// HelloWorldComponent.propTypes = {
//   name: PropTypes.string,
//   title: PropTypes.string,
// };

// export default HelloWorldComponent;
import React from "react";
import { HelloWorldStyle } from "./hello-world-style";
const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
      {/* <h1 className="element">Sri eshwar</h1> */}
      <div className="parent">
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
        
        
      </div>
    </HelloWorldStyle>
  );
};
export default HelloWorldComponent;