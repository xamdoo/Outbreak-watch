import axios from "axios"

let URL = "http://localhost:8000"

export const getAllBlogs = ()=>{
    return axios.get(`${URL}/blog`)
}

export const getCommentList = ()=>{
    return axios.get(`${URL}/comment/`)
}