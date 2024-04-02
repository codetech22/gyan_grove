import React, { Suspense, lazy } from 'react'
import Dashboard from './layout/Dashboard'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import Upcommings from './component/Home/Upcommings'


const App = () => {
  const home = lazy(()=>import('../src/pages/Homes/Homes'))
  return (
    <div className='font-bold overflow-hidden'>
      <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            <Route path='/' element={<Home/>}/>
          </Route>
        </Routes>
      </Suspense>
      </BrowserRouter>
      <Upcommings/>
    </div>
  )
}

export default App
