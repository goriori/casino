export const ERRORS = {
  ERROR_SERVER: {
    TYPE: 'error_server',
    MESSAGE: 'Произошла ошбика сервера',
  },
  ERROR_VALIDATION: {
    TYPE: 'error_validation',
    MESSAGE: 'Ошибка валидации, пожалуйста проверьте веденные данные',
  },
  ERROR_VERIFICATION: {
    TYPE: 'error_verification',
    MESSAGE: 'Ваш аккаунт не верефицирован',
  },
  ERROR_LOW_BALANCE: {
    TYPE: 'error_low_balance',
    MESSAGE: 'Недостаточно средств',
  },
  ERROR_NOT_FOUND_PROMOCODE: {
    TYPE: 'error_not_found_promocode',
    MESSAGE: 'Промокод не найден',
  },
  ERROR_EXPIRED_TOKEN: {
    TYPE: 'error_expired_token',
    MESSAGE: 'Срок действия токена истек, пройдите повторную авторизацию',
  },
  ERROR_AUTHORIZATION: {
    TYPE: 'error_authorization',
    MESSAGE: 'Ошибка авторизации, проверть логин или пароль',
  },
  ERROR_REGISTRATION: {
    TYPE: 'error_registration',
    MESSAGE:
      'Ошибка регистрации, пожалуйста проверьте корректность веденных данных',
  },
  ERROR_COPY_REFERALE_CODE: {
    TYPE: 'error_copy_referale_code',
    MESSAGE: 'Не удалось скопировать реферальный код ',
  },
  ERROR_NO_TEMPORARILY_ACCESS_MODULE: {
    TYPE: 'error_no_temporarily_access_module',
    MESSAGE: 'Данный модуль временно не доступен',
  },
}
