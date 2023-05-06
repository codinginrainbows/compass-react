import { Routes, Route } from 'react-router-dom'
import { SignIn } from '../pages/sign-in'
import { SignUp } from '../pages/sign-up'
import { Home } from '../pages/home'

// todo: add private routes
function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}

export { AppRoutes }