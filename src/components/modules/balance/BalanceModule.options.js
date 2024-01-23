import { ref } from 'vue'

export const btnActive = ref(false)

export const popupReplenishment = ref(false)
export const popupSetting = ref({
  targetScreen: 'replenishment',
})
export const navigation = [
  {
    id: 1,
    icon: 'account',
    title: 'Личный кабинет',
    handler: function () {},

  },
  {
    id: 2,
    icon: 'score',
    title: 'Пополнение счета',
    handler: function () {
      console.log('click open')
      popupSetting.value.targetScreen = 'replenishment'
      popupReplenishment.value = !popupReplenishment.value
    },

  },
  {
    id: 3,
    icon: 'conclusion',
    title: 'Вывод средств',
    handler: function () {
      popupSetting.value.targetScreen = 'conclusion'
      popupReplenishment.value = !popupReplenishment.value
    },

  },
  {
    id: 4,
    icon: 'support',
    title: 'Тех. поддержка',
    handler: function () {},

  },
]
