import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const insertThought = payload => api.post('/thought', payload)
export const getAllThoughts = () => api.get('/thoughts')
export const updateThoughtById = (id, payload) => api.put(`/thought/${id}`, payload)
export const deleteThoughtById = id => api.delete(`/thought/${id}`)
export const getThoughtById = id => api.get(`/thought/${id}`)

export const getAllImages = () => api.get('/images')
export const createImages = payload => api.post('/images', payload)

const apis = {
    insertThought,
    getAllThoughts,
    updateThoughtById,
    deleteThoughtById,
    getThoughtById,

    getAllImages,
    createImages,
}

export default apis