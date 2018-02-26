import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

//setting default configuration that is used application wide
axios.defaults.baseURL ='https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
// axios.defaults.headers.posts['Content-Type'] = 'application/json'

axios.interceptors.request.use(request => {
    return request;
}, error => {
    console.log(error)
    return Promise.reject(error)
}) //interceptor - a global usage for the axios object

axios.interceptors.response.use(response => {
    return response;
}, error => {
    console.log(error)
    return Promise.reject(error)
}) //interceptor - a global usage for the axios object


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
