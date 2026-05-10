import { useState } from "react"
import ExpenseTracker from "./components/HomeUI"
import Login from "./components/LoginUI"

function App() {
  const [user, setUser] = useState(() => !!localStorage.getItem("access"))
  return user ?
    <ExpenseTracker onLogout={() => setUser(false)} /> : <Login onLogin={() => setUser(true)} />

}

export default App