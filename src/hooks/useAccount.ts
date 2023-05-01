import { useNavigate } from "react-router-dom";

function useAccount() {
  const navigate = useNavigate()

  const user = localStorage.getItem('user')
  const password = localStorage.getItem('password')

  function createAccount(user: string, password: string) {
    localStorage.setItem('user', user)
    localStorage.setItem('password', password)

    navigate('/home')
  }
  
  const credentials = {
    user: user,
    password: password
  }

  return { createAccount, user, password, credentials }
}

export { useAccount }
