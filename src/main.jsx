import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from '../greeting.jsx'
import Fav_food from '../food.jsx'
import Sample from '../samplefile.jsx'
import HtmlToJsx from '../html_To_jsx.jsx'
import TodoList from '../sample2.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <TodoList/>
  </React.StrictMode>,
)
