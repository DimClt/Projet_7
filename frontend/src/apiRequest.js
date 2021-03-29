import axios from 'axios'
const url = 'http://localhost:3000/api/'

const auth = {
    headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
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
    /************* Article *****************/
    createArticle({ ...articleForm }) {
        return axios.post(url+'articles/publish', {
            ...articleForm 
        }, auth)
    },
    getAllArticles() {
        return axios.get(url+'articles', auth)
    },
    getArticleById(article_id) {
        return axios.get(url+`articles/${ article_id }`, auth)
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
            comment_article: commentForm.comment_article,
            userId: commentForm.userId,
            comment_text: commentForm.comment_text
        }, auth)
    },
    getAllComments(comment_article) {
        return axios.get(url+`comments/${ comment_article }`, auth)
    },
    deleteComment(comment_id) {
        return axios.delete(url+`comments/${ comment_id }`, auth)
    }
}

export default api