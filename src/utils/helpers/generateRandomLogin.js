export const generateRandomLogin = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let login = ''

  for (let i = 0; i < 8; i++) {
    login += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return login
}
