import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_DEVELOPMENT_BASE_URL || process.env.REACT_APP_STAGING_BASE_URL || 'http://localhost:3333'
})

export default api;