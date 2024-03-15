import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './passing components.jsx'
import Greeting from '../greeting.jsx'
import Fav_food from '../food.jsx'
import Sample from '../samplefile.jsx'
import HtmlToJsx from '../html_To_jsx.jsx'
import TodoList from '../sample2.jsx'
import PackingList from '../conditon.jsx'
import Animals from '../rendering.jsx'
import List from '../person.jsx'
import Home from './useStatehook.jsx'



import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Home/>
  </React.StrictMode>,
)
