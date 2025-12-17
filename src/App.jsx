import CodersSignUp from './pages/CodersSignUp/CodersSignUp';
import CodersLogin from './pages/CodersLogin/CodersLogin';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Challenages from './pages/Challenages/Challenages';

function AppLayout() {
  return (
    <div className="flex flex-col h-full min-h-0">
      <NavBar className="shrink-0" />
      <div className="flex-1 min-h-0 overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}

export default function App() {

  return (
    <main className='h-dvh overflow-hidden bg-cla-white flex flex-col'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CodersLogin />} />
          <Route path='/signup' element={<CodersSignUp />} />
          <Route element={<AppLayout />}>
            <Route path='/challenages' element={<Challenages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

