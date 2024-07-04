import { registerPlugins } from '@/plugins'

import App from './App.vue'

import { createApp } from 'vue'
import router from './routes'
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyA4NkwjPg5xNysbOjsCzc4ocCmrUpC76Yg",
//   authDomain: "login-f0b7c.firebaseapp.com",
//   projectId: "login-f0b7c",
//   storageBucket: "login-f0b7c.appspot.com",
//   messagingSenderId: "2649210204",
//   appId: "1:2649210204:web:46708098120bae8c2b5599",
//   measurementId: "G-7KFJ6F124H"
// };

const app = createApp(App)
app.use(router)

// initializeApp(firebaseConfig);

registerPlugins(app)

app.mount('#app')
