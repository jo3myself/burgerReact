import axios from 'axios'

// Set axios to firebase
const instance = axios.create({
  baseURL: 'https://reactburger-5cc67.firebaseio.com/'
})

export default instance
