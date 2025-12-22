import CodersSignUp from './pages/CodersSignUp/CodersSignUp';
import CodersLogin from './pages/CodersLogin/CodersLogin';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Challenages from './pages/Challenages/Challenages';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import ProtectedRoutes from './Components/ProtectedRoute';

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
    <main className='h-dvh overflow-hidden dark:bg-cla-bg-dark dark:text-white bg-cla-white flex flex-col transition-colors'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CodersLogin />} />
          <Route path='/signup' element={<CodersSignUp />} />

          <Route element={<ProtectedRoutes />}>
            <Route element={<AppLayout />}>
              <Route path='/challenages' element={<Challenages />} />
              <Route path='/leaderboard' element={<Leaderboard />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </main>
  )
}

