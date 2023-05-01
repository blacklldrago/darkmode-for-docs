import React from 'react'
import Switcher from './components/Switcher/Switcher'

const App = () => {
  return (<div>
    <div className='bg-[white] dark:bg-[black]'>
        <div className='w-[7%] m-auto pt-[100px]'>
            <Switcher />
        </div>
    <h1 className='pb-[100px] text-[100px] text-[black] dark:text-[white] bg-[white] dark:bg-[black] text-center'>Darkmode</h1>
    </div>
  </div>)
}

export default App