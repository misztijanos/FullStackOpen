import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then((response) => response.data)

const create = (newObject) =>
  axios.post(baseUrl, newObject).then((response) => response.data)

const update = (id, newObject) =>
  axios.put(`${baseUrl}/${id}`, newObject).then((response) => response.data)

//delete an entry, get back the new persons list
const remove = (id) => axios.delete(`${baseUrl}/${id}`).then(() => getAll())

export default { getAll, create, update, remove }
