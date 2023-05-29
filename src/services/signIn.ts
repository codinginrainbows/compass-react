import { toast } from "react-toastify"
import { httpClient } from "../config/httpConfig"
import { ISignIn } from "../models/sign-in"

interface ISignInResponse {
    TokenJWT: string
    name: string
    user: string
}

async function signIn(data: ISignIn) {
    try {
        const client = httpClient()
    
        const response = await client.post('users/login', data).then((res) => res.data)

        return response
    } catch (err: any) {
        return toast.error(err.response.data.message)
    }
}

export { signIn }