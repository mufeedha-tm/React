import './App.css'
import Home from './functional-components/hooks/useContext/theme/Home'
import { ThemeProvider } from './functional-components/hooks/useContext/theme/ThemeContext'
// import UserList from './functional-components/hooks/useEffect/UserList'
// import UseEff from './functional-components/hooks/useEffect/UseEff'
// import ProfileForm from './functional-components/hooks/useState/ProfileForm'
// import BooleanState from './functional-components/hooks/useState/BooleanState'
// import TextInput from './functional-components/hooks/useState/TextInput'
// import Counter from './functional-components/hooks/useState/Counter'
// import Props from './functional-components/Props'
// import State from './functional-components/State'
// import Basic from './functional-components/Basic'
// import Conditional from './embedding-expression/Conditional'
// import CallingFunction from './embedding-expression/CallingFunction'
// import Welcome from './embedding-expression/Welcome'

function App() {

  return (
    <>
      {/* -------embedding-expression-------}
    {/* <Basic/> */}
      {/* <Welcome/> */}
      {/* <Conditional/>*/}


      {/* functional-components */}
      {/* <Basic/> */}
      {/* <State/> */}
      {/* <Props/> */}

      {/* -------hooks--------- use-state*/}
      {/* <Counter/> */}
      {/* <TextInput/> */}
      {/* <BooleanState/> */}
      {/* <ProfileForm/> */}

      {/*----- use-effect----- */}
      {/* <UseEff/> */}
      {/* <UserList /> */}

      {/* ----use-context----- */}
      {/*--- 1.Theme---- */}
      <ThemeProvider>
        <Home/>
      </ThemeProvider>


    </>
  )
}

export default App


// internal area  -  state
// probs   -  passing data



// import React, { Component } from 'react'
// import UpdateShould from './Class-Components/life-cycle-methods/UpdateShould'
// // import List from './embedding-expression/List'
// // import UnMounting from './class-components/life-cycle-methods/Unmounting'
// // import Counter from './class-components/Counter'
// // import Mounting from './class-components/life-cycle-methods/Mounting'
// // import Update from './class-components/life-cycle-methods/Update'
// // import BasicClass from './class-components/BasicClass'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
{/* <BasicClass/> */ }
{/* <Counter/> */ }

{/* --------life cycle methods--------- */ }
{/* this is when the component is being created and inserted into the DOM */ }

{/* <Mounting/> */ }
{/* <Update/> */ }
{/* <UpdateShould/> */ }
{/* <List/> */ }
{/* <UnMounting/> */ }

//       </div>
//     )
//   }
// }





