import { onMounted } from 'vue'

export function useMethods(accountMenu, desktopLinks, mobileLinks) {
  const activateLinks = () => {
    const deviceCurrent = isDeviceType()
    activeVisibilityLinks(deviceCurrent)
  }

  const activeVisibilityLinks = (type) => {
    const objHandlers = {
      desktop: () => {
        accountMenu.value.forEach((item) => {
          const searchResult = desktopLinks.some((link) => link === item.name)
          searchResult ? (item.visibility = true) : false
        })
      },

      tablet: () => {},
      mobile: () => {
        accountMenu.value.forEach((item) => {
          const searchResult = mobileLinks.some((link) => link === item.name)
          searchResult ? (item.visibility = true) : false
        })
      },
    }
    return objHandlers[type]()
  }

  const isDeviceType = () => {
    const device = navigator.userAgent
    const tabletReg = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i
    const mobileReg =
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/
    if (tabletReg.test(device)) return 'tablet'
    else if (mobileReg.test(device)) return 'mobile'
    else return 'desktop'
  }

  onMounted(() => {
    activateLinks()
  })

  return {
    isDeviceType,
  }
}
