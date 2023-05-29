import { useNavigate } from "react-router-dom";

function useAccount() {
  const navigate = useNavigate()

  const user = localStorage.getItem('user')
  const name = localStorage.getItem('name')

  function storageAccount(user: string, name: string) {
    localStorage.setItem('user', user)
    localStorage.setItem('name', name)

    navigate('/home')
  }
  
  const credentials = {
    user: user,
    name: name,
  }

  return { storageAccount, user, name, credentials }
}

export { useAccount }
