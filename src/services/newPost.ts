import { toast } from "react-toastify"
import { httpClient } from "../config/httpConfig"
import { IPost } from "../models/post"

function newPost(data: IPost) {
    try {
        const client = httpClient()
        
        const response = client.post('posts', data).then((res) => res.data)

        return response
    } catch (err: any) {
        console.log(err)
        return toast.error(err.message)
    }
}

export { newPost }