
import './App.css'
// import Conditional from './embedding-expression/Conditional'
// import CallingFunction from './embedding-expression/CallingFunction'
// import Welcome from './embedding-expression/Welcome'
// import Basic from './Basic'

// function App() {

//   return (
//     <>
//     {/* ----embedding-expression---- */}
//     {/* <Basic/> */}
//     {/* <Welcome/> */}
//     {/*  <CallingFunction/>*/}
//     {/* <Conditional/>
//     </>
//   )
// }

// export default App */}


// ----class-components----
// import React, { Component } from 'react'
// import BasicClass from './Class-Components/BasicClass'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <BasicClass/>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Counter from './Class-Components/counter'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Counter/>
//       </div>
//     )
//   }
// }

{/* -----life cycle methods------ */}
import React, { Component } from 'react'
import Mounting from './Class-Components/life-cycle-methods/Mounting'
import Update from './Class-Components/life-cycle-methods/Update'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Mounting/> */}
        <Update/>
      </div>
    )
  }
}


