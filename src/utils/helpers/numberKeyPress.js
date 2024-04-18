export const onKeyPress = (event) => {
  const char = String.fromCharCode(event.keyCode)
  const isValidChar = /[0-9]|Backspace|Delete|Tab|ArrowLeft|ArrowRight/.test(
    char
  )
  if (!isValidChar) {
    event.preventDefault()
  }
}