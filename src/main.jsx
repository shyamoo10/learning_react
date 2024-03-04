import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from '../greeting.jsx'
import Fav_food from '../food.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Fav_food/>
  </React.StrictMode>,
)
