import { useNavigate } from "react-router-dom";

function useAccount() {
  const navigate = useNavigate()

  const user = localStorage.getItem('user')
  const password = localStorage.getItem('password')
  const name = localStorage.getItem('name')

  function createAccount(user: string, password: string, name: string) {
    localStorage.setItem('user', user)
    localStorage.setItem('password', password)
    localStorage.setItem('name', name)

    navigate('/home')
  }
  
  const credentials = {
    user: user,
    password: password,
  }

  return { createAccount, user, password, name, credentials }
}

export { useAccount }
