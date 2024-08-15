import axios from "axios";
const apiEP = 'http://localhost:8000/api/v1/taskLists'
export const postRequest = async (obj)=>{
        try {
            const response = await axios.post(apiEP, obj)
            return response.data
        } catch (error) {
            return {status:"error",msg:error.message}
        }
}
export const getAllTasks = async()=>{
    try {
        const response = await axios.get(apiEP)
        return response.data
    } catch (error) {
        return {
            status:"error",
            msg:error.message
        }
    }
}