// login({usernale, password}, '/login')
// sends credentials to server and saves returned token to localStorage.token

const contentPath = 'content'

const login = async (cred, path = 'login') => {
  const headers = new Headers()
  headers.set(
    'Authorization',
    `Basic ${Buffer.from(btoa(`${cred.username}:${cred.password}`))}`
  )
  return await fetch(`${window.location.origin}/${path}`, {
    method: 'POST',
    headers: headers,
  })
  .then(data => data.json())
  .then(data => {localStorage.setItem('token', data.token); return true})
  .catch(() => false)
}

const logout = async (path = 'logout') => {
  localStorage.removeItem('token')
  return await fetch(`${window.location.origin}/${path}`)
}

const authFetch = async (path = '', options = {}) => {
  const headers = options.headers || new Headers()
  headers.set('Authorization', `Bearers ${localStorage.getItem('token')}`)
  return await fetch(
    `${window.location.origin}/${path}`,
    options
  )
}

const save = async (content) => {
  const headers = new Headers()
  headers.set('Content-Type', 'text/plain')
  return await authFetch(
    'content',
    {headers, method: 'PUT', body: content}
  )
}

const get = async path => await fetch(`${window.location.origin}/${contentPath}/${path}`)
const server = {login, logout, save, get}

export default server
export {login, logout, save, get}
