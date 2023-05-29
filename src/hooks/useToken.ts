
function useToken() {
  const storageKey = '@CompassUOL:JWT'
  
  const token = localStorage.getItem(storageKey)

  function setToken(value: string) {
    localStorage.setItem(storageKey, value)
    window.location.replace('/home')
  }

  function removeToken() {
    localStorage.removeItem(storageKey)
    window.location.reload()
  }

  return { token, setToken, removeToken }
}

export { useToken }
