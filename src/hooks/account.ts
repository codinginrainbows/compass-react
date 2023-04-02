import { useNavigate } from "react-router-dom";

function useAccount() {
  const navigate = useNavigate()

  const user = localStorage.getItem('user')
  const password = localStorage.getItem('password')

  function createAccount(user: string, password: string) {
    localStorage.setItem('user', user)
    localStorage.setItem('password', password)
    
    navigate('/')
  }

  return { createAccount, user, password }
}

export { useAccount }
