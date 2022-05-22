import axios from 'axios'

const baseUrl='http://localhost:3001/api/persons'

const getAll= () =>{
    return axios.get(baseUrl)
}

const addRecord = (newItem) =>{
    return axios.post(baseUrl,newItem)
}

const updateRecord = (id,newItem) => {
    return axios.put(`${baseUrl}/${id}`,newItem)
}

const removeRecord = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll,addRecord,updateRecord,removeRecord}