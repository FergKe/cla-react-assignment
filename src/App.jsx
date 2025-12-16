import CodersSignUp from './pages/CodersSignUp/CodersSignUp';
import CodersLogin from './pages/CodersLogin/CodersLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Challenages from './pages/Challenages/Challenages';

function App() {

  return (
    <main className='h-dvh overflow-hidden bg-cla-white'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CodersLogin />} />
          <Route path='/signup' element={<CodersSignUp />} />
        </Routes>
        <NavBar />
        <Routes>
          <Route path='/challenages' element={<Challenages />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
