import { useSessionStore } from '@/store/session/sessionStore.js'

const sessionStore = useSessionStore()
export const onCheckRegistrationFromTelegram = async (router) => {
  const tg = window.Telegram?.WebApp
  console.log(tg)
  if (tg) {
    try {
      const userId = tg.initDataUnsafe.user?.id
      await sessionStore.registration({
        username: userId,
        password: '',
        password_confirmation: '',
        shop_id: 1,
      })
      await sessionStore.authorization({ username: userId, password: '' })
    } catch (e) {
      const { response } = e
      const { status, data } = response

      const isHasUser =
        status === 422 &&
        'username' in data &&
        data.username[0] === 'The username has already been taken.'

      if (isHasUser) {
        router.push('/main')
      }
      console.log(e)
    }
  } else return false
}
