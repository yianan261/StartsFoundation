import React from "react"
import { Router } from "@reach/router"
import Login from "./AdminLogin/Login"
import PrivateRoute from "../components/private-route"

const Dashboard = () => <h1>dashboard</h1>
const Default = () => <h1>Main App</h1>

const App = () => {
  return (
    <Router basepath="/app">
      <PrivateRoute component={Dashboard} path="/dashboard" />
      <Default path="/" />
      <Login path="/login" />
    </Router>
  )
}

export default App
