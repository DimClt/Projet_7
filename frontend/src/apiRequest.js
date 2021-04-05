import axios from 'axios'
const url = 'http://localhost:3000/api/'

const token = localStorage.getItem('token')
const auth = {
    headers: {
        authorization: 'Bearer ' + String(token)
    }
}

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
    /************* Profile *****************/
    getUserById(userId) {
        return axios.get(url+`profiles/${ userId }`, auth)
    },
    updateUser(newProfile, id) {
        return axios.put(url+`profiles/${ id }`, newProfile, {
            headers: {
                'authorization': 'Bearer ' + String(token),
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    deleteUser(userId) {
        return axios.delete(url+`profiles/${ userId }`, auth)
    },
    /************* Article *****************/
    createArticle({ ...article }) {
        return axios.post(url+'articles/publish', {
            ...article,
            userId: Number(localStorage.getItem('userId'))
        }, auth)
    },
    getAllArticles() {
        return axios.get(url+'articles')
    },
    getArticleById(article_id) {
        return axios.get(url+`articles/${ article_id }`)
    },
    updateArticle({ ...newArticle }) {
        return axios.put(url+`articles/${ newArticle.article_id }`, {
            ...newArticle
        }, auth)
    },
    deleteArticle(article_id) {
        return axios.delete(url+`articles/${ article_id }`, auth)
    },
    /************* Comments *****************/
    createComment({ ...commentForm }) {
        return axios.post(url+'comments/comment', {
            ...commentForm
        }, auth)
    },
    getAllComments(comment_article) {
        return axios.get(url+`comments/${ comment_article }`)
    },
    updateComment({ ...newComment }) {
        return axios.put(url+`comments/${ newComment.comment_id }`, {
            ...newComment
        }, auth)
    },
    deleteComment(comment_id) {
        return axios.delete(url+`comments/${ comment_id }`, auth)
    }
}

export default api