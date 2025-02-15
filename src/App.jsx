import React from 'react';
import Sidebar from './component/sidebar/Sidebar';
import Main from './component/main/Main';
import './index.css';
import ContextProvider from './context/Context.jsx';



function App() {

  return (

    <div className='flex flex-row h-dvh '>
      
      <ContextProvider>
        <Sidebar></Sidebar>

        <Main></Main>

      </ContextProvider>



    </div>


  )
}

export default App;
