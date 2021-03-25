import axios from 'axios'
const url = 'http://localhost:3000/api/'

const api = {
    signup({ ...signupForm }) {
        return axios.post(url+'auth/signup', {
            mail: signupForm.mail,
            password: signupForm.password,
            firstname: signupForm.firstname,
            lastname: signupForm.lastname
        })
    },
    login({ ...loginForm }) {
        return axios.post(url+'auth/login', {
            mail: loginForm.mail,
            password: loginForm.password
        })
    },
    getAllArticles() {
        return axios.get(url+'articles')
    }
}

export default api