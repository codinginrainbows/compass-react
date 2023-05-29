import { toast } from "react-toastify"
import { httpClient } from "../config/httpConfig"
import { IComment } from "../models/comments"

function newComment(data: IComment) {
    try {
        const client = httpClient()
        
        const response = client.post('comments', data).then((res) => res.data)

        return response
    } catch (err: any) {
        return toast.error(err.response.statusText)
    }
}

export { newComment }