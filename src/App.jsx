import {Suspense,lazy } from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
const Dashboard=lazy(()=>import ('./components/dashboard') )
const Signup=lazy(()=>import('./components/signup'))
const Signin=lazy(()=>import('./components/signin'))
const Send=lazy(()=>import('./components/send'))
export default function App(){
  return (<div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Suspense fallback={'loading...'}><Signup></Signup></Suspense>}></Route>
      <Route path='/signin' element={<Suspense fallback={'loading...'}><Signin></Signin></Suspense>}></Route>
      <Route path='https://voluble-trifle-b1239e.netlify.app/signin/dashboard' element={<Suspense fallback={'loading...'}><Dashboard></Dashboard></Suspense>}></Route>
      <Route path='/send' element={<Suspense fallback={'loading...'}><Send></Send></Suspense>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}