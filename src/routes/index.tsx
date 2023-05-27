import { Routes, Route } from 'react-router-dom'
import { SignIn } from '../pages/sign-in'
import { SignUp } from '../pages/sign-up'
import { Home } from '../pages/home'
import { PrivateRoutes } from './private-routes'

// todo: add private routes
function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            
            <Route element={<PrivateRoutes />}>
                <Route path='/home' element={<Home />} />
            </Route >            
        </Routes>
    )
}

export { AppRoutes }