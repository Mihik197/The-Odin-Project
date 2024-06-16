import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Greeting, Intro, FavouriteFood} from './Greeting.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Intro />
    <Greeting />
    <FavouriteFood/>
  </React.StrictMode>,
)
