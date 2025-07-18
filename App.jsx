
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {


  return (
    <div>
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login "element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/post/:id" element={<PostDetails/>} />
      </Routes>

      <Footer/>
          </div>
  )
}

export default App