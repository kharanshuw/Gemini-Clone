import React from 'react';
import Sidebar from './component/sidebar/Sidebar';
import Main from './component/main/Main';
import './index.css'



function App() {

  return (

    <div className='flex flex-row h-dvh '>

      <Sidebar></Sidebar>

      <Main></Main>

    </div>


  )
}

export default App;
