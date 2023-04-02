import { Routes, Route } from 'react-router-dom'
import { SignInTemplate } from '../templates/sign-in'
import { SignUpTemplate } from '../templates/sign-up'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SignInTemplate />} />
            <Route path='/sign-up' element={<SignUpTemplate />} />
        </Routes>
    )
}

export { AppRoutes }