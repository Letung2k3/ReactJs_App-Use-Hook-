import axios from "../utils/axiosCustomMize"
const postCreateNewUser = (email, password, username, role, image) => {
     const data = new FormData();
     data.append('email', email);
     data.append('password', password);
     data.append('username', username);
     data.append('role', role);
     data.append('userImage', image)
     return axios.post('api/v1/participant', data)
}
const getUser = () => {
     return axios.get('api/v1/participant/all')
}

const putUpdateUser = (id, username, role, image) => {
     const data = new FormData();
     data.append('id', id);
     data.append('username', username);
     data.append('role', role);
     data.append('userImage', image)
     return axios.put('api/v1/participant', data)
}

const deleteUser = (userId) => {
     return axios.delete('api/v1/participant', { data: { id: userId } })
}
const getUserPaginate = (page, limit) => {
     return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

const postUserLogin = (email, password) => {
     return axios.post('api/v1/login', {
          email: email,
          password: password,
          delay: 4000
     })
}
const postUserRegister = (email, password, username) => {
     return axios.post('api/v1/register', { email: email, password: password, username: username })
}

const getQuizByUser = () => {
     return axios.get('/api/v1/quiz-by-participant')
}
const getDataQuizz = (id) => {
     return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`)
}
export {
     postCreateNewUser,
     getUser,
     putUpdateUser,
     deleteUser,
     getUserPaginate,
     postUserLogin,
     postUserRegister,
     getQuizByUser,
     getDataQuizz
}