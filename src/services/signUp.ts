import { toast } from "react-toastify"
import { httpClient } from "../config/httpConfig"
import { ISignUp } from "../models/sign-up"

function signUp(data: ISignUp) {
    try {
        const client = httpClient()
        
        const response = client.post('users', data).then((res) => res.data)

        return response
    } catch (err: any) {
        return toast.error(err.response.data.message)
    }
}

export { signUp }