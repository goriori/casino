export const useRegular = () => {
  const dateRegular = /(0?[1-9]|[12][0-9]|3[01])[/\-.](0?[1-9]|1[012])[ /.-]/
  const phoneRegular = /^[78]\d{10}$/
  const emailRegular =
    /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
  const cardRegular = /\b(?:\d[ -]*?){13,16}\b/
  const dateTest = (date) => dateRegular.test(date)
  const emailTest = (email) => emailRegular.test(email)
  const cardTest = (numberCard) => cardRegular.test(numberCard)
  const phoneTest = (phone) => phoneRegular.test(phone)
  return {
    dateTest,
    emailTest,
    cardTest,
    phoneTest,
  }
}
