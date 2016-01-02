import React    from "react"
import ReactDOM from "react-dom"
import App from "./components/App.js"

fetch("https://api.github.com/users/tmtk75", {method:"GET"})
  .then(res => res.json())
  .then(j => ReactDOM.render(
               <App user={j}/>,
               document.getElementById("container")));
