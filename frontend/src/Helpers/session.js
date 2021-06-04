const key = "projeto-integrador"

export const getToken = localStorage.getItem(key)
export const getUser = localStorage.getItem('dadosUsuario')

export const setToken = (token) => localStorage.setItem(key, token)
export const setUser = (user) => localStorage.setItem('dadosUsuario', user.nome)

export const removeToken = () => localStorage.removeItem(key)
export const removeUser = () => localStorage.removeItem('dadosUsuario')