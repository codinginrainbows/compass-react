import { Routes, Route } from 'react-router-dom'
import { SignInTemplate } from '../templates/sign-in'
import { SignUpTemplate } from '../templates/sign-up'
import { HomeTemplate } from '../templates/home'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SignInTemplate />} />
            <Route path='/sign-up' element={<SignUpTemplate />} />
            <Route path='/home' element={<HomeTemplate />} />
        </Routes>
    )
}

export { AppRoutes }