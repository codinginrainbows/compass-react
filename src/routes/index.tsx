import { Routes, Route } from 'react-router-dom'
import { SignIn } from '../pages/sign-in'
import { SignUp } from '../pages/sign-up'
import { Home } from '../pages/home'
import { PrivateRoutes } from './private'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<Home/>} path="/home" />
            </Route>

            <Route path='/' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            
            <Route path='*' element={<SignIn />}/>
        </Routes>
    )
}

export { AppRoutes }