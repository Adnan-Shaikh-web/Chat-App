
import { Routes, Route, Navigate } from 'react-router-dom';
import Chat from './Pages/Chat';
import Register from './Pages/Register';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import NavBar from './Components/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Chat />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>

  )
}

export default App
