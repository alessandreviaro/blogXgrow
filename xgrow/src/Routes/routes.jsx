import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';
import Posts from '../Pages/posts';
import Login from '../Pages/login';
import Register from '../Pages/register';


const Routes = () => {
  return (
    <BrowserRouter>
        <ReactRoutes>
            <Route path='/' element={<Posts />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </ReactRoutes>
    </BrowserRouter>
  )
}

export default Routes;
